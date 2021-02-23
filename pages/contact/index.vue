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
              <ContactContactform />
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <iframe
      class="mt-16 mb-4"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7098031715627!2d85.33517031442436!3d27.69536273262684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ced66967%3A0x712d9cdbe5edab7e!2sApi%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1612344942698!5m2!1sen!2snp"
      frameborder="0"
      style="border:0;width:100%;height:450px;"
      aria-hidden="false"
      tabindex="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
