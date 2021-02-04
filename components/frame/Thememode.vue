<template>
<v-hover v-slot="{ hover }">
  <div class="darkmode">
    <v-btn
      color="primary" elevation="0"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      style="border-radius:50px;"
    >
      <v-icon class="ml-4">{{
        $vuetify.theme.dark ? "light_mode" : "dark_mode"
      }}</v-icon>
      <span v-if="hover" class="ml-4">Dark Mode</span>
    </v-btn>
  </div>
</v-hover>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.darkmode {
  position: fixed;
  bottom: 50px;
  left: -20px;
  z-index: 9999;
}
</style>
