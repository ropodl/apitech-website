<script setup>
defineProps({
  title: String,
  desc: String,
});
</script>
<template>
  <v-card flat height="400" rounded="0">
    <v-img
      eager
      cover
      class="rounded-0 h-100 w-100"
      src="https://kitpro.site/securez/wp-content/uploads/sites/142/2023/01/cctv-security-camera-or-home-surveillance-cameras-2022-11-15-09-07-07-utc.jpg"
    >
      <v-overlay
        :model-value="true"
        contained
        no-click-animation
        persistent
        scrim="transparent"
        class="overlay-opacity"
        content-class="d-flex justify-center align-end w-100 h-100 text-center"
      >
        <div class="py-16">
          <div
            class="text-h2 font-weight-bold text-capitalize page-title-text mb-3"
            v-html="title"
          ></div>
          <div class="mx-auto divider"></div>
          <v-card-text style="width: 500px" v-text="desc"></v-card-text>
        </div>
      </v-overlay>
    </v-img>
  </v-card>
</template>

<style lang="scss">
// $overlay-opacity : 0.8;
div.page-title-text {
  color: rgb(var(--v-theme-primary));
  &:nth-child(0) {
    color: rgb(var(--v-theme-primary-darken1));
  }
}
.overlay-opacity {
  div.v-overlay__scrim {
    opacity: 0.9 !important;
    background-image: linear-gradient(
      180deg,
      transparent 0%,
      white 50%,
      white 100%
    ) !important;
  }
}
</style>
<style scoped>
.divider {
  border-radius: 10px;
  width: 100px;
  height: 6px;
  background-color: rgb(var(--v-theme-primary));
}
</style>
