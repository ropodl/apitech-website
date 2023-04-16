<script setup>
import {
  mdiArrowRight,
  mdiCctv,
  mdiRadioHandheld,
  mdiFireAlert,
  mdiAccessPointNetwork,
  mdiHomeAutomation,
  mdiPhoneClassic,
  mdiSquareRoundedBadge,
  mdiCrosshairsGps,
} from "@mdi/js";

useHead({
  title: "Our B2B Services in Web, Mobile, Networking & Hardware",
  meta: [
    {
      name: "description",
      content:
        "API Technology provides a range of business to business services in Web, Mobile, Networking, ICT and Electronics Hardware areas.",
    },
  ],
});

const services = [
  {
    icon: mdiCctv,
    title: "IP/HD/Analog/Wireless CCTV",
  },
  {
    icon: mdiFireAlert,
    title: "Fire Resistance System",
  },
  {
    icon: mdiRadioHandheld,
    title: "Intercom/Radio Systems",
  },
  {
    icon: mdiAccessPointNetwork,
    title: "Optical Fiber/Wired/Wireless Networking",
  },
  {
    icon: mdiCrosshairsGps,
    title: "GPS Tracking",
  },
  {
    icon: mdiRadioHandheld,
    title: "Time Attendance, Access Control",
  },
  {
    icon: mdiHomeAutomation,
    title: "Internet of Things(IOT) & Automation",
  },
  {
    icon: mdiPhoneClassic,
    title: "EPABX/KTS & Phones",
  },
  {
    icon: mdiSquareRoundedBadge,
    title: "Web and Android Apps Design",
  },
];
</script>
<template>
  <LazyLayoutPageSection title="Our Services" />
  <v-container>
    <v-row class="py-16">
      <v-col cols="12" md="6">
        <div class="text-h2 font-weight-bold text-primary">
          We Provide The<br />
          Best Services
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-subtitle-1 mb-3">
          Api Technology offer you a business to business service in the Web,
          Android, Networking, ICT and Electronics Hardware platform. We are a
          dominant technology provider of Internet Of Things, Electronics &
          Communication, and Security Technologies for critical and
          high-reliability applications. Markets span government,
          non-government, medical/industrial and communications/consumer.
        </div>
        <v-btn
          variant="tonal"
          height="50"
          class="text-capitalize px-10"
          to="/about"
        >
          Learn More about out vision
          <v-icon end :icon="mdiArrowRight"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-16">
      <v-col cols="12" sm="6" md="4" v-for="(service, i) in services">
        <v-card border flat rounded="xl" class="py-10 h-100">
          <v-card-text class="text-center">
            <v-avatar rounded="0" size="70">
              <v-icon
                color="primary"
                size="90"
                :icon="service['icon']"
              ></v-icon>
            </v-avatar>
          </v-card-text>
          <v-card-text
            class="text-center font-weight-bold"
            v-text="service['title']"
          ></v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col cols="12">
        <HomeAboutPara />
      </v-col> -->
    </v-row>
  </v-container>
</template>
