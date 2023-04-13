<script setup>
import emailjs from "@emailjs/browser";
import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = computed(() =>
  theme.global.name.value == "dark" ? true : false
);

const contactForm = ref(null);
let loading = ref(false);
let snackbar = reactive({
  show: false,
  text: "",
});

const submitForm = async () => {
  loading.value = true;
  const { valid } = await contactForm.value.validate();
  if (valid) {
    emailjs
      .send(
        "service_3ujy4pd",
        "template_0wt2tnn",
        templateParams,
        "-xkHJckmH36raNsEo"
      )
      .then((response) => {
        if (response.status == "200") {
          snackbar["text"] = "Successfully sent, we will reply soon.";
          snackbar["show"] = true;
          contactForm.value.reset();
        }
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  } else console.log("failed");
  loading.value = false;
};

const templateParams = reactive({
  from_name: "",
  from_mobile_number: "",
  from_email: "",
  to_name: "API Technology",
  from_subject: "",
  message: "",
});

const rules = {
  fullName: [
    (value) => {
      if (value?.length > 3) return true;
      return "Full name must be more than 3 characters.";
    },
  ],
  phoneNumber: [
    (value) => {
      if (value?.length > 6) return true;
      return "Phone Number must be at least 7 characters.";
    },
  ],
  emailAddress: [
    (value) => {
      if (value?.length > 3) return true;
      return "Email Address must be at least 3 characters.";
    },
    (v) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      ) || "Email Address must be in a valid format",
  ],
  subject: [
    (value) => {
      if (value?.length > 3) return true;
      return "Subject must be at least 3 characters.";
    },
  ],
  message: [
    (value) => {
      if (value?.length > 3) return true;
      return "Message must be at least 3 characters.";
    },
  ],
};

const infoList = [
  {
    icon: mdiMapMarker,
    title: "Contact Address",
    content: "Mid Baneshwor",
  },
  {
    icon: mdiEmail,
    title: "General Inquiry",
    content: "info@apitechnepal.com",
  },
  {
    icon: mdiPhone,
    title: "Phone Number",
    content: "01-4472774 ",
  },
  // {
  //   title: "Social Media",
  //   content: [
  //     {
  //       title: "Facebook",
  //       link: "https://www.facebook.com/apitechnepal",
  //       icon: "['fab', 'fa-facebook']",
  //     },
  //   ],
  // },
];
</script>
<template>
  <LazyLayoutPageSection title="Contact Us" />
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-form ref="contactForm" @submit.prevent="submitForm">
            <v-card-text class="pb-0">
              <v-text-field
                v-model="templateParams['from_name']"
                :rules="rules['fullName']"
                placeholder="Full Name"
              ></v-text-field>
              <v-text-field
                v-model="templateParams['from_mobile_number']"
                :rules="rules['phoneNumber']"
                placeholder="Phone Number"
              ></v-text-field>
              <v-text-field
                v-model="templateParams['from_email']"
                :rules="rules['emailAddress']"
                placeholder="Email Address"
              ></v-text-field>
              <v-text-field
                v-model="templateParams['from_subject']"
                :rules="rules['subject']"
                placeholder="Subject"
              ></v-text-field>
              <v-textarea
                v-model="templateParams['message']"
                :rules="rules['message']"
                placeholder="Message"
              ></v-textarea>
            </v-card-text>
            <v-card-text class="pt-0">
              <v-btn
                block
                type="submit"
                size="large"
                rounded="sm"
                variant="flat"
                class="text-capitalize px-16"
                >Submit</v-btn
              >
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <div class="text-h2 font-weight-black mb-6">
          Excited about the project? <br />
          Please<span class="primary--text"> get in touch.</span>
        </div>
        <v-row class="mb-3">
          <v-col
            v-for="(info, i) in infoList"
            :key="i"
            cols="12"
            md="12"
            lg="6"
          >
            <v-list rounded="xl" class="elevation-1">
              <v-list-item>
                <template #prepend>
                  <v-avatar size="80" rounded="0">
                    <v-icon size="40" :icon="info['icon']"></v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title v-text="info['title']"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="info['content']"
                ></v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <!-- <div class="text-overline">{{ info.title }}</div>
            <div class="text-subtitle-1">
              <span v-if="i != 3">
                {{ info.content }}
              </span>
              <span v-else>
                <v-btn
                  class="mr-2"
                  v-for="(social, i) in info.content"
                  :key="i"
                  :href="social.link"
                  icon
                  outlined
                  large
                  target="_blank"
                >
                  <v-icon>
                    <font-awesome-icon :icon="social.icon"></font-awesome-icon>
                  </v-icon>
                </v-btn>
              </span>
            </div> -->
          </v-col>
        </v-row>
        <v-card>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7098031715627!2d85.33517031442436!3d27.69536273262684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ced66967%3A0x712d9cdbe5edab7e!2sApi%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1612344942698!5m2!1sen!2snp"
            frameborder="0"
            class="h-100 w-100"
            :class="isDark ? 'dark' : ''"
            :style="{
              border: 0,
              minHeight: '400px',
              filter: isDark ? 'grayscale(1) invert(1)' : '',
            }"
            aria-hidden="false"
            tabindex="0"
            allowfullscreen
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="snackbar['show']" theme="light">
    {{ snackbar["text"] }}
    <template v-slot:actions>
      <v-btn
        class="text-capitalize px-4"
        color="primary"
        variant="tonal"
        @click="snackbar['show'] = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
