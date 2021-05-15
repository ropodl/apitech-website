<template>
  <v-toolbar max-height="50px" dense elevation="0" color="primary">
    <v-container>
      <v-row class="d-flex align-center flex-wrap">
        <ul class="topbar-info-list">
          <li v-for="(info, i) in topinfo" :key="i" class="topinfo">
            <v-icon>{{ info.icon }}</v-icon> {{ info.info }}
          </li>
        </ul>
        <v-spacer></v-spacer>
        <v-btn
          class="mx-auto"
          icon
          :href="social.link"
          target="_blank"
          v-for="(social, i) in socials"
          :key="i"
        >
          <v-icon color="white">{{ social.icon }}</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
          color="transparent"
          class="theme-mode white--text"
          elevation="0"
          @click="theme"
        >
          <v-icon color="white">{{
            $vuetify.theme.dark ? "invert_colors_off" : "invert_colors"
          }}</v-icon>
          <!-- <span class="ml-2">
            Dark Mode
          </span> -->
        </v-btn>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      topinfo: [
        {
          icon: "fal fa-envelope",
          info: "info@apitech.com.np"
        },
        {
          icon: "fal fa-map-marker-alt",
          info: "Mid Baneshwor, Kathmandu"
        },
        {
          icon: "fal fa-phone-alt",
          info: "01-4472774"
        }
      ],
      socials: [
        {
          id: "1",
          title: "Facebook",
          icon: "fab fa-facebook-square",
          link: "https://www.facebook.com/apitechnepal"
        }
        // {
        //   id: "2",
        //   title: "Twitter",
        //   icon: "fab fa-twitter-square",
        //   link: "https://www.twitter.com/apitechnepal"
        // },
        // {
        //   id: "3",
        //   title: "Instagram",
        //   icon: "fab fa-instagram",
        //   link: "https://www.instagram.com/apitechnepal"
        // },
        // {
        //   id: "4",
        //   title: "LinkedIn",
        //   icon: "fab fa-linkedin",
        //   link: "https://www.linkedin.com/apitechnepal"
        // },
        // {
        //   id: "5",
        //   title: "Youtube",
        //   icon: "fab fa-youtube",
        //   link: "https://www.youtube.com/apitechnepal"
        // }
      ]
    };
  },
  methods: {
    theme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  }
};
</script>

<style lang="scss">
ul.topbar-info-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  li {
    color: white;
    margin-right: 10px;
    i {
      font-size: 18px !important;
      color: white !important;
      margin-right: 10px;
    }
  }
}
button.theme-mode {
  padding: 0px;
  height: 70px !important;
  border-radius: 0px;
}
</style>
