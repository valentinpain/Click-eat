<template>
  <div class="Background">
    <div>
      <h1 class="display-1" justify="center">Commandez!</h1>
      <h2 justify="center">Produits disponibles</h2>
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters style="height: 60px">
          <v-col
            v-for="(restaurant, index) in restaurants" :key="index" class="mr-5">
            <v-card class="pa-2 rounded-lg" outlined tile >
              <v-row>
                <v-col>
                  <img :src="restaurant.image" alt="restaurant_picture" style="width: 80%;"/>
                </v-col>
                <v-col>
                </v-col>
              </v-row>
              <p>{{ produit.nom }}</p>
              <v-row justify="space-between">
                <v-col >
                  <v-btn color="#53DD6C" to="/restaurant" nuxt>Commander</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.Background {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/Background/bg.svg');
  background-repeat: repeat;
}

</style>