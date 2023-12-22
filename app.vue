<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

onMounted(() => {
  nextTick(() => {
    let dark = localStorage.getItem("isDarkMode") === "true";
    theme.global.name.value = dark ? "dark" : "light";
  });
});
</script>

<template>
    <VitePwaManifest />
    <NuxtLoadingIndicator :height="1" color="rgb(var(--v-theme-primary))" />
    <v-app>
      <NuxtLayout>
        <NuxtPage keepalive />
        <LazyLayoutSnackbar />
      </NuxtLayout>
    </v-app>
</template>

<style lang="scss">
@media (min-width: 1280px) and (min-width: 1920px) {
  .v-container {
    max-width: 1366px !important;
  }
  .v-container.v-container--fluid {
    max-width: 100%;
  }
}

// image zoom effect
.v-img {
  transition: all 0.3s;
  .v-img__img {
    transition: all 0.3s;
    transform: scale(1);
  }
  &.zoom {
    .v-img__img {
      transform: scale(1.1) rotate(3deg);
    }
  }
}
</style>
