<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Création d'un nouveau menu</h2>
        <v-row class="mt-10">
          <v-col cols="1"></v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center pb-10">
                  <form>
                    <v-text-field v-model="newMenu.name" label="Nom" required/>
                  </form>

                <v-row class="ml-5">
                  <v-col></v-col>
                  <v-col cols="12">
                    <ul v-for="(article, index) in newMenu.articles" :key="index" style="list-style: none">
                      <li>
                        <v-card>
                          <p class="text-h6 text-center">
                            {{ article.name }}
                          </p>
                        </v-card>
                        </li>
                    </ul>
                  </v-col>
                  <v-col></v-col>
                </v-row>

                <v-row>
                  <p class="text-h5 orange--text font-weight-bold">Prix total : {{ sumMenu().toFixed(2) }}€</p>
                </v-row>

                  <v-row>
                      <v-col></v-col>
                      <v-col>
                        <v-btn @click="createMenu" class="green white--text text-h6">Envoyer</v-btn>
                      </v-col>
                    </v-row>
                  <p class="mt-5 ml-5 pink--text text-h6">{{ formResult }}</p>
                </v-card>
            </v-col>
            <v-col></v-col>
            <v-col cols="3">
              <ul>
                <li class="mb-5" v-for="(article, index) in articles" :key="index" style="list-style: none">
                <v-hover v-slot="{ hover }">
                  <v-card @click="addToMenu(article)" :elevation="hover ? 5 : 2" style="height: 50px; cursor: pointer">
                    <v-col>
                      <p class="text-h6 font-weight-bold ml-2">{{ article.name }}</p>
                    </v-col>
                  </v-card>
                </v-hover>
                </li>
              </ul>
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCreationPage",
  components: {
  },
  data() {
    return {
      articles : null,
      newMenu : {
        name: null,
        articles: [],
        price: null
      },
      formResult: ""
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/articles/available/' + this.$route.params.brand).then((response) => {
      this.articles = response.data
    })
  },
  methods: {
    createMenu(){
      this.$axios.post('http://localhost:8000/articles/menu/create', this.newMenu).then(() => {
        this.formResult = "Création réussie !"
      })
    },

    addToMenu(article){
      this.newMenu.articles.push(article)
    },

    sumMenu(){
      let sum = 0;

      this.newMenu.articles.forEach(article => {
        sum += article.price
      });

      this.newMenu.price = sum.toFixed(2)

      return sum;
    }
  },
}
</script>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-image: url('./../../assets/Background/bg.svg');
    background-repeat: repeat;
}
</style>