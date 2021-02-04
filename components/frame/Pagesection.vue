<template>
  <v-img
    height="200"
    src="https://geniuscript.com/serity-kit/wp-content/uploads/2020/12/pager-bg.jpg"
  >
    <v-overlay absolute color="rgba(0,0,0,1)">
    <span class="text-h3 font-weight-black text-uppercase d-flex align-center justify-center" style="height:100%;">
      {{ $nuxt.$route.name }}
    </span>
    </v-overlay>
  </v-img>
</template>

<script>
export default {};
</script>

<style></style>
