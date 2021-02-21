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
                <v-col cols="12">
                  <div class="my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia aperiam quo mollitia consequatur nam iusto cum itaque
                    suscipit, ea qui dicta ad, impedit exercitationem laboriosam
                    non, minima est! Dolore, unde.
                  </div>
                  <Cattitle :first="'Title'" />
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
