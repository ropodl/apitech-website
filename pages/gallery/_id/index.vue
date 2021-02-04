<template>
  <div class="gallery-show">
    <v-container>
      <v-row>
        <v-col cols="12">
          {{ id }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style></style>
