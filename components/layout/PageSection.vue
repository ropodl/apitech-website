<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

defineProps({
  image: { type: String, default: "/images/img1.avif" },
  title: String,
  desc: String,
});
</script>
<template>
  <v-card flat height="300" rounded="0">
    <v-img eager cover class="rounded-0 h-100 w-100" :src="image">
      <div
        class="w-100 h-100 d-flex justify-center align-end text-center overlay"
      >
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <div
                class="text-h2 font-weight-bold text-capitalize page-title-text mb-3 text-white"
                v-html="title"
              ></div>
              <div class="mx-auto divider bg-white"></div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </v-card>
</template>

<style lang="scss" scoped>
.overlay {
  background-image: linear-gradient(
    180deg,
    rgba(var(--v-theme-primary), 0.1) 0%,
    rgba(var(--v-theme-primary), 0.8) 50%,
    rgb(var(--v-theme-primary)) 80%,
    rgb(var(--v-theme-primary)) 90%,
    rgb(var(--v-theme-primary)) 100%
  ) !important;
}
</style>
