<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const blogs = [
  {
    image: "/blogs/blog-1.avif",
    title:
      "Protecting Your Property: The Importance of CCTV and Security Systems",
    desc: "Something to remember me by",
    link: "/blog/protecting-property-importance-cctv-security-systems",
  },
  {
    image: "/blogs/blog-2.avif",
    title:
      "The Importance of Fire Extinguishers in Protecting Your Home or Business",
    desc: "Something to remember me by",
    link: "/blog/fire-extinguishers-protect-home-business",
  },
  {
    image: "/blogs/blog-3.avif",
    title:
      "Streamlining Your Workplace with Time Attendance and Access Control Solutions",
    desc: "Something to remember me by",
    link: "/blog/streamline-workplace-time-attendance-access-control",
  },
];
</script>
<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="5" class="text-center pb-0">
        <v-card-title class="text-h3 font-weight-bold text-primary">
          Blog & Article
        </v-card-title>
        <!-- <div class="mx-auto divider"></div> -->
        <v-card-text>
          Explore our insightful blog for valuable industry tips and client
          success stories. Stay updated with API Technology.
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="blog in blogs">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            :elevation="isHovering ? '4' : '0'"
            variant="text"
            :to="blog['link']"
            v-bind="props"
            v-tilt="{ gyroscope: false, speed: 500, perspective: 1200 }"
          >
            <v-img
              cover
              height="460"
              class="align-end"
              :class="isHovering ? 'zoom' : ''"
              :src="blog['image']"
            >
              <v-card
                class="mx-3 mb-3"
                :style="{
                  backgroundColor: isDark
                    ? 'rgba(21, 21, 21, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                }"
              >
                <v-list density="compact" lines="two" bg-color="transparent">
                  <v-list-item>
                    <v-list-item-subtitle
                      class="text-subtitle-1 font-weight-medium"
                      v-text="blog['title']"
                      style="line-height: 1.6rem; opacity: 1"
                    ></v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
