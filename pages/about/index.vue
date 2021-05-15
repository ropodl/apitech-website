<template>
  <div class="about">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      "
      :title="'About Us'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card outlined elevation="0" class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container>
              <v-row class="pt-6">
                <v-col cols="12" md="6">
                  <v-img
                    eager
                    class="mx-auto d-flex mb-4"
                    width="350"
                    :src="require('~/assets/image/apitech.webp')"
                    alt="api technology logo"
                  ></v-img>
                  <div
                    style="font-size: 1.25rem !important;font-weight: 300 !important;"
                  >
                    Api Technology offer you a business to business service in
                    the Web, Android, Networking, ICT and Electronics Hardware
                    platform. We are a dominant technology provider of Internet
                    Of Things, Electronics & Communication, and Security
                    Technologies for critical and high-reliability applications.
                    Markets span government, non-government, medical/industrial
                    and communica-tions/consumer.
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div
                    class="text-h2 font-weight-black text-right text-uppercase"
                  >
                    <span class="primary--text">Support services </span>
                    that no other
                    <span class="primary--text">I.T. or Electronics</span> has
                    been able to <span class="primary--text">provide</span>.
                  </div>
                </v-col>
              </v-row>
              <AboutBanner />
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
