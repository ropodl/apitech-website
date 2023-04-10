<template>
  <NuxtLoadingIndicator />
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
<style>
@media (min-width: 1280px) and (min-width: 1920px) {
  .v-container {
    max-width: 1366px !important;
  }
  .v-container.v-container--fluid {
    max-width: 100%;
  }
}
</style>
