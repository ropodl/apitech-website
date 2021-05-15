<template>
  <div class="blog-index">
    <FramePagesection :imageSrc="''" :title="'Blogs'" />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card
                    link
                    :to="'/blog/' + re.id"
                    v-for="(re, i) in res"
                    :key="i"
                  >
                    <v-card-title>{{ re.title }}</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      res: ""
    };
  },
  mounted() {
    this.call();
  },
  methods: {
    call() {
      axios.get("https://fakestoreapi.com/products").then(res => {
        this.res = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>

<style></style>
