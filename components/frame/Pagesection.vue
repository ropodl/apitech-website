<template>
  <v-parallax height="300" :src="imageSrc">
    <v-overlay absolute color="rgba(0,0,0,1)">
      <div
        class="text-h3 font-weight-light text-uppercase d-flex align-center justify-center"
        style="height:100%;"
      >
        {{ title }}
        <!-- {{ $nuxt.$route.name }} -->
      </div>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  props: ["imageSrc", "title"]
};
</script>

<style lang="scss"></style>
