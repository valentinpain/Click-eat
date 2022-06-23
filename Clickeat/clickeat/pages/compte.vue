<template>
  <div class="Background">
    <div>
      <v-container no-gutters class="white lighten-5 mb-6 mt-5" fluid>
        <v-row>
            <h2 class="text-h2 blue--text">Informations générales du compte</h2>
            <v-col cols="9">
              <v-card>
                <div class="ml-5 py-5">
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Nom et prénom</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.lastName + ' ' + compteInfos.firstName}}</p>
                  </div>
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Âge</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.age}}</p>
                  </div>
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Pays</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.country}}</p>
                  </div>
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Téléphone</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.phone}}</p>
                  </div>
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Adresse mail</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.mail}}</p>
                  </div>
                  <div class="mb-5">
                    <h4 class="font-weight-bold text-h4">Type de compte</h4>
                    <p class="ml-5 text-h5">{{ compteInfos.type}}</p>
                  </div>
                </div>
              </v-card>
            </v-col>
        </v-row>
          <v-row>
            <h2 class="text-h2 blue--text mt-5">Parrainage</h2>
            <v-col cols="9">
              <v-card class="py-5 px-5 text-h5">
                <p>Entrez une adresse mail existante pour obtenir vos avantages de parrainage. Les avantages du parrainage concernent notamment :</p>
                <ul style="list-style: square">
                  <li>Une réduction de 20% sur vos prochaines commandes</li>
                </ul>
                  <form>
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      required
                      @input="resetError"
                    ></v-text-field>
                    <v-btn
                      class="mr-4 white--text"
                      color="pink"
                      @click="checkParrainage"
                    >
                      Tester 🤞
                    </v-btn>
                </form>
                <p class="text-h5 pink--text mt-5">{{ errorParrainage }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </div>
  </div>
</template>

<script>

export default {
  name: "ComptePage",
  data() {
    return {
      compteInfos: {
        lastName: "Pain",
        firstName: "Valentin",
        age: 21,
        country: "France",
        phone: "06.63.98.64.95",
        mail: "valentin.pain@viacesi.fr",
        type: "utilisateur classique"
      },
      email: null,
      errorParrainage: "",
    }
  },
  mounted(){
  },
  methods: {
    checkParrainage(){
      const check = false;

      if(check){
        this.errorParrainage = "Félicitations ! Vous parrainez maintenant cet utilisateur, allez en profiter dès maintenant !"
      } else {
        this.errorParrainage = "Oh non ! Cette adresse mail n'existe pas ..."
      }
    },

    resetError(){
      this.errorParrainage = "";
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
