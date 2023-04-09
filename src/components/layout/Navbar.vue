<script setup>
import { ref, reactive, onMounted } from "vue";
// import { mdiUser } from "@mdi/js";

let drawer = ref(false);
let windowSize = reactive({
  x: 0,
  y: 0,
});
const links = [
  {
    name: "Home",
    icon: "home",
    route: "/",
  },
  {
    name: "Services",
    icon: "room_service",
    route: "/services",
  },
  {
    name: "About Us",
    icon: "info",
    route: "/about",
  },
  // {
  //   name: "Our Team",
  //   icon: "groups",
  //   route: "/team"
  // },
  // {
  //   name: "Gallery",
  //   icon: "collections",
  //   route: "/gallery"
  // },
  {
    name: "Contact Us",
    icon: "call",
    route: "/contact",
  },
];

onMounted(() => {
  onResize();
});

const onResize = () => {
  if (process.client) {
    windowSize = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    if (windowSize.x >= 961) {
      drawer = false;
    }
  }
};
</script>
<template>
  <v-card
    height="70"
    max-width="1170"
    v-resize="onResize"
    class="d-flex align-center px-3 position-fixed"
    style="
      top: 10px;
      left: 0;
      right: 0;
      width: 100%;
      margin-inline: auto;
      z-index: 9;
    "
  >
    <v-btn variant="text" color="transparent" height="70" link to="/">
      <v-img min-width="170" max-width="200" src="/logo.png"></v-img>
    </v-btn>
    <v-spacer></v-spacer>
    <div>
      <v-tabs height="60" class="hidden-sm-and-down" color="primary">
        <v-tab
          v-for="(link, i) in links"
          :key="i"
          :to="link.route"
          :ripple="false"
          active-class="primary--text"
          :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
          text
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
    </div>
    <v-btn icon variant="icon">
      <v-icon icon="fa:fa-brands fa-facebook"></v-icon>
    </v-btn>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-card>

  <v-card tile>
    <v-navigation-drawer bottom height="auto" temporary app v-model="drawer">
      <v-list dense>
        <v-list-item v-for="link in links" :to="link.route" color="primary">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<style lang="scss">
div.v-tabs {
  a {
    text-transform: none;
  }
}
</style>
