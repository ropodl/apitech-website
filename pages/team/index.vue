<template>
  <div class="team">
    <FramePagesection
      :imageSrc="
        'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      "
      :title="'Our Team'"
    />
    <v-container class="pt-0 mt-n16">
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-0">
            <div class="card-top-border"></div>
            <div class="card-bottom-border"></div>
            <v-container class="py-10">
              <v-row>
                <v-col cols="12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit mollitia tempore illo consequatur, ad nihil veniam,
                  inventore enim impedit iste ipsa eius provident expedita?
                  Facere, libero esse quae quam incidunt nam obcaecati
                  temporibus deserunt atque illo ad dolor ullam magni velit?
                  Nesciunt laborum itaque reiciendis, veritatis fugit deserunt
                  provident at officiis accusamus earum velit ut, tempora illum
                  explicabo. Ullam sapiente eaque aspernatur dolores corrupti
                  architecto, dolorem quidem magni a laborum quisquam tenetur
                  beatae ea magnam assumenda cupiditate adipisci sequi explicabo
                  temporibus excepturi accusamus dicta. Harum dicta recusandae
                  officia alias iusto, ex tempora doloribus delectus veritatis
                  molestias in aperiam quibusdam eius rerum maiores at dolor
                  illo facilis ipsa! Maxime, commodi aut quia animi deserunt
                  velit voluptatem illum accusamus, provident nam culpa harum.
                  Ex, repellat, eligendi nobis ipsa quibusdam deserunt, error
                  aperiam odit dolorem accusantium itaque eaque consectetur sint
                  commodi facere saepe porro tenetur. Delectus, ex dolorum
                  dignissimos iure reprehenderit blanditiis tenetur fugiat
                  debitis provident eius nisi inventore quia necessitatibus
                  animi rerum asperiores incidunt alias molestiae ab quos
                  recusandae nihil? Distinctio modi eum impedit eveniet
                  architecto, fugiat optio dicta veritatis aliquid dolor earum
                  ex temporibus ea deserunt quibusdam odit pariatur culpa iure
                  reprehenderit assumenda dignissimos, vitae, est qui. Molestias
                  explicabo quibusdam quas.
                </v-col>
                <v-col cols="12">
                  <v-img
                    eager
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  ></v-img>
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
  transition: "slide-bottom"
};
</script>

<style></style>
