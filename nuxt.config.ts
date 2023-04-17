import vuetify from "vite-plugin-vuetify";

const seoImage = "https://apitechnology.com.np/images/apitech.webp";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      meta: [
        {
          name: "og:image",
          content: seoImage,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:image",
          content: seoImage,
        },
      ],
    },
  },
  css: [],
  devtools: false,
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    injectRegister: "auto",
    // includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
    workbox: {
      cleanupOutdatedCaches: true,
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    manifest: {
      name: "API Technology",
      short_name: "API Tech",
      start_url: "/",
      display: "standalone",
      theme_color: "#ff7800",
      description: "Official Website of API Technology",
      icons: [
        {
          src: "icon.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
  sitemap: {
    siteUrl: "https://apitechnology.com.np",
  },
  modules: [
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(
          vuetify({
            autoImport: true,
          })
        );
      });
    },
  ],
  build: {
    transpile: ["vuetify"],
  },
});
