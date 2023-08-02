import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  build: {
    target: 'ES2022', // Configura el target a ES2020 o ES2021
  },
};

export default config;
