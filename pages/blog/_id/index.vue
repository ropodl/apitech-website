<template>
  <div class="blog-show">
    <Pagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1566060475410-1159300f046f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=100'
      "
      :title="'This is the test title of this blog'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container>
              <v-row>
                <v-col cols="12">{{ $route.params.id }}</v-col>
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
