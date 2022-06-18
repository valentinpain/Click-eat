<template>
  <v-app app light>
      <v-toolbar class="pb-10" color="#1D2951" style="height: 8%">
      <v-container fluid>
        <v-row class="mt-9" no-gutters>
          <v-col cols="undefined">
            <v-btn fab class="ml-5">
              <img src="../assets/Pictures/logo.png" alt="clickeat_logo" style="width: 20%;"/>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <form>
              <input placeholder="Une envie particulière ?" type="text" class="white rounded-pill px-5 py-3 text-h6 search_bar" style="width: 90%;"/>
            </form>
          </v-col>
          <v-col cols="undefined">
            <v-btn class="white--text font-weight-bold" color="#FFc045" to="/panier" nuxt>Panier</v-btn>
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
        };
    },
    methods: {
    },
}
</script>

<style>
  .search_bar {
    outline: none;
  }
</style>
