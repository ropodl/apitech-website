<template>
  <h4 class="text-h5 d-flex align-center mb-2">
    <span class="font-weight-bold mr-2">
      {{ first }}
    </span>
    {{ second }} <v-divider class="ml-4"></v-divider>
  </h4>
</template>

<script>
export default {
  props: ["first", "second"]
};
</script>

<style></style>
