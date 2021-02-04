<template>
  <div class="home-page">
    <div>
      <v-img
        eager
        src="https://geniuscript.com/serity-kit/wp-content/uploads/2020/12/banner.jpg"
      >
        <v-container>
          <v-overlay
            absolute
            color="rgba(0,0,0,1)"
            class="d-flex justify-start align-start"
          >
            <v-container>
              <v-row class="d-flex align-center">
                <v-col cols="12" md="6">
                  <div class="text-h2 font-weight-black">
                    A
                    <span
                      style="border-bottom:5px solid var(--v-primary-base);line-height:1.7em;"
                    >
                      Safe Home
                    </span>
                    For You and Your Family
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-overlay>
        </v-container>
      </v-img>
      <v-divider></v-divider>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" style="margin-top:-28px;">
          <v-img
            height="700"
            class="border"
            src="https://geniuscript.com/serity-kit/wp-content/uploads/2020/12/about-img.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <div
            class="text-overline mb-2 mt-16"
            style="font-size:1rem !important;"
          >
            About Us
          </div>
          <div class="text-h4 font-weight-bold" style="line-height:1.3em;">
            We Provide Service with<br />
            5 Years of Experience
          </div>
          <div class="d-flex my-10">
            <span class="primary" style="width:60px;height:5px;"></span>
            <span
              class="black"
              style="margin-left:5px;width:30px;height:5px;"
            ></span>
          </div>
          <div class="mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum libero
            aliquid iusto accusantium corporis distinctio, alias magni doloribus
            similique qui temporibus nemo nobis esse sequi eaque doloremque
            voluptates quae. Obcaecati esse dolores magnam optio molestias
            sapiente quia nam dicta consectetur!
          </div>
          <div class="mb-10">
            <ul>
              <li>
                <span>01.</span>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-wrap align-center">
            <span class="text-h5 font-weight-bold" style="line-height:1.2em;">
              For Emergency Fixing
              <br />
              or Appointment
            </span>
            <v-img
              src="https://geniuscript.com/serity-kit/wp-content/uploads/2020/12/sign.png"
            ></v-img>
          </div>
          <div class="mb-10 text-h4 font-weight-black">
            +977-01-4472774
          </div>
          <div>
            <v-btn link to="/about" color="primary" class="px-10 py-6"
              >More about</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Cattitle :first="'Blog'" />
        </v-col>
        <v-col v-for="i in 3" :key="i" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <!-- <nuxt-link > -->
            <v-card :ripple="false" class="rounded-0" link to="/" elevation="0">
              <v-img
                height="200"
                src="https://www.apitechnepal.com/wp-content/uploads/2020/10/security_system-min-1-scaled.jpg"
              ></v-img>
              <!-- </v-card>
              <v-card elevation="0"> -->
              <v-card-title class="px-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam, tempore.
              </v-card-title>
              <v-card-text class="px-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                nulla dignissimos adipisci itaque inventore aperiam, numquam
                reiciendis nemo modi facilis ut maxime ullam ducimus nihil,
                sequi perspiciatis cupiditate odit voluptatum.
              </v-card-text>
            </v-card>
            <!-- </nuxt-link> -->
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <ul>
            <li v-for="why in whies" :key="why.id">
              {{ why.title }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <!-- style="filter: invert(90%)" -->
          <v-card height="500" class="rounded-0 overflow-hidden">
            <!-- height="1000" -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7098031715627!2d85.33517031442436!3d27.69536273262684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999ced66967%3A0x712d9cdbe5edab7e!2sApi%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1612344942698!5m2!1sen!2snp"
              frameborder="0"
              style="border:0;width:100%;height:100%;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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
div.border {
  border-top: 15px solid var(--v-primary-base);
  border-right: 15px solid var(--v-primary-base);
  // border-bottom: 10px solid var(--v-primary-base);
}
div.v-overlay__content {
  width: 100%;
  height: 100%;
  div.container,
  div.row {
    width: 100%;
    height: 100%;
  }
}
</style>
