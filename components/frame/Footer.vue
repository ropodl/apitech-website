<template>
  <div>
    <v-container class="mb-5">
      <v-row>
        <v-col cols="12" md="4">
          <v-img
            class="mx-auto d-flex mb-2"
            width="100%"
            src="https://i0.wp.com/www.apitechnepal.com/wp-content/uploads/2019/10/apitech.png"
            alt="api technology logo"
          ></v-img>
          API Technology offer you a business to business service in the Web,
          Mobile, Networking, ICT and Electronics Hardware platform.
        </v-col>
        <v-col cols="12" md="4">
          <Cattitle :first="'Services'" />
          <ul class="service-info-list">
            <li>
              <v-icon class="mr-3 primary--text">fal fa-map-marker-alt</v-icon
              >Mid Baneshwor, Kathmandu
            </li>
            <li>
              <v-icon class="mr-3 primary--text">fal fa-envelope</v-icon
              >info@apitechnepal.com
            </li>
            <li>
              <v-icon class="mr-3 primary--text">fal fa-phone</v-icon>01-4472774
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="4">
          <Cattitle :first="'Follow'" :second="'Us'" />
          <!-- <div class="mb-4"> -->
          <ul
            class="d-flex flex-wrap list-style-none pa-0"
            style="list-style:none;"
          >
            <li
              v-for="social in footerSocial"
              :key="social.id"
              class="mr-2 mb-2"
            >
              <v-btn width="30px" text class="rounded-0" :class="social.title">
                <v-icon color="white">{{ social.icon }}</v-icon>
              </v-btn>
            </li>
          </ul>
          <!-- </div> -->
          <Cattitle :first="'Special'" :second="'Partner'" />
          <v-img eager width="250" src="/Certified-partner-logo.webp"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-footer class="text-overline d-flex justify-center text-center" dark>
      Copyright © {{ new Date().getFullYear() }}, API Technology. All Right
      Reserved
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerSocial: [
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
.Facebook {
  background-color: #3b5999;
}
.Twitter {
  background-color: #55acee;
}
.Instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.LinkedIn {
  background-color: #0077b5;
}
.Youtube {
  background-color: #cd201f;
}
ul.service-info-list {
  list-style: none;
  margin-top: 20px;
  padding: 0px;
  li {
    margin-bottom: 1.2rem;
  }
}
</style>
