<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Historique de vos commandes</h2>
        <v-row>
          <v-col>
            <ul class="mt-5" style="list-style: none">
              <li v-for="(command, index) in commands" :key="index">
                <v-card>
                  <v-row>
                    <v-col cols="9">
                      <h2 class="font-weight-bold text-h3 ml-2 mb-5 mt-2 pink--text">Commande {{ index + 1}}</h2>
                      <ul style="list-style: none">
                        <li v-for="(article, index2) in command.articles" :key="index2">
                          <p class="text-h5">x1 {{ article.name + ' (' + article.price + '€)' }}</p>
                        </li>
                      </ul>
                    </v-col>
                  </v-row>
                  <hr />
                  <v-row>
                      <p class="text-h5 ml-5">Statut : {{ command.validated }}</p>
                      <p class="ml-5 text-h5 pink--text font-weight-bold">TOTAL : {{ sumCommand(command) }}€</p>
                  </v-row>
                </v-card>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandHistoryPage",
  components: {
  },
  data() {
    return {
      commands: []
    }
  },
  mounted() {
    this.$axios.get('http://localhost:8001/commands/user/62b29c49b0b82c062f81345d').then((response) => {
      this.commands = response.data
    })
  },
  methods: {
    sumCommand(command){
      let sum = 0;

      command.articles.forEach(article => {
        sum += article.price
      });

      return sum;
    }
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