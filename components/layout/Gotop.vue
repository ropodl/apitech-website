<script setup>
import { mdiArrowUp } from "@mdi/js";

let fab = ref(false);
const onScroll = (e) => {
  if (typeof window === "undefined") return;
  const top = window.pageYOffset || e.target.scrollTop || 0;
  fab = top > 300;
};
</script>
<template>
  <v-btn
    aria-label="Go to top"
    icon size="x-large"
    color="primary"
    class="rounded-circle"
    v-scroll="onScroll"
    style="position: fixed; bottom: 20px; right: 20px"
    @click="scrollTo('__nuxt')"
  >
    <v-icon :icon="mdiArrowUp"></v-icon>
  </v-btn>
</template>
<style>
button.v-btn {
  z-index: 2;
}

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
