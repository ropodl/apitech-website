<template>
  <div style="position:sticky;top:0;z-index:9;">
    <v-app-bar elevate-on-scroll height="70" max-height="70">
      <v-container class="d-flex justify-center align-center">
        <NuxtLink link to="/">
          <v-img width="300" src="/apitech.webp"></v-img>
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
        <div>
          <v-tabs
            height="70"
            class="hidden-sm-and-down"
            color="primary"
            background-color="transparent"
          >
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
      </v-container>
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          icon: "home",
          route: "/"
        },
        {
          name: "Services",
          icon: "room_service",
          route: "/services"
        },
        {
          name: "About Us",
          icon: "info",
          route: "/about"
        },
        {
          name: "Our Team",
          icon: "",
          route: "/team"
        },
        {
          name: "Gallery",
          icon: "",
          route: "/gallery"
        },
        {
          name: "Contact Us",
          icon: "call",
          route: "/contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
div.v-tabs {
  a {
    text-transform: none;
  }
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: saturate(180%) blur(3px);
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(39, 39, 39, 0.8) !important;
  backdrop-filter: saturate(180%) blur(3px);
}
</style>
