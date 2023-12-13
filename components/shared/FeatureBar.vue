<script setup>
import { Icon } from "@iconify/vue";

const bar = [
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Innovation",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: "mdi:thumb-up",
    title: "High Quality",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: "mdi:check-decagram-outline",
    title: "Top Services",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
  {
    icon: "mdi:account-wrench-outline",
    title: "Best Product",
    description: "Lorem ipsum dolar sit amet consectetur",
  },
];
</script>
<template>
  <v-container class="py-0" style="margin-top: -100px">
    <v-card color="primary-darken-3 rounded-lg">
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(item, i) in bar">
          <v-card
            flat
            :color="i % 2 ? 'primary-darken-1' : 'primary-darken-3'"
            rounded="0"
            class="py-8 px-10 rounded-0"
          >
            <v-card-subtitle class="text-center mb-3">
              <v-avatar size="50" rounded="0">
                <v-icon size="50" color="white" style="opacity: 1 !important">
                  <Icon :icon="item['icon']" />
                </v-icon>
              </v-avatar>
            </v-card-subtitle>
            <v-card-title class="text-h5 text-center text-wrap">{{
              item["title"]
            }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<style lang="scss" scoped>
.rounded-pill {
  @media (max-width: 960px) {
    border-radius: 30px !important;
  }
}
</style>
