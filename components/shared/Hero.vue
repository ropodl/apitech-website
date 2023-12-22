<script setup>
import { Icon } from "@iconify/vue";
import Typed from "typed.js";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useTheme } from "vuetify";

const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const createMail = () => {
  document.location = "mailto:info.apitech@gmail.com";
};

onMounted(() => {
  new Typed("#typed", {
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    strings: [
      "Security System",
      "Networking",
      "Fingerprint System",
      "CCTV Monitoring",
    ],
  });
});

const slides = [
  "/images/img1.avif",
  "/images/finger.avif",
  "/images/fingerprint.avif",
];
</script>
<template>
  <!-- <v-img
    cover
    height="700"
    class="border"
    src="/images/img1.avif"
    alt="background image"
  > -->
  <v-card flat rounded="0" style="padding-top: 65px">
    <!-- <div
      class="h-100 w-100"
      :style="{
        backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(4px)',
      }"
    > -->
    <v-container class="py-16">
      <v-row justify="center" align="center" class="h-100 pb-16">
        <v-col cols="12" md="8" lg="7">
          <div class="text-md-h2 text-sm-h2 text-h3 font-weight-black">
            Professional <br />
            <span id="typed" class="text-primary"> </span>
            <br />
            You Can Trust
          </div>
          <div class="divider my-6 bg-primary"></div>
          <div class="mb-6">
            We, at Api Technology, offer B2B services in Web, Android,
            Networking, ICT, and Electronics Hardware. We excel in providing
            IoT, Electronics & Communication, and Security Technologies for
            critical applications across various markets, including government,
            medical/industrial, and consumer.
          </div>
          <v-btn
            id="explore"
            flat
            rounded="lg"
            color="primary"
            height="50"
            class="text-capitalize px-10"
            to="/services"
          >
            Explore Our Services
            <v-icon end>
              <Icon icon="mdi:arrow-right" />
            </v-icon>
          </v-btn>
          <v-row>
            <v-col cols="12" md="6"> </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" lg="5" class="hidden-sm-and-down">
          <div class="d-flex align-center justify-center">
            <v-card
              flat
              color="transparent"
              class="overflow-visible"
              width="350"
              height="350"
            >
              <client-only>
                <carousel
                  :items-to-show="1"
                  :autoplay="2000"
                  wrap-around
                  :transition="0"
                  pauseAutoplayOnHover
                  :mouseDrag="false"
                  :touchDrag="false"
                >
                  <slide v-for="slide in slides" :key="slide">
                    <v-img
                      cover
                      eager
                      class="rounded-circle"
                      height="350"
                      width="350"
                      :src="slide"
                      :alt="slide"
                    ></v-img>
                  </slide>
                </carousel>
              </client-only>
              <v-btn
                icon
                rounded="circle"
                color="primary"
                class="pulse-button text-decoration-none"
                size="70"
                style="position: absolute; bottom: 0; left: 50px"
                @click="createMail"
                aria-label="Send us an Email Button"
              >
                <v-icon size="40">
                  <Icon icon="mdi:at" />
                </v-icon>
              </v-btn>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- <button
      role="button"
      aria-label="scroll down"
      class="scroller hidden-sm-and-down"
      @click="scrollTo('explore', 0)"
    ></button> -->
    <!-- </div> -->
  </v-card>
  <v-divider></v-divider>
  <!-- <svg
      viewBox="0 0 1440 220"
      style="
        position: absolute;
        left: -10px;
        width: 101%;
        bottom: -70px;
        z-index: 9999;
      "
    >
      <path
        :fill="isDark ? '#121212' : '#ffffff'"
        fill-opacity="1"
        stroke="rgba(var(--v-border-color), var(--v-border-opacity))"
        stroke-width="1"
        d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg> -->
  <!-- </v-img> -->
</template>
<style lang="scss" scoped>
button {
  z-index: 99;
  &.scroller {
    position: absolute;
    height: 35px;
    width: 20px;
    border-radius: 10px;
    border: 2px solid rgb(var(--v-theme-primary));
    bottom: 160px;
    left: 50%;
    // margin-left: -10px;
    &::before {
      content: "";
      height: 5px;
      width: 5px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: rgb(var(--v-theme-primary));
      -webkit-animation: UpAndDown 3s infinite;
      animation: UpAndDown 3s infinite;
    }
    @keyframes UpAndDown {
      0%,
      100% {
        top: 30%;
      }
      50% {
        top: 70%;
        opacity: 0.5;
        -webkit-transform: translate(-50%, -50%) scale(0.8);
        transform: translate(-50%, -50%) scale(0.8);
      }
    }
  }
}
</style>
<style lang="scss">
.typed-cursor {
  color: rgb(var(--v-theme-primary));
}
.pulse-button {
  position: relative;
  display: block;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(var(--v-theme-primary-lighten-4), 0.5);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}
</style>
