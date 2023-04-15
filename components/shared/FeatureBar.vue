<script setup>
import {
  mdiLightbulbOnOutline,
  mdiThumbUp,
  mdiCheckDecagramOutline,
  mdiAccountWrenchOutline,
} from "@mdi/js";

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
  <v-card rounded="0" color="primary-darken-3">
    <v-container class="py-0">
      <v-row align="center" no-gutters>
        <v-col cols="12" md="3" v-for="(item, i) in bar">
          <v-card
            flat
            :color="i == 2 ? 'primary-darken-1' : 'primary-darken-3'"
            rounded="0"
            class="py-8 px-10 rounded-0"
          >
            <!-- :class="[
              i == 0
                ? 'rounded-e-0 rounded-s-xl'
                : i == bar.length - 1
                ? 'rounded-e-xl'
                : '',
              i == 2 ? 'py-16 rounded-xl elevation-12' : '',
            ]" -->
            <v-card-subtitle class="text-center mb-3">
              <v-avatar rounded="0">
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
