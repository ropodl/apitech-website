import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: [

  ],
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
        description: "Official Website of API Technology",
        theme_color: "#ff7800",
        // icons: [
        //   {
        //     src: "favicon-192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "favicon-512.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //   },
        // ],
      },
  },
  sitemap: {
    siteUrl: "https://apitechnology.com.np",
  },
  swiper:{
    modules:['pagination', 'navigation', 'keyboard', 'autoplay']
  },
  modules: [
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(vuetify({
          autoImport: true,
        }));
      });
    },
  ],
  build: {
    transpile: ["vuetify"]
  },
});
