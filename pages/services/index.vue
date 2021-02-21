<template>
  <div class="services">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      "
      :title="'Our Services'"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ipsum veniam explicabo dolor iusto officiis quas,
                  est et. Assumenda ea quasi iste nemo ab sapiente blanditiis
                  dolorum aspernatur, sit dolore!
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
      msg: "this is a test"
    };
  }
};
</script>

<style></style>
