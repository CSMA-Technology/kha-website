import type { Actions } from "./$types";
import { KHA_AUTH_HEADER } from "$env/static/private";

export const prerender = false;
export const actions: Actions = {
  subscribe: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const name = data.get("name") || email?.toString().split("@")[0];
    const response = await fetch(
      "https://communications.kendalehoa.org/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: KHA_AUTH_HEADER,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, status: "enabled", lists: [12] }), // Hard-coding the KHA public list for now
      }
    );
    let subscriptionErrorMessage = null;
    if (!response.ok) {
      console.error(
        `Error adding subscriber to email list: ${response.status}:${
          response.statusText
        }\n${await response.text()}`
      );
      if (response.status == 409) {
        subscriptionErrorMessage = `The email address ${email} is already subscribed!`;
      }
    }
    return {
      subscriptionStatus: response.ok ? "success" : "error",
      subscriptionErrorMessage,
    };
  },
};
