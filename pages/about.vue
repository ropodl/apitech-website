<script setup>
import { Icon } from "@iconify/vue";

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
    icon: "mdi:thumb-up",
    title: "7+ years of service",
    desc: "Api Technologies is a company that has been operating in the technical protection solutions industry for over 7 years. During this time, we have acquired extensive experience and knowledge in the field, enabling it to provide high-quality solutions to our clients.",
  },
  {
    icon: "mdi:star",
    title: "Best in Industry Support",
    desc: "Api Technologies prides itself on providing exceptional customer support, always striving to exceed client expectations. Our team of professional engineers and technicians are highly skilled and experienced, offering the best support in the industry.",
  },
  {
    icon: "mdi:certificate",
    title: "Industry Certified",
    desc: "Api Technologies is industry certified, having obtained all necessary certifications required to operate in the technical protection solutions industry. Our certifications serve as a testament to our commitment to professionalism and quality.",
  },
];
</script>
<template>
  <LazyLayoutPageSection class="mb-10" title="About Us" />
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card flat color="transparent" class="py-10 px-3" rounded="xl">
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
      <v-col cols="12" md="6">
        <v-card color="primary" class="py-10 px-3" rounded="xl">
          <v-card-title class="text-h4">Why API Technology</v-card-title>
          <v-divider class="border-0"></v-divider>
          <v-card-text>
            API Technologies offers customized technical protection solutions
            through our experienced professionals who prioritize quality,
            professionalism, and customer satisfaction. Protect your assets with
            API Technologies and enjoy peace of mind.
          </v-card-text>
          <v-list-item class="mb-6" v-for="(item, i) in why">
            <template #prepend>
              <v-avatar size="60" color="primary" rounded="lg">
                <v-icon size="30">
                  <Icon :icon="item['icon']" />
                </v-icon>
              </v-avatar>
            </template>
            <v-list-item-title
              class="text-h5 font-weight-bold text-wrap mb-3"
              v-text="item['title']"
            >
            </v-list-item-title>
            <v-list-item-subtitle
              class="text-wrap"
              v-text="item['desc']"
              style="line-height: 1.4rem"
            ></v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <LazySharedOurClients />
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
  <LazySharedWorkingProcess />
</template>
