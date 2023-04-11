import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass",
  '@fortawesome/fontawesome-svg-core/styles.css'
],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    },
  },
  pwa: {
    /* PWA options */
  },
  sitemap: {
    siteUrl: "https://apitechnology.com.np",
  },
  swiper:{
    modules:['pagination', 'navigation', 'keyboard', 'autoplay']
  },
  modules: [
    "@vite-pwa/nuxt",
    "nuxt-swiper",
    "nuxt-simple-sitemap",
    "@nuxtjs/google-fonts",
    /* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/ */
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(vuetify());
      });
    },
  ],
  build: {
    transpile: ["vuetify",'@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/vue-fontawesome']
  },
});
