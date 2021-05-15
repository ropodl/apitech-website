<template>
  <div>{{ this.$route.params.id }}{{ res }}</div>
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
      axios
        .get("https://fakestoreapi.com/products/" + this.$route.params.id)
        .then(res => {
          this.res = res.data;
          console.log(res.data);
        });
    }
  }
};
</script>

<style></style>
