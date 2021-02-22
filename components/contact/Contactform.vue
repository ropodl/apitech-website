<template>
  <div class="contact-form">
    <v-row class="d-flex my-10">
      <v-col cols="12" md="8">
        <v-form v-model="formvalid" lazy-validation>
          <v-row>
            <v-col cols="12" md="12">
              <Cattitle :first="'Send us'" :second="'a message'" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                filled
                v-model="fullname"
                class="rounded-0"
                placeholder="Full Name"
                :rules="nameRules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
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
            <v-col cols="12" md="12">
              <v-textarea
                filled
                class="rounded-0"
                placeholder="Message"
                :rules="messageRules"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn large class="d-flex px-10 ml-auto" color="primary">
            Submit
          </v-btn>
        </v-form>
      </v-col>
      <v-col class="d-flex justify-center align-center" cols="12" md="4">
        <div style="Width:100%;">
          <v-card
            class="d-flex justify-center my-4"
            color="primary"
            v-for="(info, i) in infoList"
            :key="i"
            style="width:100%;border-top-left-radius:50px;border-top-right-radius:0px;border-bottom-left-radius:50px;border-bottom-right-radius:0px;"
          >
            <v-list-item two-line class="my-2">
              <v-avatar tile class="ml-4 mr-4">
                <v-icon x-large color="white">{{ info.icon }}</v-icon>
              </v-avatar>
              <v-list-item-content>
                <v-list-item-title class="white--text text-h6">{{
                  info.title
                }}</v-list-item-title>
                <v-list-item-subtitle class="white--text text-subtitle-1">{{
                  info.content
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formvalid: false,
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
  }
};
</script>

<style lang="scss"></style>
