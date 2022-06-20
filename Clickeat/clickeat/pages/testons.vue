<template>
  <div class="Background">
    <v-row>
      <v-col class="mt-4" align="center" justify="center">
        <v-card style="max-width: 40rem">
          <v-col class="mt-4" align="center" justify="center">
            <h1>Inscription</h1>
            <v-text-field label="Nom" :rules="nameRules" required>
            </v-text-field>
            <v-text-field
              label="Prénom"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field label="Téléphone" :rules="nameRules">
                  required type="tel"
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="Pays"
                  :rules="rules.Pays"
                  label="Pays"
                  required
                ></v-select>
              </v-col>
              <v-col >
                <v-select
                  :items="role"
                  :rules="rules.role"
                  label="Qui etes-vous?"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <v-slider
              label="Age"
              v-model="value"
              :rules="rulesAge"
              step="1"
              thumb-label
              ticks
            ></v-slider>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Mot de passe"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-checkbox color="green" rules>
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a href="#" @click.prevent="terms = true">terms</a>
                  and
                  <a href="#" @click.prevent="conditions = true">conditions?</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
              v-on:click="update()"
            >
              Inscrire
            </v-btn>
          </v-col>
        </v-card>
      </v-col>

      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="text-h6"> Terms </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="black" @click="terms = false"> Ok </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="text-h6"> Conditions </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="black" @click="conditions = false"> Ok </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      show1: false,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
      Pays: ['France'],
      role: ['Client','Livreur','Restaurateur'],
      value: 30,
      rulesAge: [(v) => v > 16 || '16 ans minimum'],
      conditions: false,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
      terms: false,
      email: '',
      nameRules: [(v) => !!v || 'Required'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      el: '#app',
      dataa() {
        return {
          info: null,
        }
      },
      mounted() {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then((response) => (this.info = response))
      },
    }
  },
  methods:{
    update(){
      axios.post()
    }
  }
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
