<template>
  <div v-resize="onResize" class="clients">
    <v-row class="mt-6">
      <v-col cols="12" md="12">
        <Cattitle :first="'Our Valued'" :second="'Clients'" />
        <!-- <div class="text-h4 font-weight-black text-center">
          Our <span class="primary--text"> Valued</span> Clients
        </div> -->
      </v-col>
      <v-col cols="12" md="12">
        <client-only>
          <carousel
            :lazyLoad="true"
            :autoplay="true"
            :items="5"
            :loop="true"
            :nav="false"
            :dots="false"
            :autoplayTimeout="2000"
            :smartSpeed="2000"
            :responsive="{
              0: { items: 1 },
              360: { items: 2 },
              600: { items: 3 },
              900: { items: 4 },
              1264: { items: 5 }
            }"
          >
            <!-- {{ windowSize.x }} -->
            <v-card
              outlined
              class="ma-1 d-flex justify-center align-center"
              v-for="(client, i) in clients"
              :key="i"
            >
              <img class="rounded-0" width="64" height="64" :src="client.src" />
            </v-card>
          </carousel>
        </client-only>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          name: "Nepal Telecom",
          src: "/clients/ntc.webp"
        },
        {
          name: "Nepal Police",
          src: "/clients/nepalpolice.webp"
        },
        {
          name: "Nepal Oil Limited",
          src: "/clients/NEPALOIL.webp"
        },
        {
          name: "Janaki Tech",
          src: "/clients/janaki.webp"
        },
        {
          name: "KIEC",
          src: "/clients/kiec1.webp"
        },
        {
          name: "Forum for Women",
          src: "/clients/fwld-logo.webp"
        }
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = {
        x: window.innerWidth,
        y: window.innerHeight
      };
    }
  },
  // computed: {
  //   x: function() {
  //     if (process.client) {
  //       return window.innerWidth;
  //     } else return "awdaw";
  //   }
  // },
  watch: {
    // x: function(val) {
    //   val = process.client ? windows.client : "awdawd";
    // }
  }
};
</script>

<style lang="scss">
div.owl-carousel {
  div.owl-item {
    img {
      object-fit: contain;
      width: 128px !important;
      height: 128px !important;
    }
  }
}
</style>
