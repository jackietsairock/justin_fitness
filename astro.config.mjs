import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://justin.jackiedesign.tw/",
  integrations: [
    react(),
    tailwind({
      config: "./tailwind.config.cjs",
    }),
  ],
  output: "static",
});
