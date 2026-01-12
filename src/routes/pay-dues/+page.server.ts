// This page has been moved to /contribute

import { redirect } from "@sveltejs/kit";

export const load = async () => {
  redirect(301, "/contribute");
};
