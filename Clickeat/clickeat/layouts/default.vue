<template>
  <v-app app light >
      <v-toolbar class="pb-10" color="#1D2951" style="height: 8%">
      <v-container fluid>
        <v-row class="mt-12 d-flex justify-space-around" no-gutters>
          <v-col cols="2">
            <v-btn
              class="ml-15"
              fab
              dark
              x-large
              color="orange"
              to="/"
            >
            <v-icon style="width: 20%;" dark>
              Click'eat!
            </v-icon>
          </v-btn>
          </v-col>
          <v-col cols="7">
            <form>
              <input placeholder="Une envie particulière ?" type="text" class="white rounded-pill px-5 py-3 text-h6 search_bar" style="width: 90%;"/>
            </form>
          </v-col>
          
          <v-col cols="1" class="mt-2">
            <div style="position: relative; display: inline-block;" @click="displayCart">
                <v-btn class="pink rounded-lg px-2 py-1">
                  <img src="../assets/Pictures/cart.png" alt="cart_logo" style="width: 5%;" />
                  <img src="../assets/Pictures/down-arrow.png" alt="cart_logo" class="ml-5" style="width: 5%;" />
                </v-btn>
                <div id="cart" class="dropdown-content white" style="display: none; position: absolute; z-index: 1; width: 100%;">
                  <ul v-if="$store.getters.getCart.length != 0" style="list-style: none">
                    <li v-for="(article, index) in $store.getters.getCart" :key="index" class="white">
                      <v-row class="mt-2">
                        <v-col>
                          <p class="font-weight-bold font-italic text-center text-h5">{{ article.name }}</p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <p class="orange--text text-h5 font-weight-bold">{{ article.price + '€'}}</p>
                        </v-col>
                        <v-col>
                          <v-btn @click="removeArticle(article, index)">
                            <v-icon color="red" large>
                              mdi-delete
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <hr style="border-top: 3px solid black;" />
                      </v-row>
                    </li>
                    <li class="text-h5 font-weight-bold font-italic purple--text mt-2">TOTAL {{ totalCart()}} €</li>
                    <hr style="border-top: 3px solid black;" />
                    <v-btn class="mt-3" style="height: 7%" @click="createCommand()">
                      <p class="text-wrap text-center green--text font-italic font-weight-bold text-h5 mt-3">MA COMMANDE</p>
                    </v-btn>
                  </ul>
                  <div v-else>
                    <p class="font-italic font-weight-bold text-h6 ml-1">Votre panier est vide</p>
                  </div>
                </div>
            </div>
          </v-col>
        </v-row>
        </v-container>
      </v-toolbar>
    <Nuxt />

    <v-footer color="#1D2951" style="height: 20%; position: relative; bottom: 0;" app>
    <v-row class="white--text mt-1">
      <v-col class="mb-3 ml-5 p-0">
        <v-btn
          class="mb-7 ml-15"
          fab
          dark
          x-large
          color="orange"
        >
        <v-icon style="width: 20%;" dark>
          Click'eat!
        </v-icon>
      </v-btn><br/>
        <NuxtLink class="font-weight-bold white--text" to="/policy">POLITIQUE DE CONFIDENTIALITÉ</NuxtLink><br/>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-col class="mb-3 p-0">
        <h2 class="font-weight-bold text-h5 mb-5">L'HEURE C'EST L'HEURE</h2>
        <p>L'ensemble de notre service est disponible 24/24 et 7/7 pour répondre à votre estomac <span style="width: 200%;">🍱</span></p>
      </v-col>
      <v-col class="mb-3 p-0">
        <h2 class="font-weight-bold text-h5 mb-5">AFFILIATION</h2>
        <NuxtLink class="font-weight-bold white--text" to="/affiliation" style="text-underline-offset: 7%">Comment fonctionne le parrainage ?</NuxtLink><br/>
        <NuxtLink class="font-weight-bold white--text" to="/partner" style="text-underline-offset: 7%">Devenir partenaire</NuxtLink><br/>
      </v-col>
      <v-col class="mb-5 p-0">
        <h2 class="font-weight-bold text-h5 mb-5">NAVIGATION</h2>
          <NuxtLink class="white--text" to="/home" style="text-decoration: none">ACCUEIL</NuxtLink><br/>
          <NuxtLink class="white--text" to="/panier" style="text-decoration: none">MON PANIER</NuxtLink><br/>
          <NuxtLink class="white--text" to="/restaurants" style="text-decoration: none">NOS RESTAURANTS</NuxtLink><br/>
          <NuxtLink class="white--text" to="/commandes" style="text-decoration: none">MES COMMANDES</NuxtLink><br/>
          <NuxtLink class="white--text" to="/contact" style="text-decoration: none">CONTACT</NuxtLink><br/>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
            command: null,
        };
    },
      watch: {
        cart(newValue) {
          this.$store.commit("addArticle", newValue)
        }
      },
    methods: {
      displayCart(){
        const elementState = document.getElementById('cart').style.display

        if(elementState === 'block'){
          document.getElementById('cart').style.display = 'none'
        } else {
          document.getElementById('cart').style.display = 'block'
        }
      },

      removeArticle(article, index){
        this.$store.commit("removeArticle", index)
        this.$axios.delete('http://localhost:8000/articles/cart/delete/' + article._id).then(function (){
        })
      },

      totalCart(){
        let sum = 0;
        
        this.$store.getters.getCart.forEach(article => {
          sum += article.price; 
        });

        return sum;
      },
      createCommand() {
        this.command = {
          userId: 1,
          articles: this.$store.getters.getCart,
          validated: "En cours",
          date: new Date()
        }

        this.$axios.post('http://localhost:8001/commands/create', this.command)
        window.location.href = "http://localhost:3000/commande"
      }
    },
}
</script>

<style>
  .search_bar {
    outline: none;
  }
</style>
