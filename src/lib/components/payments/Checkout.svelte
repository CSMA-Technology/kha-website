<script lang="ts">
  import { loadScript } from "@paypal/paypal-js";
  import type { PayPalNamespace } from "@paypal/paypal-js";
  import { createEventDispatcher } from "svelte";
  import { browser } from "$app/environment";
  import venmoLogo from "$lib/assets/logos/venmo.svg";
  import type { Person } from "./PaymentForm.svelte";
  import { collectError } from "$lib/utils";

  export let includesRecommendedContribution: Boolean;
  export let donationAmount: String;
  export let paypalTokenData: any;
  export let address: String;
  export let neighborhood: String;
  export let people: Person[];

  const dispatch = createEventDispatcher();
  let paypal: PayPalNamespace | null;
  let cardFields: any | null = null;
  let cardFieldsInitialized = false;
  let showCardFields = false;
  let animateCardFields = false;
  let cardFormValid = false;
  let isSubmitting = false;
  let nameField: any;
  let numberField: any;
  let expiryField: any;
  let cvvField: any;

  const initCardFields = async () => {
    if (!paypal || !paypal.CardFields || cardFieldsInitialized) return;
    try {
      cardFields = await paypal.CardFields({
        inputEvents: {
          onChange: (data: any) => {
            cardFormValid = !!data?.isFormValid;
          },
          onInputSubmitRequest: async (data: any) => {
            cardFormValid = !!data?.isFormValid;
            if (!cardFormValid) {
              try {
                if (data?.fields?.cardNumberField && !data.fields.cardNumberField.isValid) {
                  await numberField?.setAttribute("aria-invalid", "true");
                  numberField?.setMessage("Check card number");
                  numberField?.focus();
                }
                if (data?.fields?.cardExpiryField && !data.fields.cardExpiryField.isValid) {
                  await expiryField?.setAttribute("aria-invalid", "true");
                  expiryField?.setMessage("MM/YY required");
                }
                if (data?.fields?.cardCvvField && !data.fields.cardCvvField.isValid) {
                  await cvvField?.setAttribute("aria-invalid", "true");
                  cvvField?.setMessage("CVV required");
                }
              } catch (e) {
                // ignore
              }
            }
          },
        },
        async createOrder() {
          const res = await fetch("/api/payments/createOrder", {
            method: "post",
            body: JSON.stringify({
              includesRecommendedContribution,
              donationAmount,
              description: getCompactDescription(),
            }),
          });
          if (!res.ok) {
            dispatch("paymentError");
            return;
          }
          const order = await res.json();
          return order.id;
        },
        async onApprove(data: any) {
          const res = await fetch("/api/payments/captureOrder", {
            method: "post",
            body: JSON.stringify({ orderID: data.orderID }),
          });
          if (!res.ok) {
            dispatch("paymentError");
            isSubmitting = false;
            return;
          }
          const details = await res.json();
          if (details.status === "COMPLETED") {
            dispatch("paymentCompleted");
          } else {
            dispatch("paymentError");
          }
          isSubmitting = false;
        },
        onError(err: any) {
          collectError("card fields payment error", err);
          dispatch("paymentError");
          isSubmitting = false;
        },
      });

      nameField = cardFields.NameField();
      await nameField.render("#card-name");
      numberField = cardFields.NumberField();
      await numberField.render("#card-number");
      expiryField = cardFields.ExpiryField();
      await expiryField.render("#card-expiry");
      cvvField = cardFields.CVVField();
      await cvvField.render("#card-cvv");

      cardFieldsInitialized = true;
    } catch (error) {
      collectError("failed to render the PayPal Card Fields", error);
    }
  };
  const loadPaypal = async () => {
    const { clientId, token } = paypalTokenData;
    try {
      paypal = await loadScript({
        clientId,
        components: ["buttons", "card-fields"],
        dataClientToken: token,
        // Disable the Smart Button card funding to avoid the popup
        disableFunding: "paylater",
      });
    } catch (error) {
      collectError("failed to load the PayPal JS SDK script", error);
    }

    if (paypal && paypal.Buttons) {
      try {
        const buttons = paypal?.Buttons?.({
          async createOrder() {
            const res = await fetch("/api/payments/createOrder", {
              method: "post",
              body: JSON.stringify({
                includesRecommendedContribution,
                donationAmount,
                description: getCompactDescription(),
              }),
            });
            if (!res.ok) {
              dispatch("paymentError");
              return;
            }
            const order = await res.json();
            return order.id;
          },
          async onApprove(data: any, actions: any) {
            return actions.order?.capture().then((details: any) => {
              if (details.status === "COMPLETED") {
                dispatch("paymentCompleted");
              } else {
                dispatch("paymentError");
              }
            });
          },
          onError(err: any) {
            if (err.message !== "Detected popup close") {
              collectError("payment error", err);
              dispatch("paymentError");
            }
          },
        });
        await buttons?.render("#paypal-div");
      } catch (error) {
        collectError("failed to render the PayPal Buttons", error);
      }
    }

    // Initialize Card Fields immediately (section is hidden until toggled)
    await initCardFields();
  };
  $: if (browser && paypalTokenData) {
    loadPaypal();
  }

  const onBackPressed = () => dispatch("backPressed");
  const donation = Number(donationAmount);
  const totalPayment = includesRecommendedContribution ? (60 + donation).toFixed(2) : donation.toFixed(2);

  const getDescription = () => {
    const peopleInfo = people.map(({ email, name, phone }) => `${name} (${email},${phone})`).join(", ");
    return `Member(s): ${peopleInfo} | Address: ${address} | Neighborhood: ${neighborhood}`;
  };

  const getCompactDescription = (maxLen = 120) => {
    const peopleInfo = people.map(({ email, name, phone }) => `${name}(${email},${phone})`).join(",");
    const compactDescription = `${address}. ${peopleInfo}`;
    return compactDescription.length <= maxLen ? compactDescription : `${compactDescription.substring(0, maxLen - 3)}...`;
  };

  const onVenmoPressed = () => {
    const note = encodeURIComponent(getDescription());
    const url = `https://venmo.com/KendaleHomeowners-Association?txn=pay&note=${note}&amount=${totalPayment}&audience=private`;
    window.open(url);
    dispatch("paymentOffline", "Venmo should have opened in another window. Please finish your payment there. Thank you for your contribution!");
  };
