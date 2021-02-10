<template>
  <h4 class="text-h5">
    <span class="font-weight-bold mr-1">
      {{ first }}
    </span>
    {{ second }}
    <!-- <v-divider class="ml-4"></v-divider> -->
    <div class="d-flex my-2">
      <span class="primary" style="width:60px;height:5px;"></span>
      <span
        :class="$vuetify.theme.dark ? 'white' : 'black'"
        style="margin-left:5px;width:30px;height:5px;"
      ></span>
    </div>
  </h4>
</template>

<script>
export default {
  props: ["first", "second"]
};
</script>

<style></style>
