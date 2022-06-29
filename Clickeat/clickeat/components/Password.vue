<template>

            <v-text-field
              v-model="password"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              label="Mot de passe"
              hint="At least 8 characters"
              counter
              @click:append="show2 = !show2"
            ></v-text-field>
</template>

<script>
export default{
    data () {
    return{

    
show2: false,
password: '',
      sponsor:'',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
}}}
</script>

<style >

</style>
