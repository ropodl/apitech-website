<script setup>
import { mdiAt } from "@mdi/js";
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
    <v-img cover height="650" src="/images/img1.avif">
      <v-overlay
        :model-value="true"
        contained
        persistent
        no-click-animation
        :scrim="isDark ? 'black' : 'white'"
        class="overlay-opacity"
        content-class="pt-16"
      >
        <v-container class="h-100 w-100">
          <v-row justify="center" align="center" class="h-100">
            <v-col cols="12" md="6">
              <div class="text-md-h2 text-sm-h1 text-h3 font-weight-black">
                Professional <br class="hidden-sm-and-down" /><span
                  class="text-primary"
                  >Security Services</span
                ><br class="hidden-sm-and-down" />
                You Can Trust
              </div>
              <div class="divider my-6"></div>
              <div class="mb-6">
                We, at Api Technology, offer B2B services in Web, Android,
                Networking, ICT, and Electronics Hardware. We excel in providing
                Internet of Things, Electronics & Communication, and Security
                Technologies for critical applications across various markets,
                including government, medical/industrial, and consumer.
              </div>
              <v-row no-gutters class="hidden-md-and-down">
                <v-col cols="12" sm="6" md="4" v-for="(exp, i) in experience">
                  <v-card flat color="transparent">
                    <v-card-title
                      class="text-center text-h3 mb-3 font-weight-black text-wrap"
                      :class="[
                        'text-primary-darken-' + (experience.length - i),
                      ]"
                      v-text="exp['number']"
                    ></v-card-title>
                    <v-card-text
                      class="text-center text-body-1"
                      v-text="exp['title']"
                    ></v-card-text>
                  </v-card>
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
                    >
                    </v-img>
                  </span>
                  <v-btn
                    icon
                    class="rounded-circle pulse-button text-decoration-none"
                    size="70"
                    style="position: absolute; bottom: 0; left: 50px"
                    @click="createMail"
                  >
                    <v-icon size="40" :icon="mdiAt"></v-icon>
                  </v-btn>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-img>
  </v-container>
</template>
<style lang="scss">
.overlay-opacity {
  div.v-overlay__scrim {
    opacity: 0.8 !important;
  }
}

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
