<script setup>
import { mdiAt } from "@mdi/js";

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
</script>
<template>
  <v-img
    cover
    height="650"
    src="https://kitpro.site/securez/wp-content/uploads/sites/142/2023/01/cctv-cameras-on-the-wall-record-video-all-day-to-p-2022-10-11-17-18-57-utc.jpg"
  >
    <v-overlay
      :model-value="true"
      contained
      persistent
      no-click-animation
      scrim="white"
      class="overlay-opacity"
      content-class="pt-16"
    >
      <v-container class="h-100 w-100">
        <v-row justify="center" align="center" class="h-100">
          <v-col cols="12" md="6">
            <div class="text-md-h2 text-sm-h4 font-weight-black">
              Professional <br class="hidden-sm-and-down" /><span
                class="text-primary"
                >Security Services</span
              ><br class="hidden-sm-and-down" />
              You Can Trust
            </div>
            <div class="divider my-6"></div>
            <!-- <div class="mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div> -->
            <v-row no-gutters>
              <v-col cols="12" sm="6" md="4" v-for="(exp, i) in experience">
                <v-card flat color="transparent">
                  <v-card-title
                    class="text-center text-h3 mb-3 font-weight-black"
                    :class="['text-primary-darken-' + (experience.length - i)]"
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
          <v-col cols="12" md="6">
            <div class="d-flex align-center justify-center">
              <v-card
                class="rounded-pill overflow-visible"
                width="350"
                height="480"
              >
                <span class="rounded-pill overflow-hidden">
                  <v-img
                    cover
                    class="h-100 w-100 rounded-pill overflow-hidden"
                    src="https://kitpro.site/securez/wp-content/uploads/sites/142/2023/01/image-1-721x1024.jpg"
                  >
                  </v-img>
                </span>
                <v-btn
                  icon
                  class="rounded-circle pulse-button"
                  size="70"
                  style="position: absolute; bottom: 0; left: 50px"
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
</template>
<style lang="scss">
.divider {
  border-radius: 10px;
  width: 100px;
  height: 6px;
  background-color: rgb(var(--v-theme-primary));
}

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
