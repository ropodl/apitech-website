<script setup>
import { mdiArrowUp } from "@mdi/js";

let fab = ref(false);

const onScroll = (e) => {
  if (typeof window === "undefined") return;
  const top = window.scrollY || 0;
  // || window.pageYOffset || e.target.scrollTop
  fab.value = top > 500 ? true : false;
};
</script>
<template>
  <v-btn
    icon
    aria-label="Go to top button"
    size="x-large"
    color="primary"
    variant="tonal"
    class="rounded-circle position-fixed"
    v-scroll="onScroll"
    :style="{
      bottom: fab ? '20px' : '-70px',
      right: '40px',
      zIndex: '999',
      transition: 'all 250ms cubic-bezier(.17,.26,1,.32) 0s',
    }"
    @click="scrollTo('__nuxt')"
  >
    <v-icon :icon="mdiArrowUp"></v-icon>
  </v-btn>
</template>
