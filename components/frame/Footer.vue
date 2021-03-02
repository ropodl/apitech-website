<template>
  <div class="mt-16">
    <v-footer dark>
      <v-spacer></v-spacer>
      <v-container class="mt-10 mb-5">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="4">
            <v-img
              eager
              class="mx-auto d-flex mb-4"
              width="350"
              :src="require('~/assets/image/apitech.webp')"
              alt="api technology logo"
            ></v-img>
            <div class="mb-4">
              API Technology offer you a business to business service in the
              Web, Mobile, Networking, ICT and Electronics Hardware platform.
            </div>
            <ul class="footer-social">
              <li v-for="(social, i) in footerSocial" :key="i">
                <a
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon>
                    {{ social.icon }}
                  </v-icon>
                </a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="3">
            <Cattitle :first="'Quick'" :second="'Links'" />
            <ul class="quick-link-list">
              <li v-for="(quick, i) in quickLinks" :key="i">
                <NuxtLink :to="quick.link">{{ quick.title }}</NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="3">
            <Cattitle :first="'Contact'" :second="'Us'" />
            <ul class="contact-us-list">
              <li v-for="(contact, i) in contactList" :key="i" class="d-flex">
                <span>
                  <v-icon>{{ contact.icon }}</v-icon>
                </span>
                {{ contact.title }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="2">
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
      ],
      contactList: [
        {
          title: "New Baneshwor",
          icon: "fal fa-map-marker-alt"
        },
        {
          title: "01-4472774",
          icon: "fal fa-phone-alt"
        },
        {
          title: "info@apitech.com.np",
          icon: "fal fa-envelope"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
ul.footer-social {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-left: 0px;
  list-style: none;
  li {
    margin-right: 20px;
    a {
      text-decoration: none;
    }
  }
}
ul.quick-link-list {
  list-style: none;
  margin-top: 20px;
  padding-left: 0px;
  li {
    font-size: 16px;
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
ul.contact-us-list {
  list-style: none;
  margin-top: 20px;
  padding-left: 0px;
  li {
    font-size: 16px;
    margin-bottom: 1.2rem;
    span {
      display: flex;
      justify-content: center;
      width: 30px;
      height: 100%;
      margin-right: 20px;
    }
  }
}
</style>
