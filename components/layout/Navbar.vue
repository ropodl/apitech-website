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
    class="d-flex align-center px-3 position-fixed rounded-pill mx-auto px-3"
    style="
      width: 100%;
      inset: 10px 0 0 0;
      z-index: 9;
      background-color: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
    "
  >
    <v-btn variant="text" color="transparent" height="70" link to="/">
      <v-img min-width="170" max-width="200" src="/logo.png"></v-img>
    </v-btn>
    <v-spacer></v-spacer>
    <!-- <div> -->
    <v-tabs height="50" class="rounded-pill hidden-sm-and-down" color="primary">
      <template v-for="(link, i) in links">
        <v-hover v-slot:default="{ isHovering, props }">
          <v-tab
            :ripple="false"
            v-bind="props"
            class="text-capitalize rounded-pill"
            :class="isHovering ? 'text-primary' : ''"
            :to="link['route']"
            selected-class="bg-primary text-white"
          >
            {{ link["name"] }}
          </v-tab>
        </v-hover>
      </template>
      <v-tab-slider></v-tab-slider>
    </v-tabs>
    <!-- </div> -->
    <v-spacer></v-spacer>
    <v-btn
      icon
      class="mr-3"
      variant="tonal"
      target="_blank"
      href="https://www.facebook.com/apitechnepal"
    >
      <v-icon>
        <font-awesome-icon icon="fab fa-facebook" />
      </v-icon>
    </v-btn>
    <v-btn
      icon class="mr-3"
      variant="tonal"
      target="_blank"
      href="https://www.linkedin.com/company/api-technology-pvt.-ltd./"
    >
      <v-icon>
        <font-awesome-icon icon="fab fa-linkedin"></font-awesome-icon>
      </v-icon>
    </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-card>

  <v-card tile v-if="drawer">
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
