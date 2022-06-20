<template>
  <div class="Background">
    <div>
      <h1 class="display-1" justify="center">Commandez!</h1>
      <h2 justify="center">Produits disponibles</h2>
      <v-container class="grey lighten-5 mb-6">
        <v-row :align="align" no-gutters style="height: 60px">
          <v-col
            v-for="(produit, index) in produits"
            :key="index"
            mar
            class="mr-5"
          >
            <v-card class="pa-2 rounded-lg" outlined tile >
              <v-row>
                <v-col>
                  <img
                    :src="produit.image"
                    alt="photo restaurant"
                    height="60px"
                  />
                </v-col>
                <v-col>
                  <p>{{ produit.nom }}</p>
                </v-col>
              </v-row>
              <!-- <p align='center'>{{produit.nom}}</p>
              <img :src="produit.image" alt="photo restaurant" height="40%" /> -->
              <p padding-top:20px>{{ produit.Description }}</p>
              <v-row justify="space-between">
                <v-col >
                  <v-btn color="#53DD6C" to="/restaurant" nuxt>Commander</v-btn>
                </v-col>
                <v-col align="right" style="right"> <p>{{produit.note}}/5</p> </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Produit from '@/components/Produit.vue'

export default {
  components: {
    Produit,
  },
  data() {
    return {
      produits: [
        {
          nom: 'PizzaHut',
          prix: 3.0,
          Description: 'Pizza',
          image: require('./../assets/Pictures/restaurant/PizzaHut/pizzahut.svg'),
          note:4.1
        },
        {
          nom: 'Mcdo',
          prix: 3.0,
          Description: 'Américain',
          image: require('./../assets/Pictures/restaurant/Mcdo/mcdo.svg'),
          note:3.8
        },
        {
          nom: 'Subway',
          prix: 3.0,
          Description: 'Sandwichs',
          image: require('./../assets/Pictures/restaurant/Subway/subway.svg'),
          note:4.5
        },
      ],
      alignments: ['center'],
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
