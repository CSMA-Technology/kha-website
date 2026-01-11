import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { createOrder } from "$lib/server/paypalutils";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { includesRecommendedContribution, donationAmount, description } = await request.json();
    const order = await createOrder(includesRecommendedContribution, Number(donationAmount), description);
    return json(order);
  } catch (err: any) {
    console.error(err);
    throw error(500, err.message);
  }
};
