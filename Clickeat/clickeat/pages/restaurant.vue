<template>
  <div class="background">
    <div>
      <v-container class="grey lighten-5 mb-6" fluid>
        <div class="mb-5">
          <v-row>
            <v-col>
              <img style="width: 100%;" :src="restaurantProperties.imagePath" alt="logo_restaurant" />
            </v-col>
            <v-col cols="8" class="text-h5">
              <h1 class="font-weight-bold mb-5">{{ restaurantProperties.name + ' - ' + restaurantProperties.address + ' (' + restaurantProperties.city + ')'}}</h1>
              <p><v-icon color="green" large>mdi-star</v-icon>{{ restaurantProperties.rated + '/5 (' + restaurantProperties.ratesNumber + ')'}}</p>
              <p>{{ restaurantProperties.type + ' • ' + restaurantProperties.hourOpened + ' - ' + restaurantProperties.hourClosed + ' • ' + restaurantProperties.location + 'km de chez vous'}}</p>
              <p>{{ restaurantProperties.deliveryType + ' • ' + restaurantProperties.estimatedTime}}</p>
            </v-col>
          </v-row>
          <hr/>
        </div>
        <div class="background">

          <!-- Affichage des plats du restaurant -->
          <h2 class="font-weight-black">Plats</h2>
          <v-row no-gutters>
            <v-col v-for="(dish, index) in dishes" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 2">
                  <v-container fluid>
                  <v-row>
                    <v-col class="p-0">
                      <img :src="require('./../assets/Pictures/restaurant/Mcdo/Articles/' + dish.imagePath)" alt="picture_article" style="width: 100%; height: 100%;"/>
                    </v-col>
                    <v-col cols="7">
                      <div class="mb-3" style="display: flex; justify-content: space-between">
                        <h2 class="font-weight-black text-h5">{{dish.name}}</h2>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="red"
                        >
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </div>
                      <p class="text-h6">{{ dish.description }}</p>
                      <p class="text-h6 orange--text font-weight-bold">{{ dish.price + "€" }}</p>
                    </v-col>
                  </v-row>
                  </v-container>
                </v-card>
                </v-hover>
            </v-col>
          </v-row>

          <!-- Affichage des accompagnements du restaurant -->
          <h2 class="font-weight-black">Accompagnements</h2>
          <v-row no-gutters>
            <v-col v-for="(sideDish, index) in sideDishes" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 2">
                  <v-container fluid>
                  <v-row>
                    <v-col class="p-0">
                      <img :src="sideDish.imagePath" alt="picture_article" style="width: 100%; height: 100%;"/>
                    </v-col>
                    <v-col cols="7">
                      <div class="mb-3" style="display: flex; justify-content: space-between">
                        <h2 class="font-weight-black text-h5">{{sideDish.name}}</h2>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="red"
                        >
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </div>
                      <p class="text-h6">{{ sideDish.description }}</p>
                      <p class="text-h6 orange--text font-weight-bold">{{ sideDish.price + "€" }}</p>
                    </v-col>
                  </v-row>
                  </v-container>
                </v-card>
                </v-hover>
            </v-col>
          </v-row>

          <!-- Affichage des sauces du restaurant -->
          <h2 class="font-weight-black">Sauces</h2>
          <v-row no-gutters>
            <v-col v-for="(sauce, index) in sauces" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 2">
                  <v-container fluid>
                  <v-row>
                    <v-col class="p-0">
                      <img :src="sauce.imagePath" alt="picture_article" style="width: 100%; height: 100%;"/>
                    </v-col>
                    <v-col cols="7">
                      <div class="mb-3" style="display: flex; justify-content: space-between">
                        <h2 class="font-weight-black text-h5">{{sauce.name}}</h2>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="red"
                        >
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </div>
                      <p class="text-h6">{{ sauce.description }}</p>
                      <p class="text-h6 orange--text font-weight-bold">{{ sauce.price + "€" }}</p>
                    </v-col>
                  </v-row>
                  </v-container>
                </v-card>
                </v-hover>
            </v-col>
          </v-row>

          <!-- Affichage des boissons du restaurant -->
          <h2 class="font-weight-black">Boissons</h2>
          <v-row no-gutters>
            <v-col v-for="(drink, index) in drinks" :key="index" cols="3" class="mx-5 mb-10">
                <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 2">
                  <v-container fluid>
                  <v-row>
                    <v-col class="p-0">
                      <img :src="drink.imagePath" alt="picture_article" style="width: 100%; height: 100%;"/>
                    </v-col>
                    <v-col cols="7">
                      <div class="mb-3" style="display: flex; justify-content: space-between">
                        <h2 class="font-weight-black text-h5">{{drink.name}}</h2>
                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          small
                          color="red"
                        >
                          <v-icon dark>
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </div>
                      <p class="text-h6">{{ drink.description }}</p>
                      <p class="text-h6 orange--text font-weight-bold">{{ drink.price + "€" }}</p>
                    </v-col>
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
      restaurantProperties : {
        name:"McDonalds",
        type: "Fast food",
        city: "Rouen",
        address: "2 Boulevard de l'Europe",
        hourOpened: "19h00",
        hourClosed: "23h00",
        rated: 4.2,
        ratesNumber: 500,
        location: 7.5,
        deliveryType: "Livraison offerte",
        estimatedTime: "45 minutes",
        imagePath: require('./../assets/Pictures/restaurant/Mcdo/Logo/logo.png')
      },
      dishes : [],
      sideDishes : [],
      sauces : [],
      drinks : [],
      menus: [],
      alignments: ['center'],
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8000/articles/available/McDonalds').then(response => {
      response.data.forEach(element => {
        switch(element.type) {
          case "dish":
            this.dishes.push(element)
            break;
          case "side dish":
            this.sideDishes.push(element)
            break;
          case "drinks":
            this.drinks.push(element)
            break;
        }
      });
  })
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