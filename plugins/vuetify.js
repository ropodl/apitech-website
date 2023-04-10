import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import colors from "vuetify/lib/util/colors";
// Icons
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md3,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    theme: {
      defaultTheme: "light",
      variations: {
        colors: ["primary", "secondary", "error", "info", "success", "warning"],
        lighten: 5,
        darken: 5,
      },
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.blue.darken2,
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
            primary: colors.blue.darken2,
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
  });
  nuxtApp.vueApp.use(vuetify);
});
