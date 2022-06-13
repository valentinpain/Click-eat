<template>
  <v-app app light>
    <v-card flat height="80px" tile>
      <v-toolbar color="#191A1B">
        <v-row no-gutters align="center">
          <v-col>
            <v-btn color="#0A91AB" to="/" nuxt
              ><h1 class="font-italic">Click'eat!</h1></v-btn
            >
          </v-col>
          <v-col>
            <v-btn icon color="FFFFFF">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn color="#0A91AB" to="/signin" nuxt>Créer un compte</v-btn>
            <v-btn color="#0A91AB" to="/login" nuxt>Se connecter</v-btn>
            <v-btn color="#FFc045" to="/panier" nuxt>Panier</v-btn>
            <v-btn color="#81667A" to="/DevenirPartenaire" nuxt>Devenir partenaire</v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-card>
    <Nuxt />

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
