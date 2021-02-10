<template>
  <v-container>
    <v-row class="py-10 d-flex">
      <v-col cols="12" md="6">
        <Cattitle class="mb-6" :first="'Solutions'" :second="'we provide'" />
        <div
          class="text-justify mb-4"
          style="font-size: 1.25rem !important;font-weight: 300 !important;"
        >
          Serity Solutions was established in 2019 with the aim of providing
          technical protection services. We offer state-of-the-art technical
          protection system solutions. Many years of experience and customer
          satisfaction are proof of our success. We have a MIA license to
          perform technical protection activities.
        </div>
        <div class="mb-4 text-h5 font-weight-medium">
          We are engaged in the following activities:
        </div>
        <ul class="activities">
          <li v-for="(activity, i) in activities" :key="i">
            <v-icon color="primary">{{ activity.icon }}</v-icon>
            <span class="text-subtitle-1 font-weight-medium">{{
              activity.title
            }}</span>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <Cattitle class="mb-6" :first="'Our'" :second="'Vision'" />
        <div
          class="text-justify"
          style="font-size: 1.25rem !important;font-weight: 300 !important;"
        >
          <p>
            Serity Solutions, in its many years of work, pays special attention
            to professionalism of business, quality and reliability of equipment
            with the purpose of greater satisfaction of clients in designing,
            installing and servicing the system of technical protection of
            persons and property.
          </p>
          <p>
            The team of professional and competent engineers - designers and
            technicians - servicers guarantees professionally done work and
            customer satisfaction. Any constructive customer feedback is
            welcomed, improving the level of service and job execution.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          icon: "fal fa-cctv",
          title: "Video Surveillance"
        },
        {
          icon: "fal fa-sensor-fire",
          title: "Fire Alarm"
        },
        {
          icon: "fal fa-walkie-talkie",
          title: "Intercom"
        },
        {
          icon: "mdi-access-point-network",
          title: "Access Control"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
ul.activities {
  list-style: none;
  padding-left: 0px;
  columns: 2;
  li {
    margin-bottom: 20px;
    i.v-icon {
      font-size: 40px;
      margin-right: 10px;
    }
  }
}
</style>
