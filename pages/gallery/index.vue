<template>
  <div class="gallery">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80'
      "
      :title="'Gallery'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <v-row>
                <v-col v-for="i in 9" :key="i" cols="12" md="4">
                  <!-- <NuxtLink to="/"> -->
                  <v-card class="rounded-0" :ripple="false" link to="gallery/1">
                    <v-img
                      src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80"
                    ></v-img>
                    <v-card-title>
                      Gallery Title
                    </v-card-title>
                    <v-card-subtitle>
                      Gallery Meta
                    </v-card-subtitle>
                  </v-card>
                  <!-- </NuxtLink> -->
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
export default {};
</script>

<style></style>
