<template>
  <v-app>
    <v-layout>
      <LazyLayoutNavbar />
      <v-main>
        <slot />
      </v-main>
    </v-layout>
    <LazyLayoutFooter />
    <LazyLayoutGotop />
  </v-app>
</template>
