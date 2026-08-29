// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [icon()],
});
