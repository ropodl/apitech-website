<script setup>
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
];
</script>
<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <div class="text-h5 font-weight-bold mb-3 text-primary-darken-3">
          Our Valued Clients
        </div>
        <div class="text-body-2">
          Our clients are our top priority. We strive to provide reliable
          security systems and exceptional service to ensure their safety and
          peace of mind.
        </div>
      </v-col>
      <v-row>
        <v-col cols="6" sm="3" md="2" v-for="(item, i) in clients">
          <v-img height="100" :src="item['image']"></v-img>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
