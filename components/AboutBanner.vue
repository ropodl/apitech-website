<template>
  <v-row>
    <v-col cols="12" md="6" class="pl-0" style="margin-top:-28px;">
      <div style="position:relative;">
        <div
          style="position:absolute;top:-20px;left:-20px;height:200px;width:200px;border: 1px dashed black;"
        ></div>
        <v-parallax
          height="600"
          class="border"
          src="https://geniuscript.com/serity/assets/images/resources/img3.jpg"
        ></v-parallax>
      </div>
    </v-col>
    <v-col cols="12" md="6">
      <div class="text-overline mb-2 mt-16" style="font-size:1rem !important;">
        About Us
      </div>
      <div class="text-h4 font-weight-bold" style="line-height:1.3em;">
        We Provide Service with<br />
        5 Years of Experience
      </div>
      <div class="d-flex mt-4 mb-8">
        <span class="primary" style="width:60px;height:5px;"></span>
        <span
          class="black"
          style="margin-left:5px;width:30px;height:5px;"
        ></span>
      </div>
      <div class="mb-10" style="font-size:20px;font-weight:300;">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum libero
        aliquid iusto accusantium corporis distinctio, alias magni doloribus
        similique qui temporibus nemo nobis esse sequi eaque doloremque
        voluptates quae. Obcaecati esse dolores magnam optio molestias sapiente
        quia nam dicta consectetur!
      </div>
      <div class="mb-10">
        <ul class="pl-0">
          <li
            v-for="i in 3"
            :key="i"
            style="font-size:20px;font-weight:300;list-style:none;"
          >
            <span>0{{ i }}.</span>
          </li>
        </ul>
      </div>
      <div class="mb-4 d-flex">
        <span class="text-h5 font-weight-bold" style="line-height:1.2em;">
          For Fast and Reliable
          <br />
          Service
        </span>
        <span class="ml-6 text-h5 font-weight-bold" style="line-height:1.2em;">
          +977-01-4472774
        </span>
      </div>
      <div class="mb-10 text-h5 font-weight-bold"></div>
      <div class="d-flex mb-10">
        <v-btn link to="/about" color="primary" class="px-10 py-6">
          More about us
        </v-btn>
        <v-btn
          text
          link
          class="px-10 py-6 ml-4"
          href="https://www.apitechnepal.com/wp-content/uploads/2020/09/brochure.pdf"
          target="_blank"
        >
          View Brochure
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
