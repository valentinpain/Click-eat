<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Historique de vos livraisons</h2>
        <v-row>
          <v-col>
            <ul class="mt-5" style="list-style: none">
              <li v-for="(delivery, index) in deliveries" :key="index">
                <v-row>
                    <v-col>
                    </v-col>
                    <v-col cols="9" class="mt-10 mb-5">
                        <v-card class="pl-5 pb-3 pt-5">
                        <h2 class="font-weight-bold text-center mb-10">Livraison du {{ new Date().toLocaleDateString("fr-FR", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</h2>
                        <p class="text-h5">Heure de commande : {{ delivery.hourStart }}</p>
                        <p class="text-h5">Heure d'arrivée : {{ delivery.hourEnd }}</p>
                        <p class="text-h5">Prix total : {{ delivery.command.total }}€</p>
                        <hr />
                        <p class="text-h5 pink--text font-weight-bold">Statut : {{ delivery.status }}</p>
                        </v-card>
                    </v-col>
                    <v-col>
                    </v-col>
                </v-row>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryHistoryPage",
  components: {
  },
  data() {
    return {
      deliveries: []
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8002/deliveries/user/' + this.$store.getters.getUserId).then((response) => {
      this.deliveries = response.data
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