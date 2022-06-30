<template>
  <div class="Background">
    <v-row>
      <v-col align="center">
        <v-card style="max-width: 40rem">
          <ul id="Compos">
            <li v-for="item in items" :key="item.message">
              {{ item.message }}
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  el: 'compos',
  data: {
    items: [
      { message: 'BtnCompte.vue' },
      { message: 'Condition.vue' },
      { message: 'Panier' },
      { message: 'Password' }
    ]
  }
})
</script>

<style scoped>
.Background {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/Background/bg.svg');
  background-repeat: repeat;
}
</style>