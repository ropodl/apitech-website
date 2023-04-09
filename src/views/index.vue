<script setup>
import { defineAsyncComponent } from "vue";
import {
  mdiCheckDecagram,
  mdiEmailOpen,
  mdiPhone,
  mdiCake,
  mdiMapMarkerRadius,
} from "@mdi/js";

const TopCarousel = defineAsyncComponent(() =>
  import("@/components/TopCarousel")
);
// const HomeSupportCard = defineAsyncComponent(() =>
//   import("@/components/HomeSupportCard")
// );
// const AboutBanner = defineAsyncComponent(() =>
//   import("@/components/AboutBanner")
// );
// const HomeAboutPara = defineAsyncComponent(() =>
//   import("@/components/HomeAboutPara")
// );

const bar = [
  {
    icon: mdiMapMarkerRadius,
    title: "Innovation",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiMapMarkerRadius,
    title: "High Quality",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiMapMarkerRadius,
    title: "Top Services",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiMapMarkerRadius,
    title: "Best Product",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
];

const experience = [
  {
    icon: "fal fa-house",
    title: "Residental Clients",
    content: "600+",
  },
  {
    icon: "fal fa-car-building",
    title: "Commerical Clients",
    content: "900+",
  },
  {
    icon: "fal fa-smile-wink",
    title: "Happy Clients",
    content: "2000+",
  },
];
</script>
<template>
  <div class="home-page">
    <TopCarousel />
    <!-- Card Container -->
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="12" md="3" v-for="(item, i) in bar">
          <v-card
            flat
            :color="i == 2 ? 'primary-darken-1' : 'primary-darken-3'"
            rounded="0"
            class="py-8 px-10"
            :class="[
              i == 0
                ? 'rounded-e-0 rounded-s-xl'
                : i == bar.length - 1
                ? 'rounded-e-xl'
                : '',
              i == 2 ? 'py-16 rounded-xl elevation-12' : '',
            ]"
          >
            <v-card-subtitle class="text-center mb-3">
              <v-avatar>
                <v-icon
                  size="60"
                  color="white"
                  style="opacity: 1 !important"
                  :icon="item['icon']"
                ></v-icon>
              </v-avatar>
            </v-card-subtitle>
            <v-card-title class="text-h5 text-center">{{
              item["title"]
            }}</v-card-title>
            <v-card-text class="text-center">
              {{ item["description"] }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <HomeSupportCard />
      <v-row>
        <v-col cols="12">
          <v-card border elevation="0">
            <v-container>
              <AboutBanner />
              <Message />
            </v-container>
            <v-container>
              <HomeAboutPara />
            </v-container>
          </v-card>

          <v-row class="mt-16 mb-6">
            <v-col v-for="(exp, i) in experience" :key="i" cols="12" md="4">
              <v-card>
                <v-list color="transparent">
                  <v-list-item three-line>
                    <template #prepend>
                      <v-icon size="64">
                        {{ exp.icon }}
                      </v-icon>
                    </template>
                    <v-list-item-content>
                      <v-list-item-title class="mb-3">{{
                        exp.title
                      }}</v-list-item-title>
                      <v-list-item-title
                        class="primary--text text-h4 font-weight-black"
                      >
                        {{ exp.content }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
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
