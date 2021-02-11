<template>
  <div class="mt-16">
    <v-footer dark>
      <v-spacer></v-spacer>
      <v-container class="mt-10 mb-5">
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              eager
              class="mx-auto d-flex mb-2"
              width="100%"
              src="/apitech.webp"
              alt="api technology logo"
            ></v-img>
            API Technology offer you a business to business service in the Web,
            Mobile, Networking, ICT and Electronics Hardware platform.
          </v-col>
          <v-col cols="12" md="2"></v-col>
          <v-col cols="12" md="3">
            <Cattitle :first="'Quick'" :second="'Links'" />
            <ul class="quick-link-list">
              <li v-for="(quick, i) in quickLinks" :key="i">
                <NuxtLink :to="quick.link">{{ quick.title }}</NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <Cattitle :first="'Contact'" :second="'Us'" />
            <ul
              class="d-flex flex-wrap list-style-none pa-0"
              style="list-style:none;"
            >
              <li
                v-for="social in footerSocial"
                :key="social.id"
                class="mr-2 mb-2"
              >
                <v-btn
                  width="30px"
                  text
                  class="rounded-0"
                  :class="social.title"
                >
                  <v-icon color="white">{{ social.icon }}</v-icon>
                </v-btn>
              </li>
            </ul>
            <Cattitle :first="'Special'" :second="'Partner'" />
            <v-img eager width="250" src="/Certified-partner-logo.webp"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
    </v-footer>
    <v-footer dark>
      <v-container>
        <v-row>
          <v-col
            class="d-flex justify-center text--center text-overline"
            cols="12"
            md="12"
          >
            Copyright © {{ new Date().getFullYear() }}, API Technology. All
            Right Reserved
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        {
          title: "Term & Conditions",
          link: "/terms-conditions"
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy"
        }
      ],
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
ul.quick-link-list {
  list-style: none;
  margin-top: 20px;
  padding-left: 0px;
  li {
    font-size: 18px;
    margin-bottom: 1.2rem;
    a {
      color: white;
      text-decoration: none;
      &:hover {
        color: var(--v-primary-lighten4);
      }
      &.nuxt-link-exact-active {
        color: var(--v-primary-lighten2);
      }
    }
  }
}
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
</style>
