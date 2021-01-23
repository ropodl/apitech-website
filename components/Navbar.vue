<template>
  <v-app-bar
    elevate-on-scroll
    max-height="70px"
    color="white"
    style="position:sticky;top:0px;z-index:999;"
  >
    <v-container>
      <v-row class="d-flex align-center">
        <v-col class="d-flex" cols="12" md="4">
          <nuxt-link link to="/">
            <img
              style="height:50px;"
              src="https://i0.wp.com/www.apitechnepal.com/wp-content/uploads/2019/10/apitech.png"
              alt=""
            />
          </nuxt-link>
        </v-col>
        <v-col class="d-flex" cols="12" md="6">
          <v-tabs
            height="70"
            dark
            class="hidden-sm-and-down navbar-tab"
            color="primary"
            background-color="transparent"
          >
            <v-tab
              v-for="(link, i) in links"
              :key="i"
              :to="link.route"
              :ripple="false"
              active-class="primary--text"
              color="primary"
              class="primary--text"
            >
              <!-- text -->
              <!-- <v-icon left>{{ link.icon }}</v-icon> -->
              {{ link.name }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col class="d-flex" cols="12" md="2">
          <v-spacer></v-spacer>
          <v-btn elevation="0" color="primary">
            Get a Quote
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
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
        }
      ]
    };
  }
};
</script>

<style lang="scss">
div.navbar-tab {
  font-family: "Arimo", sans-serif;
  a {
    text-transform: none;
    font-weight: 700;
    font-size: 16px;
  }
}
</style>
