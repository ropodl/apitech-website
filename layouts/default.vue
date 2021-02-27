<template>
  <v-app>
    <FrameGotop />
    <!-- <FrameThememode /> -->
    <FrameTopbar class="hidden-md-and-down" />
    <FrameNavbar />
    <v-main>
      <nuxt keep-alive />
    </v-main>
    <v-container>
      <Clients />
    </v-container>
    <FrameFooter />
    <v-snackbar v-model="snackbar">
      This website uses cookies. Handle with care.
      <!-- {{ text }} -->

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          color="primary"
          :timeout="timeout"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      timeout: 0,
      snackbar: true
    };
  },
  mounted() {
    const consent = localStorage.getItem("privacy_consent");
    const theme = localStorage.getItem("dark_theme");
    if (consent) {
      if (consent == "true") {
        this.snackbar = true;
      } else {
        this.snackbar = false;
      }
    }
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  }
};
</script>
<style lang="scss">
div.card-top-border {
  position: absolute;
  right: 0;
  width: 100px;
  height: 4px;
  background-color: var(--v-primary-base);
}
div.card-bottom-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 4px;
  background-color: var(--v-primary-base);
}
div.v-card {
  // box-shadow: 0 1px 1px rgba(16, 27, 30, 0.15), 0 2px 2px rgba(16, 27, 30, 0.15),
  //   0 4px 4px rgba(16, 27, 30, 0.15), 0 8px 8px rgba(16, 27, 30, 0.15),
  //   0 16px 16px rgba(25, 118, 210, 0.15) !important;
}
</style>
