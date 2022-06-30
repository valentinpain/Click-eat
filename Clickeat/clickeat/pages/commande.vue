<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Résumé de votre commande</h2>
        <v-row>
          <v-col>
            <ul style="list-style: none">
              <li v-for="(article, index) in command.articles" :key="index" class="mt-5 text-center">
                <v-card>
                  <v-row>
                    <v-col>
                      <img :src="require('./../assets/Pictures/restaurant/McDonalds/Articles/' + article.imagePath)" alt="article_picture" />
                    </v-col>
                    <v-col>
                      <h2 class="font-weight-bold">{{ article.name }}</h2>
                    </v-col>
                    <v-col>
                        <p class="text-h4 orange--text font-weight-bold">{{ article.price }} €</p>
                    </v-col>
                    <v-col>
                      <v-btn @click="removeArticle(index)">
                        <v-icon color="red" large>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </li>
            </ul>

            <hr class="mt-10"/>

            <div v-if="command.articles.length != 0">
              <v-row>
                <v-col cols="9">
                  <p class="font-italic font-weight-bold orange--text text-h3">TOTAL : {{ totalCart() }}€</p>
                </v-col>
                <v-col>
                  <v-btn class="green--text font-weight-bold text-h5" @click="createDelivery">
                    VALIDER MA COMMANDE
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <p class="font-italic text-h5">Votre panier est vide pour le moment...</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandPage",
  components: {
  },
  data() {
    return {
      command: {
        user: {},
        articles: [],
        total: 0,
        validated: false
      },
      delivery: {}
    }
  },
  mounted() {
    this.command.articles = this.$store.getters.getCart
    this.command.total = this.totalCart()
  },
  methods: {
    removeArticle(index) {
      this.command.articles.splice(index, 1)
      this.$store.commit("removeArticle", index)
      this.$axios.put('http://localhost:8001/commands/' + this.command._id, this.command)
    },

    createDelivery(){
      this.delivery = {
        userId: this.$store.getters.getUserId,
        hourStart: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hourEnd: new Date(new Date().getTime() + 20*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        command: this.command,
        status: "Nouvelle livraison",
        address: "test"
      }

      this.$axios.post('http://localhost:8002/deliveries/', this.delivery)

      window.location.href = "http://localhost:3000/livraison"
    },
    
    totalCart(){
        let sum = 0;
        
        this.command.articles.forEach(article => {
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