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
              <h2 class="text-h4 font-weight-bold text-center mb-10">Livraison du {{ new Date().toLocaleDateString("fr-FR", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</h2>
              <p class="text-h5 font-weight-bol blue--text">Heure de commande : {{ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</p>
              <p class="text-h5 font-weight-bol blue--text">Heure d'arrivée : {{new Date(new Date().getTime() + 20*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</p>
              <p v-if="delivery != null" class="text-h5 font-weight-bol blue--text">Prix total : {{ delivery.command.total }}€</p>
              <hr />
              <p class="text-h5 font-weight-bol orange--text">Statut : En attente de livreur</p>
            </v-card>
            <v-btn class="mt-5 text-h6 white--text pink font-weight-bold" to="/">Revenir à l'accueil</v-btn>
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
      delivery: null,
      sum: null
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8002/deliveries/new/' + this.$store.getters.getUserId).then((response) => {
      this.delivery = response.data[0]
    })

  },
  methods: {
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