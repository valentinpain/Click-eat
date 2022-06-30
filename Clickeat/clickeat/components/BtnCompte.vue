<template>
  <v-btn to="/compte" class="orange">
    <v-icon color="white"> mdi-account </v-icon>
    <span class="text-h6 white--text font-weight-bold">{{text}}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>