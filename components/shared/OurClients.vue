<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const clients = [
  {
    name: "Nepal Telecom",
    image: "/clients/ntc.avif",
  },
  {
    name: "Nepal Police",
    image: "/clients/nepalpolice.avif",
  },
  {
    name: "Nepal Oil Limited",
    image: "/clients/nepaloil.avif",
  },
  {
    name: "Janaki Tech",
    image: "/clients/janaki.avif",
  },
  {
    name: "KIEC",
    image: "/clients/kiec1.avif",
  },
  {
    name: "Forum for Women",
    image: "/clients/fwld-logo.avif",
  },
  {
    name: "Aarma",
    image: "/clients/Aarma.avif",
  },
  {
    name: "Annapurna",
    image: "/clients/Annapurna.avif",
  },
  {
    name: "Gajuri",
    image: "/clients/gajuri.avif",
  },
  {
    name: "Hard Rock",
    image: "/clients/HardRock.avif",
  },
  {
    name: "IIDS",
    image: "/clients/IIDS.avif",
  },
  {
    name: "JAF",
    image: "/clients/jaf.avif",
  },
  {
    name: "Mandala",
    image: "/clients/mandala.avif",
  },
  {
    name: "Ministry of Finance",
    image: "/clients/Ministry_of_finance.avif",
  },
  {
    name: "Muktishree",
    image: "/clients/Muktishree.avif",
  },
  {
    name: "Trissa",
    image: "/clients/Trissa.avif",
  },
];
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>
<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" md="5">
        <div class="text-h4 font-weight-black mb-3 text-primary">
          Our Valued Clients
        </div>
        <div class="text-body-2">
          Our clients are our top priority. We strive to provide reliable
          security systems and exceptional service to ensure their safety and
          peace of mind.
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="7">
        <client-only>
          <carousel
            :autoplay="4000"
            :items-to-show="5"
            wrap-around
            pauseAutoplayOnHover
            :breakpoints="breakpoints"
          >
            <Slide v-for="(item, i) in clients" :key="item">
              <v-img
                height="100"
                class="carousel__item ma-2"
                :src="item.image"
                :alt="item.name"
              ></v-img>
            </Slide>
          </carousel>
        </client-only>
      </v-col>
    </v-row>
  </v-container>
</template>
