<template>
  <div class="Background">
    <div>
      <h1 class="display-1" justify="center" align="center">Nom restau</h1>
      <h2 justify="center" align="center">Produits disponibles</h2>
      <h3> {{restaurants.length}}</h3>
      <v-container class="grey lighten-5 mb-6">
        <v-row :align="align" no-gutters style="height: 60px">
          <v-col
            v-for="(restau, index) in restaurants"
            :key="index"
            mar
            class="mr-5"
          >
            <v-card class="pa-2 rounded-lg" outlined tile>
              <v-row>
                <v-col>
                  <img
                    :src="restau.image"
                    alt="photo restaurant"
                    height="60px"
                  />
                </v-col>
                <v-col>
                  <p padding-top:20px>{{ restau.contenu }}</p>
                </v-col>
              </v-row>
              <!-- <p align='center'>{{produit.nom}}</p>
              <img :src="produit.image" alt="photo restaurant" height="40%" /> -->
              <p padding-top:20px>{{ restau.nom }}</p>
              <v-row justify="space-between">
                <v-col>
                  <v-btn color="#53DD6C" to="" nuxt>Commander</v-btn>
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
import Produit from '@/components/Produit.vue'

export default {
  components: {
    Produit,
  },
  data() {
    return {
      restaurants: [
        {
          nom: 'Menu1',
          prix: 3.0,
          contenu: 'Contenu1',
          image: require('./../assets/Pictures/restaurant/Mcdo/Menu/Menu1.svg'),
        },
        {
          nom: 'Menu2',
          prix: 3.0,
          contenu: 'Contenu2',
          image: require('./../assets/Pictures/restaurant/Mcdo/Menu/Menu2.svg'),
        },
        {
          nom: 'Menu3',
          prix: 3.0,
          contenu: 'Contenu3',
          image: require('./../assets/Pictures/restaurant/Mcdo/Menu/Menu1.svg'),
        },
        {
          nom: 'Menu4',
          prix: 3.0,
          contenu: 'Contenu4',
          image: require('./../assets/Pictures/restaurant/Mcdo/Menu/Menu1.svg'),
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