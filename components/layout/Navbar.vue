<script setup>
import {
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
  mdiHome,
  mdiHandshake,
  mdiInformationOutline,
  mdiPhoneIncomingOutgoing,
} from "@mdi/js";
import { useTheme } from "vuetify";
const theme = useTheme();

onMounted(() => {
  onResize();
  isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
});

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

let isDarkMode = ref(false);

let drawer = ref(false);
let windowSize = reactive({
  x: 0,
  y: 0,
});

const links = [
  {
    icon: mdiHome,
    name: "Home",
    link: "/",
  },
  {
    icon: mdiHandshake,
    name: "Services",
    link: "/services",
  },
  {
    icon: mdiInformationOutline,
    name: "About Us",
    link: "/about",
  },
  {
    icon: mdiPhoneIncomingOutgoing,
    name: "Contact Us",
    link: "/contact",
  },
];

const onResize = () => {
  if (process.client) {
    windowSize = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    if (windowSize.x >= 961) {
      drawer.value = false;
    }
  }
};

const themeCheck = () => {
  isDarkMode.value = localStorage.getItem("isDarkMode") !== "true";
  localStorage.setItem("isDarkMode", isDarkMode.value);
  theme.global.name.value = isDarkMode.value ? "dark" : "light";
};
</script>
<template>
  <v-container
    class="position-fixed mx-auto"
    style="height: 70px; top: 10px; left: 0; right: 0; z-index: 999"
  >
    <v-row>
      <v-col cols="12" class="py-0">
        <v-card
          height="70"
          v-resize="onResize"
          class="d-flex align-center px-3 rounded-pill mx-auto"
          :color="isDark ? 'rgba(21,21,21, 0.7)' : 'rgba(255, 255, 255, 0.7)'"
          style="backdrop-filter: blur(10px)"
        >
          <v-btn variant="text" color="transparent" height="70" link to="/">
            <v-img min-width="170" max-width="200" src="/logo.png"></v-img>
          </v-btn>
          <v-spacer></v-spacer>
          <v-tabs
            height="50"
            class="rounded-pill hidden-sm-and-down"
            color="primary"
          >
            <template v-for="(link, i) in links">
              <v-tab
                :ripple="false"
                class="text-capitalize rounded-pill"
                :to="link['link']"
                selected-class="text-white"
              >
                {{ link["name"] }}
              </v-tab>
            </template>
          </v-tabs>
          <v-spacer></v-spacer>
          <client-only>
            <v-btn
              icon
              class="mr-3"
              variant="tonal"
              :color="isDark ? 'white' : 'primary'"
              target="_blank"
              href="https://www.facebook.com/apitechnepal"
            >
              <v-icon>
                <font-awesome-icon :icon="['fab', 'fa-facebook']" />
              </v-icon>
            </v-btn>
            <v-btn
              icon
              class="mr-3"
              variant="tonal"
              :color="isDark ? 'white' : 'primary'"
              target="_blank"
              href="https://www.linkedin.com/company/api-technology-pvt.-ltd./"
            >
              <v-icon>
                <font-awesome-icon
                  :icon="['fab', 'fa-linkedin']"
                ></font-awesome-icon>
              </v-icon>
            </v-btn>
          </client-only>
          <v-btn
            icon
            variant="tonal"
            :color="isDark ? 'white' : 'primary'"
            @click="themeCheck"
          >
            <v-icon
              :icon="isDarkMode ? mdiWeatherNight : mdiWhiteBalanceSunny"
            ></v-icon>
          </v-btn>

          <v-app-bar-nav-icon
            variant="tonal"
            :color="isDark ? 'white' : 'primary'"
            class="ml-3"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-navigation-drawer v-model="drawer" location="bottom">
    <v-list dense>
      <v-list-item v-for="link in links" :to="link['link']" color="primary">
        <template #prepend>
          <v-icon>{{ link.icon }}</v-icon>
        </template>

        <v-list-item-title>{{ link["name"] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
.v-slide-group-item--active {
  color: white;
  background-color: rgba(var(--v-theme-primary-darken-3), 0.8);
}
</style>
