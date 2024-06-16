import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "SaltLakeCity.dental",
      customCss: [
        "./src/styles/docs.css",
        "@fontsource-variable/mada",
        "@fontsource-variable/montserrat",
        "@fontsource/palanquin/300.css",
        "@fontsource/palanquin/400.css",
        "@fontsource/palanquin/500.css",
        "@fontsource/palanquin/600.css",
      ],
      plugins: [starlightBlog({})],
      sidebar: [
        {
          label: "Docs",
          autogenerate: { directory: "docs" },
        },
      ],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      }
    }),
  ],
});
