<template>
<div class="Background">
  <v-row>
    <v-col class="mt-4" align="center" jsutify="center">
      <v-card style="max-width:40rem" >
        <v-col >
          <h1>Qui êtes-vous?</h1>
            <v-btn  to="/signin" nuxt>Livreur                   

                  </v-btn>
            <v-btn  to="/signin" nuxt>Restaurateur</v-btn>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'PanierPage',
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