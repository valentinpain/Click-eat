<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{item.test}}</li>
     </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      data: null,
    }
  },
  mounted(){
    this.$axios.$get('http://localhost:8000/users').then((response) => {
      this.data = response
    })
  },
  methods: {
  },
}
</script>
