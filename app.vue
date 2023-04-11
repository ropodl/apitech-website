<template>
  <NuxtLoadingIndicator />
  <v-app>
    <NuxtLayout>
      <NuxtPage />
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
            transform: scale(1.1);
        }
    }
}
</style>
