<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Résumé de votre commande</h2>
        <v-row>
          <v-col>
            <ul style="list-style: none">
              <li v-for="(article, index) in articles" :key="index" class="mt-5 text-center">
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

            <div v-if="articles.length != 0">
              <v-row>
                <v-col cols="9">
                  <p class="font-italic font-weight-bold orange--text text-h3">TOTAL : {{ totalCart() }}€</p>
                </v-col>
                <v-col>
                  <v-btn class="green--text font-weight-bold text-h5" to="/paiement">
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
    removeArticle(index) {
      this.command.articles.splice(index, 1)
      this.$store.getters.getCart.splice(index, 1)
      this.articles.splice(index, 1)
      this.$axios.put('http://localhost:8001/commands/update/' + this.command._id, this.command)
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