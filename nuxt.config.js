import colors from "vuetify/es5/util/colors";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "API Technology",
    title: "API Technology",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.15.2/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
      },
    ],
    script: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-EKC1Q8HW13",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/owl.js",
      ssr: false,
    },
    {
      src: "~/plugins/ga.js",
      ssr: false,
    },
    // {
    //   src: "~/plugins/lg.js",
    //   ssr: false,
    // },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    icon: {
      source: "./static/icon.png",
    },
    meta: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      name: "Api Technology",
      title: "test",
      author: "erskull",
      icon: "./static/icon.png",
      theme_color: "#1976d2",
    },
    manifest: {
      lang: "en",
      name: "Api Technology",
      short_name: "Api Technology",
      description:
        " API Technology offer you a business to business service in the Web, Mobile, Networking, ICT and Electronics Hardware platform.",
      background_color: "#000000",
    },
  },
  sitemap: {
    hostname: "https://www.apitechnepal.com/",
    gzip: true,
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: "#0C71C3",
          // colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: "https://www.apitechnepal.com/*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};
