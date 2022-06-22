<template>
  <div class="background white">
    <div>
      <v-container class="white lighten-5 mb-6" fluid>
        <h2 class="text-h2">Résumé de votre commande</h2>
        <v-row>
          <v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommandPage",
  components: {
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
  },
  methods: {
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