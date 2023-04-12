<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const infoList = [
  {
    title: "Contact Address",
    content: "Mid Baneshwor",
  },
  {
    title: "General Inquiry",
    content: "info@apitechnepal.com",
  },
  {
    title: "Phone Number",
    content: "01-4472774 ",
  },
  // {
  //   title: "Social Media",
  //   content: [
  //     {
  //       title: "Facebook",
  //       link: "https://www.facebook.com/apitechnepal",
  //       icon: "['fab', 'fa-facebook']",
  //     },
  //   ],
  // },
];
</script>
<template>
  <LazyLayoutPageSection title="Contact Us" />
  <v-container>
    <v-row>
      <v-col cols="12" md="6">

        <div class="text-h2 font-weight-black mb-6">
          Excited about the project? <br />
          Please <span class="primary--text">get in touch.</span>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="py-10">
        <v-row>
          <v-col
            class=""
            v-for="(info, i) in infoList"
            :key="i"
            cols="12"
            md="6"
          >
            <div class="text-overline">{{ info.title }}</div>
            <div class="text-subtitle-1">
              <span v-if="i != 3">
                {{ info.content }}
              </span>
              <span v-else>
                <v-btn
                  class="mr-2"
                  v-for="(social, i) in info.content"
                  :key="i"
                  :href="social.link"
                  icon
                  outlined
                  large
                  target="_blank"
                >
                  <v-icon>
                    <font-awesome-icon :icon="social.icon"></font-awesome-icon>
                  </v-icon>
                </v-btn>
              </span>
            </div>
          </v-col>
        </v-row>
        <!-- <ContactContactform /> -->
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7098031715627!2d85.33517031442436!3d27.69536273262684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ced66967%3A0x712d9cdbe5edab7e!2sApi%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1612344942698!5m2!1sen!2snp"
            frameborder="0"
            class="h-100 w-100"
            :class="isDark ? 'dark' : ''"
            :style="{
              border: 0,
              minHeight: '400px',
              filter: isDark?'grayscale(1) invert(1)':'',
            }"
            aria-hidden="false"
            tabindex="0"
            allowfullscreen
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
div.dark {
  filter: grayscale(1) !important;
}
</style>
