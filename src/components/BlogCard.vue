<template>
  <v-row>
    <v-col cols="12">
      <Cattitle :first="'Blog'" />
    </v-col>
    <v-col v-for="i in 3" :key="i" cols="12" md="4">
      <v-hover v-slot="{ hover }">
        <!-- <nuxt-link > -->
        <v-card
          :ripple="false"
          class="rounded-0"
          link
          :to="'/blog/1'"
          elevation="0"
        >
          <div style="position:relative;">
            <v-img
              eager
              height="200"
              src="https://www.apitechnepal.com/wp-content/uploads/2020/10/security_system-min-1-scaled.jpg"
            ></v-img>
          </div>
          <v-card-title class="px-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            tempore.
          </v-card-title>
          <v-card-text class="px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
            dignissimos adipisci itaque inventore aperiam, numquam reiciendis
            nemo modi facilis ut maxime ullam ducimus nihil, sequi perspiciatis
            cupiditate odit voluptatum.
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style></style>
