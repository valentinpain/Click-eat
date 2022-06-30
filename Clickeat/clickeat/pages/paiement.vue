<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Paiement</h2>
        <v-row>
          <v-col></v-col>
          <v-col cols="7">
            <form>
              <v-card>
                <v-card-title
                  class="blue darken-1 white--text font-weight-black title"
                  >INFORMATIONS DE PAIEMENT<v-spacer></v-spacer>
                </v-card-title>

                <v-card-text class="pb-10">
                  <v-row>
                    <v-col cols="11">
                      <v-subheader
                        class="grey--text text--lighten-1 pl-0 subheader"
                        >NUMÉRO DE CARTE</v-subheader
                      >
                      <v-text-field
                        single-line
                        outlined
                        mask="credit-card"
                        v-model="valueOfCardNumber"
                        placeholder="4478 6322 9923 8990"
                        hide-details
                      />
                    </v-col>

                    <v-col col="4">
                      <v-subheader
                        class="grey--text text--lighten-1 pl-0 subheader"
                        >DATE D'EXPIRATION</v-subheader
                      >
                      <v-select
                        :items="monthList"
                        label="Mois"
                        outlined
                        hide-details
                      />
                    </v-col>

                    <v-col col="4">
                      <v-subheader
                        class="grey--text text--lighten-1 pl-0 subheader"
                      ></v-subheader>
                      <v-select
                        :items="yearList"
                        label="Année"
                        outlined
                        hide-details
                      />
                    </v-col>

                    <v-col col="4">
                      <v-subheader
                        class="grey--text text--lighten-1 pl-0 subheader"
                        >CODE SECRET</v-subheader
                      >
                      <v-text-field single-line outlined hide-details />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </form>
            <v-btn
              class="text-h5 mt-10 green white--text"
              @click="createDelivery"
              >Valider</v-btn
            >
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaiementPage',
  components: {},
  data() {
    return {
      command: {
        user: null,
        articles: null,
        validated: false,
      },
      yearList: ['2022', '2023', '2024', '2025', '2026'],
      monthList: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
    }
  },

  mounted() {
    /* this.$axios.get('http://localhost:8001/commands/user/62b29c49b0b82c062f81345d').then((response) => {
        this.command = response.data[0]
        this.articles = response.data[0].articles
    }) */
    this.command.articles = this.$store.getters.getCart
  },
  methods: {
    createDelivery() {
      this.$axios.post('http://localhost:8002/deliveries/create', {
        command: this.command,
        status: 'new',
        address: '2 rue des dev',
      })
      window.location.href = 'http://localhost:3000/livraison'
    },
    totalCart() {
      let sum = 0

      this.command.articles.forEach((article) => {
        sum += article.price
      })

      return sum
    },
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
