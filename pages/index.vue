<script setup>
import {
  mdiLightbulbOnOutline,
  mdiThumbUp,
  mdiCheckDecagramOutline,
  mdiAccountWrenchOutline,
} from "@mdi/js";

useHead({
  title: "API Technology",
  meta: [{ name: "description", content: "My amazing site." }],
});

const bar = [
  {
    icon: mdiLightbulbOnOutline,
    title: "Innovation",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiThumbUp,
    title: "High Quality",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiCheckDecagramOutline,
    title: "Top Services",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: mdiAccountWrenchOutline,
    title: "Best Product",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
];
</script>
<template>
  <LazySharedHero />
  <LazySharedOurClients />
  <LazySharedBlog />

  <v-container class="py-10">
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
          <!-- <v-card-text class="text-center">
            {{ item["description"] }}
          </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
