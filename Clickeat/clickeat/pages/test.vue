<template>
<div class="Background">
<p v-if="inStock">En stock</p>

<p v-else>En rupture</p>

<p v-if="compteur>5">En rupture compteur</p>
<p v-else>En stock compteur</p>
<button v-on:click="inStock= false"> non</button>
<button v-on:click="inStock= true"> oui</button>
<button v-on:click="compteur= compteur+1"> +1</button>
<button v-on:click="compteur= compteur-1"> -1</button>
  <v-row>
    <v-col class="text-center">
        <h1>Test</h1>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'PanierPage',
    data() {
           return {
            product: 'T-Shirt',
            image: './assets/images/t-shirt-bleu',
            inStock: true,
            compteur: 0
        }
  },
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