</script>

<div>
  <button class="secondary-button" id="backBtn" on:click={onBackPressed}>&lt Back</button>
  <h3>Payment Confirmation</h3>
  {#if includesRecommendedContribution}
    <div class="inline-flex">
      <p class="item">Recommended Annual Contribution:</p>
      <p class="item">$60</p>
    </div>
  {/if}
  <div class="inline-flex">
    <p class="item">Additional Contribution:</p>
    <p class="item">${donationAmount}</p>
  </div>
  <div class="inline-flex total">
    <p class="items-total">Total:</p>
    <p class="items-total">${totalPayment}</p>
  </div>
  <h4>Checkout Options:</h4>
  <button on:click={onVenmoPressed} type="button" id="venmo-btn">
    <img alt="Venmo logo" src={venmoLogo} />
  </button>
  <div id="paypal-div" />

  {#if !showCardFields}
    <button
      type="button"
      id="card-toggle"
      class="primary-button"
      on:click={() => {
        showCardFields = true;
        animateCardFields = true;
        setTimeout(() => (animateCardFields = false), 400);
      }}>
      Credit or Debit Card
    </button>
  {/if}

  <!-- In-place Card Fields -->
  <div id="card-fields" class:hidden={!showCardFields} class:expanding={animateCardFields}>
    <div class="field-row">
      <span class="field-label">Name on card</span>
      <div id="card-name" />
    </div>
    <div class="field-row">
      <span class="field-label">Card number</span>
      <div id="card-number" />
    </div>
    <div class="field-row">
      <span class="field-label">Expiration</span>
      <div id="card-expiry" />
    </div>
    <div class="field-row">
      <span class="field-label">Security code</span>
      <div id="card-cvv" />
    </div>
    <button
      type="button"
      id="card-submit"
      class="primary-button"
      aria-live="polite"
      on:click={async () => {
        try {
          isSubmitting = true;
          await nameField?.setAttribute("disabled", "true");
          await numberField?.setAttribute("disabled", "true");
          await expiryField?.setAttribute("disabled", "true");
          await cvvField?.setAttribute("disabled", "true");
          await cardFields?.submit();
        } catch (err) {
          collectError("card fields submit error", err);
          dispatch("paymentError");
          isSubmitting = false;
        }
      }}
      disabled={!cardFormValid || isSubmitting}
      aria-busy={isSubmitting}>
      {#if isSubmitting}
        <span class="spinner" aria-hidden="true"></span>
        <span>Processing…</span>
      {:else}
        Pay ${totalPayment}
      {/if}
    </button>
  </div>
</div>

<style>
  #venmo-btn {
    width: 100%;
    max-width: 25rem;
    height: 3rem;
    margin-bottom: 0.8rem;
    border: none;
    border-radius: 4px;
    background-color: #f2f9ff;
  }
  #venmo-btn:hover {
    filter: brightness(0.95);
  }
  #venmo-btn img {
    width: 8rem;
    max-width: 40%;
  }
  @media (max-width: 480px) {
    #venmo-btn {
      height: 2rem;
    }
  }
  #paypal-div {
    max-width: 25rem;
    margin-left: auto;
    margin-right: auto;
  }
  #card-toggle {
    width: 100%;
    max-width: 25rem;
    height: 2.5rem;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #card-fields {
    max-width: 25rem;
    margin: 1rem auto 0;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background-color: #fafafa;
    transition: background-color 300ms ease;
  }
  .field-row {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.75rem;
  }
  .hidden {
    display: none;
  }
  .expanding {
    animation: expandReveal 300ms ease forwards;
    background-color: var(--primary-green);
  }
  @keyframes expandReveal {
    0% {
      transform: scaleY(0.9);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }
  #card-submit {
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 6px;
    background-color: #0070ba;
    color: white;
    font-weight: 600;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #card-submit .spinner {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  #card-submit:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
  #backBtn {
    display: block;
    padding: 0.5rem;
    min-width: 5rem;
    border: none;
    margin: 0;
    position: absolute;
    /* background-color: transparent; */
    transform: translate(-2rem, -2.2rem);
    background-color: transparent;
  }
  .inline-flex {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .item {
    font-weight: 500;
  }
  .items-total {
    font-weight: 700;
  }
  .total {
    border-top: 1px;
    border-top-style: solid;
  }
</style>
