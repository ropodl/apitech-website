<script setup>
defineProps({
  error: Object,
});
</script>
<template>
  <div>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <v-app>
      <NuxtLayout>
        <LazyLayoutPageSection
          :title="error.statusCode + ' ' + error.statusMessage"
        />
      </NuxtLayout>
    </v-app>
  </div>
</template>
