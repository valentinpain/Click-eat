<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Informations de l'article</h2>
        <v-row v-if="articleInfos != null && menusInfos != null" class="mt-10">
            <v-col></v-col>
            <v-col cols="10">
                <v-card class="d-flex flex-column justify-center align-center">
                    <h3 class="text-h4 text-center font-weight-bold">{{ articleInfos.name }}</h3>
                    <img :src="require('./../../../assets/Pictures/restaurant/' + $route.params.brand + '/Articles/' + articleInfos.imagePath)" alt="article_picture" />
                    <p class="text-h5">Prix : {{ articleInfos.price }}€</p>
                    <p class="text-h5">Type d'article : {{ articleInfos.type }}</p>
                    <p class="text-h5">Menu : {{ menusInfos.name }}</p>
                </v-card>
            </v-col>
            <v-col></v-col>
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
        menusInfos: null
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/articles/available/' + this.$route.params.brand + '/' + this.$route.params.id).then((response) => {
        this.articleInfos = response.data[0]
        
        this.$axios.get('http://localhost:8000/articles/menu/' + this.articleInfos.menuId).then((response) => {
            this.menusInfos = response.data[0]
        })
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
    background-image: url('./../../../assets/Background/bg.svg');
    background-repeat: repeat;
}
</style>