<template>
  <div class="clients">
    <v-row>
      <v-col v-for="(client, i) in clients" :key="i" cols="12" md="2">
        <v-img eager contain height="128" :src="client.src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          name: "Nepal Telecom",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/ntc.jpg"
        },
        {
          name: "Nepal Police",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/nepalpolice.jpg"
        },
        {
          name: "Nepal Oil Limited",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/NEPALOIL.jpg"
        },
        {
          name: "Janaki Tech",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/janaki.jpg"
        },
        {
          name: "Mix ERP",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/mixerp.jpg"
        },
        {
          name: "KIEC",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2019/10/kiec1.jpg"
        },
        {
          name: "The Hut",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2020/09/logo_001.jpg"
        },
        {
          name: "Forum for Women",
          src:
            "https://i0.wp.com/apitechnepal.com/wp-content/uploads/2020/09/fwld-logo.png"
        }
      ]
    };
  }
};
</script>

<style></style>
