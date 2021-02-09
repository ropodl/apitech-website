<template>
  <v-parallax eager :src="titles[currentSlide].image">
    <v-overlay
      absolute
      color="rgba(0,0,0,1)"
      class="d-flex justify-start align-start"
    >
      <v-carousel v-model="currentSlide" vertical cycle hide-delimiters>
        <v-carousel-item v-for="(title, i) in titles" :key="title.id">
          <v-container>
            <v-container>
              <v-row class="d-flex align-center">
                <v-col cols="12" md="6">
                  <div class="text-h2 font-weight-black">
                    {{ title.title }}
                    <!-- A
                    <span
                      style="border-bottom:5px solid var(--v-primary-base);line-height:1.7em;"
                    >
                      Safe Home
                    </span>
                    For You and Your Family -->
                  </div>
                </v-col>
              </v-row>
            </v-container>
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
          id: "0",
          title: "A Safe Home for you and your family",
          image: "/banner.jpg"
        },
        {
          id: "1",
          title: "Automate your home",
          image: "/icon.png"
        }
      ]
    };
  }
};
</script>

<style></style>
