<template>
  <v-toolbar max-height="50px" dense elevation="0" color="primary">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" md="8">
          <ul class="topbar-info-list">
            <li><v-icon>fal fa-envelope</v-icon> info@apitech.com.np</li>
            <li>
              <v-icon>fal fa-map-marker-alt</v-icon> Mid Baneshwor, Kathmandu
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex justify-center"
          style="background-color: white;"
        >
          <v-btn
            class="mx-auto"
            icon
            v-for="social in socialLinks"
            :key="social.id"
          >
            <v-icon color="primary">{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          id: "1",
          title: "Facebook",
          icon: "fab fa-facebook",
          link: "https://www.facebook.com/apitechnepal"
        },
        {
          id: "2",
          title: "Twitter",
          icon: "fab fa-twitter",
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
