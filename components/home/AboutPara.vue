<template>
  <v-container>
    <v-row class="py-10 d-flex">
      <v-col cols="12" md="6">
        <Cattitle class="mb-6" :first="'Solutions'" :second="'we provide'" />
        <div
          class="mb-4"
          style="font-size: 1.25rem !important;font-weight: 300 !important;"
        >
          Api Technology was established in 2019 with the aim of providing
          technical protection services. We offer state-of-the-art technical
          protection system solutions. Many years of experience and customer
          satisfaction are proof of our success. We have a MIA license to
          perform technical protection activities.
        </div>
        <div class="mb-6 text-h5 font-weight-medium">
          We are engaged in the following activities:
        </div>
        <ul class="activities">
          <li class="d-flex" v-for="(activity, i) in activities" :key="i">
            <span
              style="display:flex;justify-content:center;width:50px;height:100%;"
            >
              <v-icon size="32" color="primary">{{ activity.icon }}</v-icon>
            </span>
            <span class="text-subtitle-1 font-weight-medium">{{
              activity.title
            }}</span>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <Cattitle class="mb-6" :first="'Our'" :second="'Vision'" />
        <div style="font-size: 1.25rem !important;font-weight: 300 !important;">
          <p>
            Api Technologies, in its many years of work, pays special attention
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
          title: "IP/HD/Analog/Wireless CCTV"
        },
        {
          icon: "fal fa-sensor-fire",
          title: "Fire resistance system"
        },
        {
          icon: "fal fa-walkie-talkie",
          title: "Intercom/Radio Systems"
        },
        {
          icon: "fal fa-network-wired",
          title: "Optical Fiber/Wired/Wireless Networking"
        },
        {
          icon: "fal fa-location-arrow",
          title: "GPS Tracking"
        },
        {
          icon: "fal fa-fingerprint",
          title: "Time Attendance, Access Control"
        },
        {
          icon: "fal fa-user-robot",
          title: "Internet of Things(IOT) & Automation"
        },
        {
          icon: "fal fa-phone-office",
          title: "EPABX/KTS & Phones"
        },
        {
          icon: "fal fa-mobile",
          title: "Web and Android Apps Design"
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
