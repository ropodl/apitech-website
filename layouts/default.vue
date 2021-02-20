<template>
  <v-app>
    <FrameGotop />
    <FrameThememode />
    <FrameTopbar class="hidden-md-and-down" />
    <FrameNavbar />
    <v-main>
      <nuxt keep-alive />
    </v-main>
    <FrameFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
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
