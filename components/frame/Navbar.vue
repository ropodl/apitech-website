<template>
  <div style="position:sticky;top:0;z-index:9;">
    <v-app-bar elevate-on-scroll height="70" max-height="70">
      <v-container class="d-flex justify-center align-center">
        <nuxt-link link to="/">
          <v-img
            width="300"
            src="https://i0.wp.com/www.apitechnepal.com/wp-content/uploads/2019/10/apitech.png"
          ></v-img>
        </nuxt-link>
        <v-spacer></v-spacer>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: "1",
          name: "Home",
          icon: "home",
          route: "/"
        },
        {
          id: "2",
          name: "Services",
          icon: "room_service",
          route: "/services"
        },
        {
          id: "3",
          name: "About Us",
          icon: "info",
          route: "/about"
        },
        {
          id: "4",
          name: "Contact Us",
          icon: "call",
          route: "/contact"
        },
        {
          id: "5",
          name: "Gallery",
          icon: "",
          route: "/gallery"
        },
        {
          id: "6",
          name: "Our Team",
          icon: "",
          route: "/team"
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
</style>
