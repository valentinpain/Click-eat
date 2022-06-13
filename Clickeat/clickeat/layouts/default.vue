<template>
  <v-app app light>
    <v-main>
      <v-toolbar app color="orange white--text">
        <v-row no-gutters align="center">
          <v-col>
            <v-btn to="/" nuxt><h1 class="font-italic">Click'eat!</h1></v-btn>
          </v-col>
          <v-col>
            <v-btn color="primary" to="/signin" nuxt>Créer un compte</v-btn>
            <v-btn color="primary" to="/login" nuxt>Se connecter</v-btn>
            <v-btn color="error" to="/panier" nuxt>Panier</v-btn>
          </v-col>
        </v-row>
      </v-toolbar>

      <v-container>
        <Nuxt />
      </v-container>

    </v-main>
    
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