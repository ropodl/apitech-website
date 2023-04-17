<script setup>
const title = "API Technology - B2B Service in networking, ICT and More";
const desc =
  "API Technology provides business to business services in Web, Mobile, Networking, ICT and Electronics Hardware areas.";
useServerSeoMeta({
  title: title,
  ogTitle: title,
  description: desc,
  ogDescription: desc,
  twitterCard: "summary_large_image",
  twitterDescription: desc,
});
</script>
<template>
  <LazySharedHero />
  <LazySharedFeatureBar />
  <LazySharedOurClients />
  <LazySharedWorkingProcess />
  <LazySharedBlog />
</template>
<style lang="scss">
div.border {
  border-top: 15px solid var(--v-primary-base);
  border-right: 15px solid var(--v-primary-base);
}
div.v-overlay__content {
  width: 100%;
  height: 100%;
  div.container,
  div.row {
    width: 100%;
    height: 100%;
  }
}
</style>
