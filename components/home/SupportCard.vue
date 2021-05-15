<template>
  <v-row class="mb-10">
    <v-col
      cols="12"
      xs="6"
      sm="6"
      md="4"
      v-for="(card, i) in supportCard"
      :key="i"
      :class="i == 3 ? 'hidden-md-and-up' : ''"
    >
      <v-card
        height="150"
        class="support-card d-flex align-center justify-center rounded-0"
        :class="i == 1 ? 'primary' : i == 3 ? 'primary' : ''"
      >
        <v-icon
          class="bg-icon"
          :class="i == 1 ? 'white--text' : i == 3 ? 'white--text' : ''"
          style=""
        >
          {{ card.bgicon }}
        </v-icon>
        <v-list color="transparent">
          <v-list-item class="white--text">
            <v-list-item-avatar size="64" class="rounded-0">
              <v-icon
                class="card-icon"
                :class="i == 1 ? 'white--text' : i == 3 ? 'white--text' : ''"
                >{{ card.icon }}</v-icon
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="text-h5 font-weight-bold"
                :class="i == 1 ? 'white--text' : i == 3 ? 'white--text' : ''"
              >
                {{ card.title }}
              </v-list-item-title>
              <v-list-item-subtitle
                class="text-h5 font-weight-light"
                :class="i == 1 ? 'white--text' : i == 3 ? 'white--text' : ''"
              >
                {{ card.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      supportCard: [
        {
          icon: "fas fa-clock",
          bgicon: "fal fa-clock",
          title: "Support Hours",
          content: "Sun-Fri 10am-6pm"
        },
        {
          icon: "fas fa-user-headset",
          bgicon: "fal fa-user-headset",
          title: "Call Us",
          content: "01-4472774"
        },
        {
          icon: "fas fa-map-marker-alt",
          bgicon: "fal fa-map-marker-alt",
          title: "Mid Baneshwor",
          content: "Kathmandu, Nepal"
        },
        {
          icon: "fas fa-envelope",
          bgicon: "fal fa-envelope",
          title: "Email Address",
          content: "sarox14@gmail.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
div.v-card.support-card {
  overflow: hidden;
  i.v-icon.card-icon {
    font-size: 64px;
  }
  i.v-icon.bg-icon {
    position: absolute;
    bottom: -25px;
    right: -20px;
    font-size: 110px;
  }
}
</style>
