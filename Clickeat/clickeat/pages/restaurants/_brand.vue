<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <div v-if="restaurantProperties != null" class="mb-5">
          <v-row>
            <v-col>
              <img style="width: 100%;" :src="require('./../../assets/Pictures/restaurant/' + restaurantProperties.name +'/Presentation/logo.png')" alt="logo_restaurant" />
            </v-col>
            <v-col cols="9" class="text-h5">
              <h1 class="font-weight-bold mb-5">{{ restaurantProperties.name + ' - ' + restaurantProperties.address + ' (' + restaurantProperties.city + ')'}}</h1>
              <p><v-icon color="green" large>mdi-star</v-icon>{{ restaurantProperties.rated + '/5 (' + restaurantProperties.ratesNumber + ')'}}</p>
              <p>{{ restaurantProperties.type + ' • ' + restaurantProperties.hourOpened + ' - ' + restaurantProperties.hourClosed + ' • ' + restaurantProperties.location + 'km de chez vous'}}</p>
              <p>{{ restaurantProperties.deliveryType + ' • ' + restaurantProperties.estimatedTime}}</p>
            </v-col>
          </v-row>
          <hr/>
        </div>
        <div class="background white">

        <v-row class="">
          <v-col cols="2"></v-col>
          <v-col>
            <v-btn :to="'/article-creation/' + $route.params.brand" class="rounded-pill pink white--text text-h5 font-weight-bold">+ Ajouter un article</v-btn>
          </v-col>
          <v-col>
            <v-btn :to="'/menu-creation/' + $route.params.brand" class="rounded-pill green white--text text-h5 font-weight-bold">+ Ajouter un menu</v-btn>
          </v-col>
        </v-row>

          <!-- Affichage des plats du restaurant -->
          <h2 v-if="dishes.length != 0" class="font-weight-black text-h3">Plats</h2>
          <v-row no-gutters>
            <v-col v-for="(dish, index) in dishes" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" style="width: 600px; height: 275px;">
                    <v-container fluid>
                      <v-row>
                        <v-col>
                        </v-col>
                        <v-col cols="7">
                          <h2 class="font-weight-black text-h5">{{dish.name}}</h2>
                          <img :src="require('./../../assets/Pictures/restaurant/McDonalds/Articles/' + dish.imagePath)" alt="picture_article" style="width: 50%;"/>
                        </v-col>
                        <v-col class="mb-3" style="display: flex; justify-content: space-between">
                          <v-btn v-if="role == 1" class="mx-2" fab dark color="red" @click="sendArticleToCart(dish)">
                            <v-icon dark>mdi-plus</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="red" :to="'/articles/' + $route.params.brand + '/' + dish._id">
                            <v-icon dark> mdi-delete</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="orange" :to="'/articles/' + $route.params.brand + '/' + dish._id">
                            <v-icon dark>mdi-wrench</v-icon>
                          </v-btn>
                        </v-col>
                  </v-row>
                  <v-row>
                      <p class="text-h4 orange--text font-weight-bold">{{ dish.price + "€" }}</p>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

          <!-- Affichage des accompagnements du restaurant -->
          <h2 v-if="sideDishes.length != 0" class="font-weight-black text-h3">Accompagnements</h2>
          <v-row no-gutters>
            <v-col v-for="(sideDishe, index) in sideDishes" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" style="width: 600px; height: 275px;">
                    <v-container fluid>
                      <v-row>
                        <v-col>
                        </v-col>
                        <v-col cols="7">
                          <h2 class="font-weight-black text-h5">{{sideDishe.name}}</h2>
                          <img :src="require('./../../assets/Pictures/restaurant/McDonalds/Articles/' + sideDishe.imagePath)" alt="picture_article" style="width: 50%;"/>
                        </v-col>
                        <v-col class="mb-3" style="display: flex; justify-content: space-between">
                          <v-btn v-if="role == 1" class="mx-2" fab dark color="red" @click="sendArticleToCart(sideDishe)">
                            <v-icon dark>mdi-plus</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="red" :to="'/articles/' + $route.params.brand + '/' + sideDishe._id">
                            <v-icon dark> mdi-delete</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="orange" :to="'/articles/' + $route.params.brand + '/' + sideDishe._id">
                            <v-icon dark>mdi-wrench</v-icon>
                          </v-btn>
                        </v-col>
                  </v-row>
                  <v-row>
                      <p class="text-h4 orange--text font-weight-bold">{{ sideDishe.price + "€" }}</p>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

          <!-- Affichage des sauces du restaurant -->
          <h2 v-if="sauces.length != 0" class="font-weight-black text-h3">Sauces</h2>
          <v-row no-gutters>
            <v-col v-for="(sauce, index) in sauces" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" style="width: 600px; height: 275px;">
                    <v-container fluid>
                      <v-row>
                        <v-col>
                        </v-col>
                        <v-col cols="7">
                          <h2 class="font-weight-black text-h5">{{sauce.name}}</h2>
                          <img :src="require('./../../assets/Pictures/restaurant/McDonalds/Articles/' + sauce.imagePath)" alt="picture_article" style="width: 50%;"/>
                        </v-col>
                        <v-col class="mb-3" style="display: flex; justify-content: space-between">
                          <v-btn v-if="role == 1" class="mx-2" fab dark color="red" @click="sendArticleToCart(sauce)">
                            <v-icon dark>mdi-plus</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="red" :to="'/articles/' + $route.params.brand + '/' + sauce._id">
                            <v-icon dark> mdi-delete</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="orange" :to="'/articles/' + $route.params.brand + '/' + sauce._id">
                            <v-icon dark>mdi-wrench</v-icon>
                          </v-btn>
                        </v-col>
                  </v-row>
                  <v-row>
                      <p class="text-h4 orange--text font-weight-bold">{{ sauce.price + "€" }}</p>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

          <!-- Affichage des boissons du restaurant -->
          <h2 v-if="drinks.length != 0" class="font-weight-black text-h3">Boissons</h2>
          <v-row no-gutters>
            <v-col v-for="(drink, index) in drinks" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                  <v-card :elevation="hover ? 12 : 2" style="width: 600px; height: 275px;">
                    <v-container fluid>
                      <v-row>
                        <v-col>
                        </v-col>
                        <v-col cols="7">
                          <h2 class="font-weight-black text-h5">{{drink.name}}</h2>
                          <img :src="require('./../../assets/Pictures/restaurant/McDonalds/Articles/' + drink.imagePath)" alt="picture_article" style="width: 50%;"/>
                        </v-col>
                        <v-col class="mb-3" style="display: flex; justify-content: space-between">
                          <v-btn v-if="role == 1" class="mx-2" fab dark color="red" @click="sendArticleToCart(dish)">
                            <v-icon dark>mdi-plus</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="red" :to="'/articles/' + $route.params.brand + '/' + drink._id">
                            <v-icon dark> mdi-delete</v-icon>
                          </v-btn>
                          <v-btn v-if="role == 2" class="mx-2 my-2" fab dark color="orange" :to="'/articles/' + $route.params.brand + '/' + drink._id">
                            <v-icon dark>mdi-wrench</v-icon>
                          </v-btn>
                        </v-col>
                  </v-row>
                  <v-row>
                      <p class="text-h4 orange--text font-weight-bold">{{ drink.price + "€" }}</p>
                  </v-row>
                </v-container>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantPage",
  components: {
  },
  data() {
    return {
      restaurantProperties : null,
      dishes : [],
      sideDishes : [],
      sauces : [],
      drinks : [],
      menus: [],
      role: 2
    }
  },
  mounted() {
    this.$axios.get('http://localhost:5000/articles/available/' + this.$route.params.brand).then(response => {
      response.data.forEach(element => {
        switch(element.type) {
          case "plat":
            this.dishes.push(element)
            break;
          case "accompagnement":
            this.sideDishes.push(element)
            break;
          case "sauce":
            this.sauces.push(element)
            break;
          case "boisson":
            this.drinks.push(element)
            break;
        }
      });
  })
  
  this.$axios.get('http://localhost:5000/articles/restaurant/' + this.$route.params.brand).then((response) => {
    this.restaurantProperties = response.data[0]
  })
  },
  methods: {
    sendArticleToCart(article){
      const articleObject = {
        name: article.name,
        type: article.type,
        brand: article.brand,
        price: article.price,
        menuId: article.menuId,
        imagePath: article.imagePath,
        user_id: 1
      }

      this.$axios.post('http://localhost:5000/articles/cart/', articleObject).then(response => {
        this.$store.commit("addArticle", response.data)
        })
    },

    deleteArticle(articleId, type, index){
      this.$axios.delete('http://localhost:8000/articles/available/delete/' + articleId).then(() => {
        switch(type) {
          case "plat":
            this.dishes.splice(index, 1)
            break;
          case "accompagnement":
            this.sideDishes.splice(index, 1)
            break;
          case "sauce":
            this.sauces.splice(index, 1)
            break;
          case "boisson":
            this.drinks.splice(index, 1)
            break;
        }
      })
    }

  }
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