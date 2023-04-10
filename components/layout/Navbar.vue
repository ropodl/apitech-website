<script setup>
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
    class="d-flex align-center px-3 position-fixed mx-auto"
    style="
      top: 10px;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 9;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
    "
  >
    <v-btn variant="text" color="transparent" height="70" link to="/">
      <v-img min-width="170" max-width="200" src="/logo.png"></v-img>
    </v-btn>
    <v-spacer></v-spacer>
    <div>
      <v-tabs height="70" class="hidden-sm-and-down" color="primary">
        <v-tab
          v-for="(link, i) in links"
          :to="link.route"
          class="text-capitalize"
          active-class="text-red"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
    </div>
    <!-- <v-spacer></v-spacer>
    <v-btn
      icon
      variant="tonal"
      target="_blank"
      href="https://www.facebook.com/apitechnepal"
    >
      FB
    </v-btn>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon> -->
  </v-card>

  <v-card tile>
    <v-navigation-drawer bottom height="auto" temporary app v-model="drawer">
      <v-list dense>
        <v-list-item v-for="link in links" :to="link.route" color="primary">
          <template #prepend>
            <v-icon>{{ link.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
