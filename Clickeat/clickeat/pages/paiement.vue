<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Paiement</h2>
        <v-row>
          <v-col>
            <p class="text-h4 font-weight-bold">{{ totalCart() }}€</p>
            <v-btn class="text-h5" @click="createDelivery">Valider</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaiementPage",
  components: {
  },
  data() {
    return {
      command: null,
      articles: []
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8001/commands/user/62b29c49b0b82c062f81345d').then((response) => {
        this.command = response.data[0]
        this.articles = response.data[0].articles
    })
  },
  methods: {
    createDelivery(){
      this.$axios.post('http://localhost:8002/deliveries/create', {command: this.command, status: "idle", address: "2 rue des dev"})
      window.location.href = "http://localhost:3000/livraison"
    },
    totalCart(){
        let sum = 0;
        
        this.articles.forEach(article => {
            sum += article.price; 
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