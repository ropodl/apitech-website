<template>
  <v-app>
    <Gotop />
    <Topbar />
    <Navbar />
    <v-main>
      <nuxt keep-alive />
      <div style="height:10000px"></div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
