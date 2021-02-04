<template>
  <v-toolbar max-height="50px" dense elevation="0" color="primary">
    <v-container>
      <v-row class="d-flex align-center flex-wrap">
        <ul class="topbar-info-list">
          <li v-for="info in topinfo" :key="info.id" class="topinfo">
            <v-icon>{{ info.icon }}</v-icon> info@apitech.com.np
          </li>
        </ul>
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" icon v-for="social in socials" :key="social.id">
          <v-icon color="white">{{ social.icon }}</v-icon>
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
          id: "0",
          icon: "fal fa-envelope",
          info: "info@apitech.com.np"
        },
        {
          id: "1",
          icon: "fal fa-map-marker-alt",
          info: "Mid Baneshwor, Kathmandu"
        }
      ],
      socials: [
        {
          id: "1",
          title: "Facebook",
          icon: "fab fa-facebook-square",
          link: "https://www.facebook.com/apitechnepal"
        },
        {
          id: "2",
          title: "Twitter",
          icon: "fab fa-twitter-square",
          link: "https://www.twitter.com/apitechnepal"
        },
        {
          id: "3",
          title: "Instagram",
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/apitechnepal"
        },
        {
          id: "4",
          title: "LinkedIn",
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/apitechnepal"
        },
        {
          id: "5",
          title: "Youtube",
          icon: "fab fa-youtube",
          link: "https://www.youtube.com/apitechnepal"
        }
      ]
    };
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
</style>
