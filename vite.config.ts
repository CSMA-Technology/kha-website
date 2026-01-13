import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ["@paypal/paypal-js"],
  },
};

export default config;
