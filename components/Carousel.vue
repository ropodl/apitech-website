<template>
  <v-parallax eager :src="titles[currentSlide].image">
    <v-overlay
      absolute
      color="rgba(0,0,0,1)"
      class="d-flex justify-start align-start"
    >
      <v-carousel
        v-model="currentSlide"
        vertical
        cycle
        continuous
        hide-delimiters
      >
        <v-carousel-item v-for="(title, i) in titles" :key="i">
          <v-container>
            <v-row class="d-flex align-center">
              <v-col cols="12" md="8">
                <div class="text-h2 font-weight-black">
                  {{ title.title }}
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      titles: [
        {
          title: "A Safe Home For You and Your Family",
          image:
            "https://images.unsplash.com/photo-1504439268584-b72c5019471e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
        },
        {
          title: "Automate your home with IOT",
          image:
            "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        },
        {
          title: "Make your workplace secure with Video Survillence",
          image:
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80"
        }
      ]
    };
  }
};
</script>

<style></style>
