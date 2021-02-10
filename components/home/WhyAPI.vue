<template>
  <div class="primary">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6">
          <ul class="whylist white--text">
            <li v-for="why in whies" :key="why.id">
              {{ why.title }}
            </li>
          </ul>
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="12" md="6">
          <div class="text-h3 font-weight-black white--text">
            Why
            <span class="font-weight-light">API Technology?</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whies: [
        {
          id: "1",
          title: "Nepal's proud partner of Google Developer Group"
        },
        {
          id: "2",
          title: "Fastest growing IT Firm"
        },
        {
          id: "3",
          title:
            "Client such as: Nepal Police (optical fiber networking and security), Nepal Telecom ERD, C.T.E.V.T (TITI), District Development Committee Nuwakot, ICHM Kathmandu, Suresh Oil Distributers Birjung etc."
        },
        {
          id: "4",
          title: "Customization and configurable(dynamic)"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
ul.whylist {
  list-style: none;
  li {
    font-size: 1.4em;
    margin-bottom: 0.5em;
  }
}
</style>
