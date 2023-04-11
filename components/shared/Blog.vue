<script setup>
const blogs = [
  {
    image: "/blogs/blog-1.jpg",
    title:
      "Protecting Your Property: The Importance of CCTV and Security Systems",
    desc: "Something to remember me by",
    link: "/blog/protecting-property-importance-cctv-security-systems",
  },
  {
    image: "/blogs/blog-2.jpg",
    title:
      "The Importance of Fire Extinguishers in Protecting Your Home or Business",
    desc: "Something to remember me by",
    link: "/blog/fire-extinguishers-protect-home-business",
  },
  {
    image: "/blogs/blog-3.jpg",
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
      <v-col cols="4" class="text-center pb-0">
        <v-card-title class="text-h3 font-weight-bold text-primary-darken-3"
          >Blog & Article</v-card-title
        >
        <div class="mx-auto divider"></div>
        <v-card-text>
          We learnt so many things around our clients. Here are some articles
          to.
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="blog in blogs">
        <v-card flat variant="text" :to="blog['link']">
          <v-img cover height="470" class="align-end" :src="blog['image']">
            <v-card
              flat
              class="mx-3 mb-3"
              style="
                background-color: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(10px);
              "
            >
              <v-list class="py-0" lines="two" bg-color="transparent">
                <v-list-item>
                  <v-list-item-subtitle
                    class="text-subtitle-1 font-weight-medium"
                    v-text="blog['title']"
                    style="line-height: 1.6rem; opacity: 1"
                  ></v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <!-- <v-card-text
                class="text-h6 font-weight-bold text-primary-darken-3"
                v-text="blog['title']"
              ></v-card-text> -->
            </v-card>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
