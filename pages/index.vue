<template>
  <div class="home-page">
    <Carousel />
    <!-- Card Container -->
    <v-container class="pt-0 mt-n16">
      <SupportCard />
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <AboutBanner />
            </v-container>
            <WhyAPI />
            <v-container>
              <AboutPara />
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Out Side Card Container -->
    <v-container>
      <Clients />
      <BlogCard />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
div.border {
  border-top: 15px solid var(--v-primary-base);
  border-right: 15px solid var(--v-primary-base);
}
div.v-overlay__content {
  width: 100%;
  height: 100%;
  div.container,
  div.row {
    width: 100%;
    height: 100%;
  }
}
</style>
