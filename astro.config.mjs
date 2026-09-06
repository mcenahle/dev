// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://usdws.mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  server: { port: 5000 },
  integrations: [icon()],

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],

          test(element) {
            const href = element.properties?.href;

            return typeof href === "string" && /^https?:\/\//.test(href);
          },

          properties: {
            className: ["external-link", "usa-link"],
          },
        },
      ],
    ],
  },
});
