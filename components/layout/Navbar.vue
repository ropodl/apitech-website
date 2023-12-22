<script setup>
import { Icon } from "@iconify/vue";
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
    icon: "mdi:home",
    name: "Home",
    link: "/",
  },
  {
    icon: "mdi:handshake",
    name: "Services",
    link: "/services",
  },
  {
    icon: "mdi:information-outline",
    name: "About Us",
    link: "/about",
  },
  {
    icon: "mdi:phone-incoming-outgoing",
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
  <v-layout class="w-100 position-fixed" style="height: 65px; top: 0">
    <v-app-bar
      border
      elevation="0"
      rounded="0"
      style="
        border-top: 0;
        border-right: 0;
        border-left: 0;
        background-color: rgba(var(--v-theme-surface), 0.8);
        backdrop-filter: blur(8px);
      "
    >
      <v-container>
        <v-row align="center">
          <v-btn variant="text" color="transparent" height="70" to="/">
            <LayoutLogo width="200" height="70" />
          </v-btn>
          <v-spacer></v-spacer>
          <v-tabs exact height="50" class="hidden-sm-and-down">
            <template v-for="(link, i) in links">
              <v-tab
                rounded="lg"
                :ripple="false"
                class="text-capitalize"
                :class="isDark ? 'text-white' : 'text-black'"
                :to="link['link']"
                selected-class="text-white bg-primary"
              >
                {{ link["name"] }}
              </v-tab>
            </template>
          </v-tabs>
          <v-spacer></v-spacer>
          <client-only>
            <v-btn
              icon
              rounded="lg"
              class="mr-3 hidden-xs"
              variant="tonal"
              :color="isDark ? 'white' : 'primary'"
              target="_blank"
              href="https://www.facebook.com/apitechnepal"
              aria-label="Facebook Icon"
            >
              <v-icon>
                <Icon icon="fa6-brands:facebook" />
              </v-icon>
            </v-btn>
            <!-- <v-btn
                icon
                rounded="lg"
                class="mr-3 hidden-xs"
                variant="tonal"
                :color="isDark ? 'white' : 'primary'"
                target="_blank"
                href="https://www.linkedin.com/company/api-technology-pvt.-ltd./"
                aria-label="LinkedIn Icon"
              >
                <v-icon>
                  <Icon icon="fa6-brands:linkedin" />
                </v-icon>
              </v-btn> -->
          </client-only>
          <v-btn
            icon
            rounded="lg"
            variant="tonal"
            :color="isDark ? 'white' : 'primary'"
            @click="themeCheck"
            :aria-label="
              isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            "
          >
            <v-icon>
              <Icon
                :icon="
                  isDarkMode ? 'mdi:weather-night' : 'mdi:white-balance-sunny'
                "
              />
            </v-icon>
          </v-btn>
          <v-btn
            icon
            variant="tonal"
            rounded="lg"
            :color="isDark ? 'white' : 'primary'"
            class="ml-3 hidden-md-and-up"
            @click="drawer = !drawer"
            ><v-icon><Icon :icon="drawer ? 'mdi:close' : 'mdi:menu'" /></v-icon
          ></v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-layout>

  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-card flat>
      <v-card-text class="d-flex justify-center">
        <client-only>
          <v-btn
            height="50"
            class="mr-3 px-10 text-capitalize"
            variant="tonal"
            :color="isDark ? 'white' : 'primary'"
            target="_blank"
            href="https://www.facebook.com/apitechnepal"
            aria-label="Facebook Icon"
          >
            <v-icon start>
              <Icon icon="fa6-brands:facebook" />
            </v-icon>
            Facebook
          </v-btn>
          <v-btn
            height="50"
            class="mr-3 px-10 text-capitalize"
            variant="tonal"
            :color="isDark ? 'white' : 'primary'"
            target="_blank"
            href="https://www.linkedin.com/company/api-technology-pvt.-ltd./"
            aria-label="LinkedIn Icon"
          >
            <v-icon start>
              <Icon icon="fa6-brands:linkedin" />
            </v-icon>
            LinkedIn
          </v-btn>
        </client-only>
      </v-card-text>
    </v-card>
    <v-list dense>
      <v-list-item v-for="link in links" :to="link['link']" color="primary">
        <template #prepend>
          <v-icon>
            <Icon :icon="link['icon']" />
          </v-icon>
        </template>
        <v-list-item-title>{{ link["name"] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.v-slide-group-item--active {
  color: white;
  background-color: rgba(var(--v-theme-primary-darken-3), 0.8);
}
</style>
