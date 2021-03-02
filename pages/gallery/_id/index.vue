<template>
  <div class="gallery-show">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1392&q=80'
      "
      :title="'Featured image with title'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <client-only>
              <LightGallery
                :disableScroll="false"
                :images="images"
                :index="index"
                @close="index = null"
              />
            </client-only>
            <v-container>
              <v-row>
                <v-col
                  v-for="(thumb, thumbIndex) in images"
                  :key="thumbIndex"
                  cols="12"
                  md="4"
                >
                  <v-card class="rounded-0 mb-2" @click="index = thumbIndex">
                    <v-img height="300" :src="thumb.url"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      images: [
        {
          title: "img 1",
          url:
            "https://images.unsplash.com/photo-1614676367446-17828873a71c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1545163316-d6dd29834d7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=799&q=80"
        }
      ],
      index: null
    };
  },
  methods: {}
};
</script>

<style></style>
