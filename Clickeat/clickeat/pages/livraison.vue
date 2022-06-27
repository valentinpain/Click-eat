<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Résumé de votre livraison</h2>
        <v-row>
          <v-col>
          </v-col>
          <v-col cols="9" class="mt-10">
            <v-card class="pl-5 pb-3 pt-5">
              <h2 class="font-weight-bold text-center mb-10">Livraison du {{ new Date().toLocaleDateString("fr-FR", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</h2>
              <p class="text-h5">Heure de commande : </p>
              <p class="text-h5">Heure d'arrivée : </p>
              <p class="text-h5">Prix total : {{ sum }}€</p>
              <hr />
              <p class="text-h5">Statut : {{ delivery.status }}</p>
              <p v-if="delivery.status == 'new'" class="text-h6 pink--text">Votre livraison est en attente d'un livreur (nous gardons le meilleur pour vous)</p>
            </v-card>
            <v-btn class="mt-5 pink--text font-weight-bold" to="/">Revenir à l'accueil</v-btn>
          </v-col>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryPage",
  data() {
    return {
      delivery: {},
      sum: null
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8002/deliveries/new/62b29c49b0b82c062f81345d').then((response) => {
      this.delivery = response.data[0]
      this.sum = this.sumDelivery()
    })
  },
  methods: {
    sumDelivery(){
      let sum = 0;

      this.delivery.command.articles.forEach(article => {
        sum += article.price
      });

      return sum;
    }
  },
}
</script>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-image: url('./../assets/Background/bg.svg');
    background-repeat: repeat;
}
</style>