<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

defineProps({
  image: { type: String, default: "/images/img3.avif" },
  title: String,
  desc: String,
});
</script>
<template>
  <v-card flat height="300" rounded="0">
    <v-img eager cover class="rounded-0 h-100 w-100" :src="image">
      <v-overlay
        :model-value="true"
        contained
        no-click-animation
        persistent
        scrim="transparent"
        class="overlay-opacity"
        content-class="d-flex justify-center align-end w-100 h-100 text-center"
      >
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <div
                class="text-h2 font-weight-bold text-capitalize page-title-text mb-3"
                :class="isDark ? 'text-white' : 'text-primary'"
                v-html="title"
              ></div>
              <div
                class="mx-auto divider"
                :class="isDark ? 'bg-white' : 'bg-primary'"
              ></div>
              <!-- <v-card-text
                v-if="desc"
                style="width: 500px"
                v-text="desc"
              ></v-card-text> -->
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-img>
  </v-card>
</template>

<style lang="scss">
.overlay-opacity {
  div.v-overlay__scrim {
    opacity: 0.9 !important;
    background-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(var(--v-theme-surface), 0.8) 50%,
      rgb(var(--v-theme-surface)) 80%,
      rgb(var(--v-theme-surface)) 90%,
      rgb(var(--v-theme-surface)) 100%
    ) !important;
  }
}
</style>
