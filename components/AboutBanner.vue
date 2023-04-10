<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="pl-0 hidden-sm-and-down"
      style="margin-top: -28px"
    >
      <div style="position: relative">
        <div
          style="
            position: absolute;
            top: -20px;
            left: -20px;
            height: 200px;
            width: 200px;
            border: 1px dashed black;
          "
        ></div>
        <v-parallax
          height="600"
          class="border"
          src="images/img3.jpg"
        ></v-parallax>
      </div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
      <div class="text-overline mb-2 mt-16" style="font-size: 1rem !important">
        About Us
      </div>
      <div class="text-h4 font-weight-bold mb-3" style="line-height: 1.3em">
        We Provide Service with
        <br class="hidden-sm-and-down" />
        6 Years of Experience
      </div>
      <div class="mb-3" style="font-size: 20px; font-weight: 300">
        API Technology offer you a business to business service in the Web,
        Mobile, Networking, ICT and Electronics Hardware platform.
      </div>
      <div class="mb-3 d-flex">
        <span class="text-h5 font-weight-bold" style="line-height: 1.2em">
          For Fast and Reliable Service
          <br />
          01-4472774
        </span>
      </div>
      <div class="mb-10 text-h5 font-weight-bold"></div>
      <!-- <div class="d-flex flex-wrap"> -->
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-btn
          v-if="this.$route.path != '/about'"
          link
          large
          to="/about"
          color="primary"
          class="px-10"
        >
          More about us
        </v-btn> -->
        <v-btn
          text
          link
          large
          class="px-10 ml-md-4"
          href="documents/brochure.pdf"
          target="_blank"
        >
          View Brochure
        </v-btn>
        <!-- <v-spacer></v-spacer>n -->
      <!-- </div> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
