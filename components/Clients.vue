<template>
  <div class="clients">
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
              0: { items: 1, nav: false },
              360: { items: 2 },
              600: { items: 2, nav: true }
            }"
          >
            {{ x }}
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
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/ntc.jpg"
        },
        {
          name: "Nepal Police",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/nepalpolice.jpg"
        },
        {
          name: "Nepal Oil Limited",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/NEPALOIL.jpg"
        },
        {
          name: "Janaki Tech",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/janaki.jpg"
        },
        // {
        //   name: "Mix ERP",
        //   src:
        //     "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/mixerp.jpg"
        // },
        {
          name: "KIEC",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/kiec1.jpg"
        },
        // {
        //   name: "The Hut",
        //   src:
        //     "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2020/09/logo_001.jpg"
        // },
        {
          name: "Forum for Women",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2020/09/fwld-logo.png"
        }
      ]
    };
  },
  computed: {
    x: function() {
      if (process.client) {
        return window.innerWidth;
      } else return "awdaw";
    }
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
