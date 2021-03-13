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
            <v-container class="py-6">
              <v-row>
                <v-col v-for="i in 9" :key="i" cols="12" md="4">
                  <v-hover v-slot="{ hover }">
                    <!-- <NuxtLink to="/"> -->
                    <v-card
                      height="250"
                      class="rounded-0 align-end elevation-0"
                      :ripple="false"
                      link
                      to="gallery/1"
                    >
                      <v-img
                        class="align-end"
                        :class="hover ? 'image-zoom' : ''"
                        eager
                        height="250"
                        src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80"
                      >
                        <div
                          style="background-color:rgba(0,0,0,0.7);backdrop-filter:blur(10px);"
                        >
                          <v-card-title class="white--text">
                            Gallery Title
                          </v-card-title>
                          <!-- <v-card-subtitle class="white--text">
                          Gallery Meta
                        </v-card-subtitle> -->
                        </div>
                      </v-img>
                    </v-card>
                  </v-hover>
                  <!-- </NuxtLink> -->
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <v-pagination flat v-model="page" :length="5"></v-pagination>
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
export default {
  data() {
    return {
      page: 1
    };
  }
};
</script>

<style lang="scss">
div.image-zoom {
  div.v-image__image {
    transform: scale(1.1);
  }
}
div.v-image__image {
  transition: all 0.2s linear;
}
</style>
