import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://justin-fitness.example.com",
  integrations: [
    react(),
    tailwind({
      config: "./tailwind.config.cjs",
    }),
  ],
  output: "static",
});
