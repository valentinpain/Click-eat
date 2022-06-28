<template>
  <div class="Background">
    <div>
      <v-container no-gutters class="white lighten-5 mb-6 mt-5" fluid>
        <v-row>
            <h2 class="text-h2 blue--text">Informations générales du compte</h2>
            <v-col cols="9">
              <v-card>
                <div class="ml-5 py-5">
                  <!-- Nom -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Nom</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.lastName}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newLastName" label="Nom" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('lastName')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Prénom -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Prénom</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.firstName}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newFirstName" label="Prénom" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('firstName')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Âge -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Âge</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.age}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newAge" label="Âge" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('age')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Country -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Pays</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.country}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                          <v-select
                            :items="['France']"
                            label="Pays"
                            dense
                            outlined
                          ></v-select>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('country')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Phone -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Téléphone</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.phone}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newPhone" label="Téléphone" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('téléphone')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Mail -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Adresse mail</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.mail}}</p>
                        </v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newMail" label="Adresse mail" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('mail')"
                            >
                              Envoyer
                            </v-btn>
                          </form>
                        </v-col>
                      </v-row>
                    </div>
                  <!-- Type -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Niveau du compte</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.type}}</p>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
              </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-16">
          <h2 class="text-h2 purple--text">Dernières livraisons</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn class="ml-5 white--text font-weight-bold text-h6" color="purple" to="/livraisons-historique">Historique</v-btn>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <h2 class="text-h2 green--text">Dernières commandes</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn class="ml-5 white--text font-weight-bold text-h6" color="green" to="/commandes-historique">Historique</v-btn>
            </v-card>
          </v-col>
        </v-row>
        
          <v-row class="mt-16">
            <h2 class="text-h2 pink--text mt-5">Parrainage</h2>
            <v-col cols="9">
              <v-card class="py-5 px-5 text-h5">
                <p>Entrez une adresse mail existante pour obtenir vos avantages de parrainage. Les avantages du parrainage concernent notamment :</p>
                <ul style="list-style: square">
                  <li>Une réduction de 20% sur vos prochaines commandes</li>
                </ul>
                  <form>
                    <v-text-field
                      v-model="emailParrainage"
                      label="E-mail"
                      required
                      @input="resetError"
                    ></v-text-field>
                    <v-btn
                      class="mr-4 white--text text-h6"
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

        <v-row class="mt-16">
          <h2 class="text-h2 green--text">Suppression du compte</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn class="ml-5 white--text font-weight-bold text-h6" color="green" @click="deleteAccount">Supprimer mon compte</v-btn>
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
      newLastName: null,
      newFirstName: null,
      newAge: null,
      newCountry: null,
      newPhone: null,
      newMail: null,
      emailParrainage: null,
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
    },

    updateUser(){

    },

    deleteAccount(){
      
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
