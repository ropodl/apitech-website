<template>
  <v-app>
    <Gotop />
    <Thememode />
    <Topbar />
    <Navbar />
    <v-main>
      <nuxt keep-alive />
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
