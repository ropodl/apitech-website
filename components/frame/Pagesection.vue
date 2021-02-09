<template>
  <v-parallax
    height="300"
    src="https://images.unsplash.com/photo-1566060475410-1159300f046f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=100"
  >
    <v-overlay absolute color="rgba(0,0,0,1)">
      <span
        class="text-h3 font-weight-light text-uppercase d-flex align-center justify-center"
        style="height:100%;"
      >
        {{ $nuxt.$route.name }}
      </span>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
