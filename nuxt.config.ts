import colors from "vuetify/lib/util/colors";

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
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/google-fonts",
    "vuetify-nuxt-module",
    "nuxt-simple-sitemap",
    "nuxt-gtag",
    "nuxt-capo",
  ],
  gtag: {
    id: "G-1KNXYTYZ03",
  },
  googleFonts: {
    download: true,
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html}"],
    },
    manifest: {
      name: "API Technology",
      short_name: "API Tech",
      theme_color: "#1976d2",
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
    },
  },
  sitemap: {
    siteUrl: "https://apitechnology.com.np",
  },
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "mdi",
      },
      theme: {
        defaultTheme: "light",
        variations: {
          colors: [
            "primary",
            "secondary",
            "error",
            "info",
            "success",
            "warning",
          ],
          lighten: 5,
          darken: 5,
        },
        themes: {
          light: {
            dark: false,
            colors: {
              primary: "#016780",
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3,
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: "#016780",
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3,
            },
          },
        },
      },
    },
  },
});