<script setup>
import { mdiArrowRight, mdiAt } from "@mdi/js";
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const experience = [
  {
    icon: "fal fa-house",
    title: "Residental Clients",
    number: "600+",
  },
  {
    icon: "fal fa-car-building",
    title: "Commerical Clients",
    number: "900+",
  },
  {
    icon: "fal fa-smile-wink",
    title: "Happy Clients",
    number: "2000+",
  },
];

const createMail = () => {
  document.location = "mailto:info.apitech@gmail.com";
};
</script>
<template>
  <v-container fluid class="pa-0">
    <v-img cover height="650" src="/images/img1.avif" alt="background image">
      <div
        class="h-100 w-100 pt-16"
        :style="{
          backgroundColor: isDark ? `rgba(0,0,0,0.5)` : `rgba(255,255,255,0.5)`,
          backdropFilter: `blur(4px)`,
        }"
      >
        <v-container class="h-100 w-100">
          <v-row justify="center" align="center" class="h-100">
            <v-col cols="12" md="6">
              <div class="text-md-h2 text-sm-h2 text-h3 font-weight-black">
                Professional <br class="hidden-sm-and-down" /><span
                  :class="
                    isDark ? 'text-primary-lighten-4' : 'text-primary'
                  "
                  >Security Services</span
                ><br class="hidden-sm-and-down" />
                You Can Trust
              </div>
              <div
                class="divider my-6 bg-primary"
              ></div>
              <div class="mb-6">
                We, at Api Technology, offer B2B services in Web, Android,
                Networking, ICT, and Electronics Hardware. We excel in providing
                IoT, Electronics & Communication, and Security Technologies for
                critical applications across various markets, including
                government, medical/industrial, and consumer.
              </div>
              <v-row>
                <v-col cols="12" md="6">
                  <v-btn
                    block
                    flat
                    rounded="pill"
                    color="primary"
                    height="60"
                    class="text-capitalize"
                    to="/services"
                  >
                    Explore Our Services
                    <v-icon end :icon="mdiArrowRight"></v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="hidden-sm-and-down">
              <div class="d-flex align-center justify-center">
                <v-card
                  flat
                  color="transparent"
                  class="overflow-visible"
                  width="350"
                  height="480"
                >
                  <span class="rounded-pill overflow-hidden">
                    <v-img
                      cover
                      width="350"
                      height="480"
                      class="h-100 w-100 rounded-pill overflow-hidden"
                      src="/images/img2.avif"
                      alt="CCTV Image"
                    >
                    </v-img>
                  </span>
                  <v-btn
                    icon
                    class="rounded-circle pulse-button text-decoration-none"
                    size="70"
                    style="position: absolute; bottom: 0; left: 50px"
                    @click="createMail"
                    aria-label="Send us an Email Button"
                  >
                    <v-icon size="40" :icon="mdiAt"></v-icon>
                  </v-btn>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </v-container>
</template>
<style lang="scss">
.pulse-button {
  position: relative;
  display: block;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5);
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
