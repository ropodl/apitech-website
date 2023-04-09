<script setup>
import { defineAsyncComponent } from "vue";
import { useNetwork } from "@vueuse/core";
const { isOnline } = useNetwork();

// const OfflineBanner = defineAsyncComponent(() => import("@/components/layout/OfflineBanner.vue"));
const Navbar = defineAsyncComponent(() =>
  import("@/components/layout/Navbar.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/components/layout/Footer.vue")
);
</script>
<template>
  <v-app>
    <!-- <v-layout> -->
    <Navbar />
    <!-- </v-layout> -->
    <!-- <v-main> -->
    <!-- <OfflineBanner v-if="!isOnline" /> -->
    <router-view />
    <Footer />
    <!-- </v-main> -->
  </v-app>
</template>
<style>
::selection {
  color: white;
  background: rgba(var(--v-theme-primary), 1);
}
.v-container {
  /* max-width: 1366px !important; */
}
</style>
