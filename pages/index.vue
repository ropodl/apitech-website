<template>
  <div class="home-page">
    <TopCarousel />
    <!-- Card Container -->
    <v-container class="pt-0 mt-n16">
      <HomeSupportCard />
      <v-row>
        <v-col cols="12">
          <v-card outlined elevation="0" class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <AboutBanner />
              <!-- <Message /> -->
            </v-container>
            <v-container>
              <HomeAboutPara />
            </v-container>
          </v-card>

          <v-row class="mt-16 mb-6">
            <v-col v-for="(exp, i) in experience" :key="i" cols="12" md="4">
              <v-list color="transparent">
                <v-list-item three-line>
                  <v-list-item-icon>
                    <v-icon size="64">
                      {{ exp.icon }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ exp.title }}</v-list-item-title>
                    <v-list-item-subtitle
                      class="primary--text text-h4 font-weight-black"
                    >
                      {{ exp.content }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experience: [
        {
          icon: "fal fa-house",
          title: "Residental Clients",
          content: "600+"
        },
        {
          icon: "fal fa-car-building",
          title: "Commerical Clients",
          content: "900+"
        },
        {
          icon: "fal fa-smile-wink",
          title: "Happy Clients",
          content: "2000+"
        }
      ]
    };
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
