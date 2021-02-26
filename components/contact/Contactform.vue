<template>
  <div class="contact-form">
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row class="d-flex my-10">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-form v-model="formvalid" ref="contactform" lazy-validation>
          <v-row>
            <v-col cols="12" md="12">
              <Cattitle :first="'Send us'" :second="'a message'" />
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                v-model="fullname"
                class="rounded-0"
                placeholder="Full Name"
                :rules="nameRules"
                required
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                v-model="email"
                class="rounded-0"
                placeholder="Email Address"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                v-model="phone"
                class="rounded-0"
                placeholder="Phone Number"
                :rules="phoneRules"
                required
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="6">
              <v-text-field
                filled
                class="rounded-0"
                placeholder="Subject"
                :rules="subjectRules"
                required
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" md="12">
              <v-textarea
                filled
                class="rounded-0"
                placeholder="Message"
                :rules="messageRules"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn
            large
            class="d-flex px-16 ml-auto rounded-0"
            @click="formSubmit"
            color="primary"
          >
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formvalid: false,
      snackbar: false,
      text: "",
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      nameRules: [
        v => !!v || "Full Name must not be empty",
        v => v.length >= 5 || "Name must be more than 5 characters"
      ],
      emailRules: [
        v => !!v || "Email must not be empty",
        v =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid"
      ],
      phoneRules: [
        v => !!v || "Phone Number must not be empty",
        v => /^\d+$/.test(v) || "Phone Number must be digit",
        v => (v && v.length >= 7) || "Phone Number must be more than 7 digits"
      ],
      subjectRules: [v => !!v || "Subject is required"],
      messageRules: [v => !!v || "Message must not be empty"],
      infoList: [
        {
          icon: "fal fa-phone-alt",
          title: "Phone",
          content: "9849808471"
        },
        {
          icon: "fal fa-envelope",
          title: "Email",
          content: "9849808471"
        },
        {
          icon: "fal fa-globe",
          title: "Website",
          content: "www.apitechnepal.com"
        },
        {
          icon: "fal fa-map-marker-alt",
          title: "Location",
          content: "Mid Baneshwor, Kathmandu"
        }
      ]
    };
  },
  methods: {
    formSubmit() {
      if (this.$refs.contactform.validate()) {
        alert("123");
      } else {
        (this.text = "Error"), (this.snackbar = true);
      }
    }
  }
};
</script>

<style lang="scss"></style>
