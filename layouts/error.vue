<template>
  <v-app>
    <v-main
      class="d-flex justify-center align-center"
      style="height:100% !important;"
    >
      <v-container>
        <!-- class="d-flex justify-center align-center"
        style="height:100% !important;" -->
        <v-row>
          <!-- class="d-flex justify-center align-center"
          style="height:100% !important;" -->
          <v-col cols="12">
            <!-- class="d-flex justify-center align-center"
            style="height:100% !important;" -->
            <div class="text-center">
              <div>
                <h1 v-if="error.statusCode === 404">
                  <h1 class="text-h1 font-weight-black gradient">
                    {{ pageNotFound }}
                  </h1>
                  <div class="font-weight-medium">
                    Did you get lost?
                  </div>
                  <div class="text-overline">
                    The page you were looking for could not be found.
                  </div>
                </h1>
                <h1 class="text-h1" v-else>
                  {{ otherError }}
                </h1>
              </div>
              <v-btn color="primary" x-large text link to="/">
                Go to Home page
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style lang="scss">
h1.text-h1.gradient {
  line-height: 1;
  margin-bottom: 0;
  font-size: 180px !important;
  line-height: unset;
  // background: -webkit-linear-gradient(
  //   var(--v-primary-base),
  //   var(--v-primary-lighten5)
  // );
  background: url(https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
