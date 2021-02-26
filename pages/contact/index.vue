<template>
  <div class="contact">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      "
      :title="'Contact Us'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <v-row class="pt-10">
                <v-col cols="12" md="6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7098031715627!2d85.33517031442436!3d27.69536273262684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ced66967%3A0x712d9cdbe5edab7e!2sApi%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1612344942698!5m2!1sen!2snp"
                    frameborder="0"
                    style="border:0;width:100%;min-height:400px;height:100%;"
                    aria-hidden="false"
                    tabindex="0"
                    allowfullscreen
                  ></iframe>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="text-h2 font-weight-black mb-6">
                    Excited about the project? <br />
                    Please <span class="primary--text">get in touch.</span>
                  </div>
                  <v-row>
                    <v-col
                      class=""
                      v-for="(info, i) in infoList"
                      :key="i"
                      cols="12"
                      md="6"
                    >
                      <div class="text-overline">{{ info.title }}</div>
                      <div class="text-subtitle-1">
                        <span v-if="i != 2">
                          {{ info.content }}
                        </span>
                        <span v-else>
                          <v-btn
                            class="mr-2"
                            v-for="(social, i) in info.content"
                            :key="i"
                            icon
                            outlined
                            large
                          >
                            <v-icon small>
                              {{ social.icon }}
                            </v-icon>
                          </v-btn>
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                  <ContactContactform />
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
      infoList: [
        {
          title: "Contact Address",
          content: "Mid Baneshwor"
        },
        {
          title: "General Inquiry",
          content: "info@apitechnepal.com"
        },
        {
          title: "Social Media",
          content: [
            {
              title: "Facebook",
              link: "https://www.facebook.com/apitechnepal",
              icon: "fab fa-facebook"
            },
            {
              title: "Twitter",
              link: "https://www.facebook.com/apitechnepal",
              icon: "fab fa-twitter"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
