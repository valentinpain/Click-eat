<template>
  <div class="Background">
    
    <v-row no-gutters>
      <v-col class="mt-4" align="center" justify="center">
        <v-card style="max-width: 40rem">
          <v-col class="mt-4" align="center" justify="center">
            <h1>Inscription</h1>
            <v-text-field
              v-model="userInfos.email_user"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-row>
              <v-col>
                <v-select
                v-model="userInfos.id_role"
                  :items="roles"
                  :rules="rules.role"
                  label="Qui etes-vous?"
                  required
                ></v-select>
              </v-col>
            </v-row>

            <v-text-field
              v-model="userInfos.password_user"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Mot de passe"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-checkbox color="green">
              <template #label>
                <div @click.stop="">
                  J'accepte la
                  <a href="#" @click.prevent="terms = true">chartre de confidentialité</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn color="success" class="mr-4" @click="signUp">
              M'inscrire
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
        <p class="text-h5 font-weight-bold pink--text text-center">{{ messageForm }}</p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      show1: false,

      userInfos: {
        email_user: '',
        id_role:'',
        password_user: '',
      },

      roles: ['Client', 'Livreur', 'Restaurateur'],
      value: 30,
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
      },
      conditions: false,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
      terms: false,
      nameRules: [(v) => !!v || 'Required'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      messageForm: "",
    }
  },
  methods: {
    signUp() {
      switch(this.userInfos.id_role) {
        case "Client":
          this.userInfos.id_role = "1"
          this.$store.commit('setRole', 1)
          break;
        case "Restaurateur":
          this.userInfos.id_role = "2"
          this.$store.commit('setRole', 2)
          break;
        case "Livreur":
          this.userInfos.id_role = "3"
          this.$store.commit('setRole', 3)
          break;
      }

      this.messageForm = "Création du compte réussie !"

      this.$axios.post('http://localhost:8004/AuthDB/user', this.userInfos).then(() => {
        this.$store.commit("setUserEmail", this.userInfos.email_user)
      })

       window.location.href = "http://localhost:3000/"
    },
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
