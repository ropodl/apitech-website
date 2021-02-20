<template>
  <div class="contact-form">
    <v-row class="d-flex mt-16">
      <v-spacer></v-spacer>
      <v-col cols="12" md="8">
        <v-form v-model="formvalid">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                required
                hide-details
                v-model="fullname"
                class="rounded-0"
                placeholder="Full Name"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                hide-details
                class="rounded-0"
                placeholder="Email Address"
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                hide-details
                class="rounded-0"
                placeholder="Email Address"
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                hide-details
                class="rounded-0"
                placeholder="Email Address"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea
                filled
                class="rounded-0"
                placeholder="Message"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formvalid: false,
      fullname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ]
    };
  }
};
</script>

<style></style>
