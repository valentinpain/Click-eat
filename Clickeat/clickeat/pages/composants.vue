<template>
  <div class="Background">
    <v-row>
      <v-col align="center">
        <v-card style="max-width: 40rem">
  <div 
    v-for='(product, index) in products' 
    :key='product.id' 
  >
    #{{ index + 1}} - {{ product.name }}
  </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

</script>

<style scoped>
.Background {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/Background/bg.svg');
  background-repeat: repeat;
}
</style>