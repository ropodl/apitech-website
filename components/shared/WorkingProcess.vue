<script setup>
import { mdiCogClockwise, mdiForum, mdiAccountHardHatOutline } from "@mdi/js";
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const processes = [
  {
    icon: mdiForum,
    title: "Discussion",
    desc: "Consult with clients, suggest best fit security solutions.",
  },
  {
    icon: mdiCogClockwise,
    title: "Installation",
    desc: "Install CCTV, alarms, and access control systems.",
  },
  {
    icon: mdiAccountHardHatOutline,
    title: "Maintenance",
    desc: "Regular check-ups, troubleshoot issues, repair damages.",
  },
];
</script>
<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8" lg="6" class="text-center pb-0">
        <v-card-title class="text-h3 font-weight-bold text-wrap text-primary">
          Our Working Process
        </v-card-title>
        <!-- <div class="mx-auto divider"></div> -->
        <v-card-text>
          Learn about how we execute and finish a project.
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="12" sm="6" md="6" lg="4" v-for="(process, i) in processes">
        <v-card-text class="text-center mb-n16">
          <v-avatar class="bg-primary" size="100" style="z-index: 1">
            <v-icon size="70" :icon="process['icon']"></v-icon>
          </v-avatar>
        </v-card-text>
        <v-card class="pt-16 pb-10 px-10">
          <v-card-title
            class="text-wrap text-center"
            v-text="process['title']"
          ></v-card-title>
          <v-card-text
            class="text-center"
            v-text="process['desc']"
          ></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
