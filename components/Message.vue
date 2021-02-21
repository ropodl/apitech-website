<template>
  <div class="message">
    <v-row no-gutters class="d-flex my-16">
      <v-spacer></v-spacer>
      <v-col cols="12" md="3" class="mr-0">
        <v-hover v-slot="{ hover }">
          <v-card
            elevation="0"
            class="rounded-0"
            max-width="300"
            height="300"
            style="position:sticky;top:90px !important;"
          >
            <v-img
              class="d-flex align-end"
              height="100%"
              src="https://i0.wp.com/www.apitechnepal.com/wp-content/uploads/2020/10/security_system-min-1-scaled.jpg"
            >
              <div class="overlay" style="background-color:rgba(0,0,0,0.5)">
                <v-card-title class="white--text"
                  >Pratirodh Subedi
                </v-card-title>
                <v-card-subtitle class="white--text">CEO</v-card-subtitle>
                <div v-if="hover">
                  <v-divider></v-divider>
                  <v-card-subtitle>
                    <ul class="">
                      <li>
                        <v-icon>fab fa-facebook</v-icon>
                      </li>
                      if ok
                    </ul>
                  </v-card-subtitle>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" class="pl-0">
        <v-card elevation="0" class="rounded-0">
          <v-card-title>
            <Cattitle :first="'Message from'" :second="'CEO'" />
          </v-card-title>
          <v-card-text class="pt-0 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aspernatur ea laudantium suscipit veritatis at ad libero aperiam
            debitis, optio maxime? Magnam consequatur eius enim, illum
            aspernatur tenetur officiis cupiditate ullam sunt adipisci quod
            numquam quaerat voluptatum, minus expedita fuga. Saepe eum quisquam,
            quidem a expedita ad odio iste natus ut id facilis, molestiae
            impedit officiis voluptatem? Sapiente, sunt, blanditiis rerum minima
            beatae praesentium non quibusdam consectetur numquam maiores
            suscipit repellat! Minima eveniet velit nobis quod! Labore et quos
            fuga unde, natus accusamus laudantium aspernatur corrupti
            repellendus nesciunt illo quibusdam sed eligendi placeat mollitia
            iure eum, repudiandae quidem veniam ex vero officia. Ex iste
            necessitatibus dicta vel fugiat facere mollitia in repellendus
            cupiditate consectetur dolores quis nostrum eos quas sit magnam hic
            praesentium ad tempore, quibusdam pariatur similique veniam
            dignissimos. Enim delectus veritatis praesentium sunt! Doloremque
            quaerat ad labore eligendi, sunt saepe, ipsum voluptate recusandae
            tempore reprehenderit nisi. Ullam nesciunt, mollitia cumque nemo
            vitae quaerat voluptate ratione rem laboriosam voluptatum
            repellendus totam repudiandae sit facilis illum maxime quod
            necessitatibus sequi dolore illo minus. Adipisci odio exercitationem
            asperiores incidunt cupiditate doloremque voluptatem consectetur
            aliquam assumenda laudantium, cum repudiandae distinctio, nostrum
            minus nihil. Possimus eos repellendus atque fugit assumenda enim
            officiis corporis?
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
div.overlay {
  height: auto;
  transition: all 10s linear;
}
</style>
