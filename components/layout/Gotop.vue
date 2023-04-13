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
    aria-label="Go to top"
    icon
    size="x-large"
    color="primary"
    class="rounded-circle position-fixed"
    v-scroll="onScroll"
    :style="{
      bottom: fab ? '20px' : '-100px',
      right: '40px',
      zIndex: '999',
      transition: 'all 250ms linear',
    }"
    @click="scrollTo('__nuxt')"
  >
    <v-icon :icon="mdiArrowUp"></v-icon>
  </v-btn>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}
</style>
