<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Informations de l'article</h2>
        <v-row v-if="articleInfos != null" class="mt-10">
            <v-col cols="3"></v-col>
            <v-col cols="5">
                <v-card class="d-flex flex-column justify-center align-center">
                  <v-col>
                    <v-row>
                      <v-col>
                        <h3 class="text-h4 font-weight-bold">{{ articleInfos.name }}</h3>
                      </v-col>
                      <v-col>
                        <form class="d-flex text-h6">
                            <v-text-field v-model="name" label="Nom" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateArticle('name')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <img :src="require('./../../../assets/Pictures/restaurant/' + $route.params.brand + '/Articles/' + articleInfos.imagePath)" alt="article_picture" />
                      </v-col>
                      <v-col>
                        <form class="d-flex text-h6">
                            <v-text-field v-model="image" label="image" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateArticle('image')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <p class="text-h5">Prix : {{ articleInfos.price }}€</p>
                      </v-col>
                      <v-col>
                        <form class="d-flex text-h6">
                            <v-text-field v-model="price" label="Prix" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateArticle('price')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <p class="text-h5">Type d'article : {{ articleInfos.type }}</p>
                      </v-col>
                      <v-col>
                        <form class="d-flex text-h6">
                            <v-select v-model="type" :items="types" label="Outlined style" outlined></v-select>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateArticle('type')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                      </v-col>
                    </v-row>

                  </v-col>
                  <p class="mt-5 ml-5 pink--text text-h6">{{ formResult }}</p>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
  components: {
  },
  data() {
    return {
        articleInfos: null,
        name: null,
        image: null,
        price: null,
        type: null,
        menu: null,
        formResult: "",
        types: ['plat', 'accompagnement','sauce', 'dessert']
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/articles/available/' + this.$route.params.brand + '/' + this.$route.params.id).then((response) => {
        this.articleInfos = response.data[0]
    })
  },
  methods: {
    updateArticle(field){
      switch(field){
        case "name":
          this.articleInfos.name = this.name
          break;
        case "image":
          this.articleInfos.image = this.image
          break;
        case "price":
          this.articleInfos.price = this.price
          break;
        case "type":
          this.articleInfos.type = this.type
          break;
        case "menu":
          this.articleInfos.menu = this.menu
          break;
      }

      this.$axios.put('http://localhost:8000/articles/available/update/' + this.articleInfos._id, this.articleInfos).then(() => {
        this.formResult = "Modification réussie !"
      })
    }
  },
}
</script>

<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-image: url('./../../../assets/Background/bg.svg');
    background-repeat: repeat;
}
</style>