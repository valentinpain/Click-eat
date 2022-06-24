<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Création d'un nouvel article</h2>
<v-row class="mt-10">
            <v-col cols="3"></v-col>
            <v-col cols="5">
                <v-card class="d-flex flex-column justify-center align-center">
                  <v-col>
                    <v-row>
                      <v-col>
                          <v-text-field v-model="newArticle.name" label="Nom" required/>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                            <v-text-field v-model="newArticle.image" label="image" required/>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-text-field v-model="newArticle.price" label="Prix" required/>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                            <v-select v-model="newArticle.type" :items="types" label="Outlined style" outlined></v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col></v-col>
                      <v-col>
                        <v-btn @click="createArticle" class="green white--text text-h6">Envoyer</v-btn>
                      </v-col>
                    </v-row>

                  </v-col>
                  <p class="mt-5 ml-5 pink--text text-h6 font-weight-bold">{{ formResult }}</p>
                </v-card>
            </v-col>
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
      restaurantInfos: null,
      newArticle: {
        name: null,
        type: null,
        brand: this.$route.params.brand,
        menuId: 0,
        price: null,
        image: null,
      },
      types: ['plat', 'accompagnement','sauce', 'dessert'],
      formResult: ""
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/articles/restaurant/' + this.$route.params.brand).then((response) => {
      this.restaurantInfos = response.data[0]
    })
  },
  methods: {
    createArticle(){
      this.$axios.post('http://localhost:8000/articles/available/create/', this.newArticle).then(() => {
        this.formResult = "Création réussie !"
      })
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