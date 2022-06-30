<template>
  <div class="Background">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <div class="mb-5">
          <v-row>
            <v-col class="p-0" style="position: relative">
              <img :src="require('./../assets/Pictures/home.png')" alt="picture_food-delivery" style="width: 86%; z-index: 2"/>
              <div style="position: absolute; right: 10%; top: 10%">
                <p class="text-h3 font-italic mb-10 hidden-md-and-down"><span class="blue--text font-weight-black" style="font-size: 100px">COMMANDEZ</span> chez nous</p>
                <p class="text-h3 font-italic mb-10 hidden-md-and-down"><span class="blue--text font-weight-black" style="font-size: 100px">RECEVEZ</span> chez vous</p>
                <p class="text-h3 font-italic mb-10 hidden-md-and-down"><span class="blue--text font-weight-black" style="font-size: 100px">DÉGUSTEZ</span> maintenant</p>

              </div>
            </v-col>
          </v-row>
        </div>
        <div v-if="role == 1" class="mb-16">
          <h2 class="text-h2 mb-10 hidden-md-and-down ">Nos restaurants partenaires</h2>
          <h4 class="text-h4 mb-10 hidden-md-and-up ">Nos restaurants partenaires</h4>
          <v-row no-gutters style="height: 60px">
            <v-col
              v-for="(restaurant, index) in restaurants"
              :key="index"
              class="mr-5"
            >
            <v-hover v-slot="{ hover }">
            <NuxtLink :to="'/restaurants/' + restaurant.name.replace(/\s/g, '')" class="text-decoration-none">
              <v-card :elevation="hover ? 5 : 1" class="pa-2 rounded-lg p-0" style="max-height: 100px; cursor: pointer">
                <v-row>
                  <v-col cols="3" class="pt-1 pl-1">
                    <img :src="require('./../assets/Pictures/restaurant/' + restaurant.name.replace(/\s/g, '') + '/Logo/logo.png')" alt="picture_restaurant" style="height: 44.5%;"/>
                  </v-col>
                  <v-col>
                    <h2 class="text-center">{{ restaurant.name }}</h2>
                  </v-col>
                </v-row>
              </v-card>
            </NuxtLink>
              </v-hover>
            </v-col>
          </v-row>
        </div>
        <div v-else-if="role == 2">
          <v-row>
            <v-col></v-col>
            <v-col cols="3" class="mt-10">
              <v-btn :to="'/restaurants/' + accountName" class="px-2 py-5 text-h4 font-weight-bold pink--text white rounded-pill">Modifier mes articles</v-btn>
            </v-col>
            <v-col></v-col>
          </v-row>
        </div>
        </v-container>
    </div>
  </div>
</template>

<script>

export default {
  name: "IndexPage",
  data() {
    return {
      restaurants: [],
      accountName: "McDonalds",
      role: this.$store.getters.getRole,
    }
  },
  mounted(){

    this.$axios.get('http://localhost:8000/articles/restaurant/').then((response) => {
      this.restaurants = response.data
    })

    if(this.$store.getters.getUserEmail !== ''){
      this.$axios.get('http://localhost:8004/AuthDB/user/' + this.$store.getters.getUserEmail).then((response) => {
          this.$store.commit('setUserId', response.data.user.id_user)
        }).catch(() => {
        })
    }
  }
}
</script>

<style scoped>
.Background {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/Background/bg.svg');
  background-repeat: repeat;
}

</style>
