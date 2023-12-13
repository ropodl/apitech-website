<script setup>
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/vue";
import { useTheme } from "vuetify";
const theme = useTheme();

useHead({
  title: "API Technology - Contact Us for Services in Web, Mobile & More",
  meta: [
    {
      name: "description",
      content:
        "API Technology provides business to business services in Web, Mobile, Networking, ICT and Electronics Hardware areas.",
    },
  ],
});

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
    icon: "mdi:map-marker",
    title: "Contact Address",
    content: "Mid Baneshwor",
  },
  {
    icon: "mdi:email",
    title: "General Inquiry",
    content: "info.apitech@gmail.com",
  },
  {
    icon: "mdi:phone",
    title: "Phone Number",
    content: "01-4472774 ",
  },
];
</script>
<template>
  <LazyLayoutPageSection title="Contact Us" />
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="mt-lg-n16">
        <v-form fast-fail ref="contactForm" @submit.prevent="submitForm">
          <v-card class="pt-4">
            <v-card-title class="mb-3 text-h5 font-weight-bold">
              Send a message
            </v-card-title>
            <v-card-text class="pb-0">
              <v-text-field
                flat
                v-model="templateParams['from_name']"
                :rules="rules['fullName']"
                variant="solo-filled"
                placeholder="Full Name"
              ></v-text-field>
              <v-text-field
                flat
                v-model="templateParams['from_mobile_number']"
                :rules="rules['phoneNumber']"
                variant="solo-filled"
                placeholder="Phone Number"
              ></v-text-field>
              <v-text-field
                flat
                v-model="templateParams['from_email']"
                :rules="rules['emailAddress']"
                variant="solo-filled"
                placeholder="Email Address"
              ></v-text-field>
              <v-text-field
                flat
                v-model="templateParams['from_subject']"
                :rules="rules['subject']"
                variant="solo-filled"
                placeholder="Subject"
              ></v-text-field>
              <v-textarea
                flat
                v-model="templateParams['message']"
                :rules="rules['message']"
                variant="solo-filled"
                placeholder="Message"
              ></v-textarea>
            </v-card-text>
            <v-btn
              block
              color="primary"
              height="50"
              type="submit"
              rounded="0"
              variant="flat"
              class="text-capitalize"
            >
              Submit
            </v-btn>
          </v-card>
        </v-form>
      </v-col>
      <v-col cols="12" md="8">
        <div class="text-h2 font-weight-black mb-10">
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
            <v-list flat rounded="lg">
              <v-list-item>
                <template #prepend>
                  <v-avatar size="60" rounded="0">
                    <v-icon color="primary" size="40">
                      <Icon :icon="info['icon']" />
                    </v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title v-text="info['title']"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="info['content']"
                ></v-list-item-subtitle>
              </v-list-item>
            </v-list>
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
