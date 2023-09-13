<script setup>
import { Icon } from "@iconify/vue";

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

const contactList = [
  {
    icon: "mdi:map-marker",
    title: "Mid Baneshwor, Kathmandu",
  },
  {
    icon: "mdi:phone",
    title: "01-4472774",
  },
  {
    icon: "mdi:email",
    title: "info.apitech@gmail.com",
  },
];
</script>
<template>
  <v-footer theme="dark">
    <v-container>
      <v-row class="mb-3">
        <v-col cols="12" xs="12" sm="12" md="4">
          <LayoutLogo width="250" height="70" />
          <div class="mb-3">
            API Technology offer you a business to business service in the Web,
            Mobile, Networking, ICT and Electronics Hardware platform.
          </div>
          <client-only>
            <v-btn
              icon
              class="mr-3"
              variant="tonal"
              color="white"
              target="_blank"
              href="https://www.facebook.com/apitechnepal"
              aria-label="Facebook Link button"
            >
              <v-icon>
                <Icon icon="fa6-brands:facebook" />
              </v-icon>
            </v-btn>
            <v-btn
              icon
              rounded="circle"
              class="mr-3"
              variant="tonal"
              color="white"
              target="_blank"
              href="https://www.linkedin.com/company/api-technology-pvt.-ltd./"
              aria-label="LinkedIn Link button"
            >
              <v-icon>
                <Icon icon="fa6-brands:linkedin" />
              </v-icon>
            </v-btn>
          </client-only>
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
          <div class="text-h6 font-weight-bold">General Info</div>
          <v-divider class="my-3"></v-divider>
          <ul class="contact-us-list">
            <li
              v-for="(contact, i) in contactList"
              :key="i"
              class="d-flex align-center"
            >
              <span>
                <v-icon small color="primary">
                  <Icon :icon="contact['icon']" />
                </v-icon>
              </span>
              {{ contact.title }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="3">
          <div class="text-h6 font-weight-bold">Work Hours</div>
          <v-divider class="my-3"></v-divider>
          <div class="mb-3">
            <v-icon>
              <Icon icon="mdi:clock-outline" />
            </v-icon>
            10 AM - 6 PM, Sunday - Friday
          </div>
          <div class="mb-3">Please feel free to visit us at given time.</div>
          <div class="text-h6 font-weight-bold">Special Partner</div>
          <v-divider class="my-3"></v-divider>
          <v-img
            width="200"
            height="60"
            src="/certified-partner-logo.avif"
            alt="certified partner logo"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="12" class="pt-6">
          <div class="text-center text-overline">
            Copyright © {{ new Date().getFullYear() }}, API Technology. All
            Right Reserved
          </div>
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
