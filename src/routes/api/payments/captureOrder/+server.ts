import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { captureOrder } from "$lib/server/paypalutils";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { orderID } = await request.json();
    if (!orderID) throw new Error("Missing orderID");
    const details = await captureOrder(orderID);
    return json(details);
  } catch (err: any) {
    console.error(err);
    throw error(500, err.message);
  }
};
