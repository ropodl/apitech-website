<script setup>
import { mdiClockOutline, mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";

const quickLinks = [
  {
    title: "Term & Conditions",
    link: "/terms-conditions",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
];
const footerSocial = [
  {
    title: "Facebook",
    icon: "fab fa-facebook",
    link: "https://www.facebook.com/apitechnepal",
  },
  {
    title: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/apitechnepal",
  },
];
const contactList = [
  {
    icon: mdiMapMarker,
    title: "Mid Baneshwor, Kathmandu",
  },
  {
    icon: mdiPhone,
    title: "01-4472774",
  },
  {
    icon: mdiEmail,
    title: "info@apitech.com.np",
  },
];
</script>
<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-img
            class="mb-4"
            height="100"
            width="350"
            src="/logo.png"
            alt="Api Technology Logo"
          ></v-img>
          <div class="mb-4">
            API Technology offer you a business to business service in the Web,
            Mobile, Networking, ICT and Electronics Hardware platform.
          </div>
          <ul class="footer-social">
            <li v-for="(social, i) in footerSocial" :key="i">
              <a :href="social.link" target="_blank" rel="noopener noreferrer">
                <v-icon>
                  {{ social.icon }}
                </v-icon>
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <div class="text-h6 font-weight-bold">Quick Links</div>
          <v-divider class="my-3"></v-divider>
          <ul class="quick-link-list">
            <li v-for="(quick, i) in quickLinks" :key="i">
              <router-link :to="quick.link">{{ quick.title }}</router-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="3">
          <div class="text-h6 font-weight-bold">Quick Info</div>
          <v-divider class="my-3"></v-divider>
          <ul class="contact-us-list">
            <li
              v-for="(contact, i) in contactList"
              :key="i"
              class="d-flex align-center"
            >
              <span>
                <v-icon small>{{ contact.icon }}</v-icon>
              </span>
              {{ contact.title }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="3">
          <div class="text-h6 font-weight-bold">Work Hours</div>
          <v-divider class="my-3"></v-divider>
          <div class="mb-3">
            <v-icon :icon="mdiClockOutline"></v-icon>
            10 AM - 5 PM, Sunday - Friday
          </div>
          <div class="mb-3">Please feel free to visit us at given time.</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col
          class="d-flex justify-center text--center text-overline"
          cols="12"
          md="12"
        >
          Copyright © {{ new Date().getFullYear() }}, API Technology. All Right
          Reserved
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

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
        color: var(--v-primary-base);
      }
      &.nuxt-link-exact-active {
        color: var(--v-primary-base);
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
