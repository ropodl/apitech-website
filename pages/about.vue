<script setup>
import { mdiThumbUp } from "@mdi/js";

useHead({
  title: "Learn More About API Technology",
  meta: [
    {
      name: "description",
      content:
        "Discover how API Technology can help your business with our B2B services in Web, Mobile, Networking, ICT and Electronics Hardware.",
    },
  ],
});

const why = [
  {
    icon: mdiThumbUp,
    title: "7+ years of service",
    desc: "Api Technologies has been providing technical protection solutions for over 7 years, gaining extensive experience and knowledge in the industry.",
  },
  {
    icon: mdiThumbUp,
    title: "Best in Industry Support",
    desc: "Api Technologies prides itself on providing exceptional customer support, always striving to exceed client expectations. Our team of professional engineers and technicians are highly skilled and experienced, offering the best support in the industry.",
  },
  {
    icon: mdiThumbUp,
    title: "Industry Certified",
    desc: "Api Technologies is industry certified, having obtained all necessary certifications required to operate in the technical protection solutions industry. Our certifications serve as a testament to our commitment to professionalism and quality.",
  },
];
</script>
<template>
  <LazyLayoutPageSection title="About Us" />
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-card
          color="primary-darken-3"
          class="py-10 px-3 mt-lg-n16"
          rounded="xl"
        >
          <v-card-title class="text-h3 font-weight-bold">
            Our Vision
          </v-card-title>
          <v-divider class="border-0"></v-divider>
          <v-card-text class="text-subtitle-1 text-justify">
            <p>
              At Api Technologies, our vision is to be a trusted partner to
              individuals, businesses, and organizations worldwide by providing
              tailored technical protection solutions that cater to their unique
              needs. We are committed to delivering exceptional service,
              prioritizing quality, professionalism, and customer satisfaction.
            </p>
            <br />
            <p>
              To achieve our vision, we focus on continuous improvement and
              staying up-to-date with the latest technology trends. Our services
              include IP/HD/Analog/Wireless CCTV, fire resistance systems,
              intercom/radio systems, optical fiber/wired/wireless networking,
              GPS tracking, time attendance, access control, IoT and automation,
              EPABX/KTS & phones, and web and Android app design.
            </p>
            <br />
            <p>
              We believe that by offering innovative and customized solutions,
              we can help our clients improve efficiency, reduce costs, and
              enhance security. Our goal is to build strong relationships with
              our clients, based on trust, transparency, and open communication,
              to become their go-to partner for all their technical protection
              needs. With Api Technologies, our clients can enjoy peace of mind
              and focus on achieving their business objectives, knowing that
              their assets are protected by the best in the industry.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="rounded-xl rounded-s-0 py-10">
          <v-card-title class="text-h4">Why API Technology</v-card-title>
          <v-divider class="border-0"></v-divider>
          <v-card-text>
            API Technologies offers customized technical protection solutions
            through our experienced professionals who prioritize quality,
            professionalism, and customer satisfaction. Protect your assets with
            API Technologies and enjoy peace of mind.
          </v-card-text>
          <v-list density="compact" lines="three" v-for="(item, i) in why">
            <v-list-item>
              <template #prepend>
                <v-avatar size="60" color="primary-darken-3" rounded="lg">
                  <v-icon size="30" :icon="item['icon']"></v-icon>
                </v-avatar>
              </template>
              <v-list-item-title
                class="text-h5 font-weight-bold text-wrap mb-3"
                v-text="item['title']"
              >
              </v-list-item-title>
              <v-list-item-subtitle
                v-text="item['desc']"
                style="line-height: 1.6rem"
              ></v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <!-- <v-card-text> this is a test and this is also a test </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <LazySharedOurClients />
  <!-- <HomeAboutPara /> -->
  <!-- <v-container>
    <v-row>
      <v-col cols="12" md="6">
        Api Technology offer you a business to business service in the Web,
        Android, Networking, ICT and Electronics Hardware platform. We are a
        dominant technology provider of Internet Of Things, Electronics &
        Communication, and Security Technologies for critical and
        high-reliability applications. Markets span government, non-government,
        medical/industrial and communica-tions/consumer.
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-h2 font-weight-black text-right text-uppercase">
        </div>
      </v-col>
    </v-row>
  </v-container> -->
  <v-card rounded="0" color="primary">
    <v-container class="my-10">
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center text-h5 font-weight-bold">
            <span class="primary--text">Support services </span>
            that no other
            <span class="primary--text">I.T. or Electronics</span> has been able
            to <span class="primary--text">provide</span>.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <SharedWorkingProcess />
</template>
