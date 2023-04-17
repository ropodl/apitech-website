import vuetify from "vite-plugin-vuetify";

const seoImage = "https://apitechnology.com.np/images/apitech.webp";

export default defineNuxtConfig({
  app: {
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      meta: [
        // Facebook
        {
          name: "og:locale",
          content: "en",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          content: seoImage,
        },
        // Twitter
        {
          name: "twitter:image",
          content: seoImage,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
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
    registerType: 'autoUpdate',
    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: '/',
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    manifest: {
      name: "API Technology",
      short_name: "API Tech",
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
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      // periodicSyncForUpdates: 3600,
    },
    // devOptions: {
      // enabled: true,
      // type: 'module',
    // },
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
