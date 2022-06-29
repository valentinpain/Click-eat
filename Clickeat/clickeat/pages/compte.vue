<template>
  <div class="Background">
    <div>
      <v-container no-gutters class="white lighten-5 mb-6 mt-5" fluid>
        <v-row>
          <v-col>
            <img
              src="../assets/Pictures/vertic.jpeg"
              alt="cart_logo"
              height="900px"
            />
          </v-col>
            <h2 class="text-h2 blue--text">Informations générales du compte</h2>
            <v-col cols="9">
              <v-card>
                <div class="ml-5 py-5">
                  <!-- Mail -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Adresse mail</h4>
                      <v-row>
                        <v-col cols="5">
                          <p class="ml-5 text-h5">{{ compteInfos.email_user}}</p>
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
                  <!-- Password -->
                    <div class="mb-5">
                      <h4 class="font-weight-bold text-h4">Mot de passe</h4>
                      <v-row>
                        <v-col cols="5"></v-col>
                        <v-col cols="2" class="d-flex">
                          <form class="d-flex text-h6">
                            <v-text-field v-model="newPassword" label="Mot de passe" required/>
                            <v-btn
                              class="white--text ml-10 text-h6"
                              color="blue"
                              @click="updateUser('password')"
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
                          <p class="ml-5 text-h5">{{ compteInfos.id_role}}</p>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                  <p class="text-h5 pink--text font-weigth-bold">{{ updateText }}</p>
              </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-16">
          <h2 class="text-h2 purple--text">Dernières livraisons</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn
                class="ml-5 white--text font-weight-bold text-h6"
                color="purple"
                to="/livraisons-historique"
                >Historique</v-btn
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <h2 class="text-h2 green--text">Dernières commandes</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn
                class="ml-5 white--text font-weight-bold text-h6"
                color="green"
                to="/commandes-historique"
                >Historique</v-btn
              >
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
          <h2 class="text-h2 orange--text">Déconnexion du compte</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn class="ml-5 white--text font-weight-bold text-h6" color="orange" @click="logOut">Déconnecter mon compte</v-btn>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-16">
          <h2 class="text-h2 red--text">Suppression du compte</h2>
          <v-col cols="9">
            <v-card class="py-5 ml-5">
              <v-btn class="ml-5 white--text font-weight-bold text-h6" color="red" @click="deleteAccount">Supprimer mon compte</v-btn>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
    </div>
  </div>
</template>
<script>


export default {
  name: 'ComptePage',
  data() {
    return {
      compteInfos: {
      },
      newMail: null,
      newPassword: null,
      updateText: "",
      emailParrainage: null,
      errorParrainage: '',
    }
  },
  mounted(){
    this.$axios.get('http://localhost:8004/AuthDB/user/' + this.$store.getters.getUserEmail).then((response) => {
      this.compteInfos = response.data.user

      switch(this.compteInfos.id_role){
        case 1:
          this.compteInfos.id_role = "Compte utilisateur"
          break;
        case 2:
          this.compteInfos.id_role = "Compte restaurateur"
          break;
        case 3:
          this.compteInfos.id_role = "Compte livreur"
          break;
      }
    })
  },
  methods: {
    checkParrainage(){
      let email = null;
        
      this.$axios.get('http://localhost:8004/AuthDB/user/' + this.emailParrainage).then((response) => {
        email = response.data

        if(email.user){
          this.errorParrainage = "Félicitations ! Vous parrainez maintenant cet utilisateur, allez en profiter dès maintenant !"
        } else {
          this.errorParrainage = "Oh non ! Cette adresse mail n'existe pas ..."
        }
        })
    },

    resetError() {
      this.errorParrainage = ''
    },

    logOut(){
      this.$store.commit('setUserRole', 0)
      this.$store.commit('setUserEmail', "")
      window.location.href = "http://localhost:3000/"
    },

    deleteAccount(){
      this.$store.commit('setUserRole', 0)
      this.$store.commit('setUserEmail', "")
      this.$axios.delete('http://localhost:8004/AuthDB/user/' + this.$store.getters.getUserId)
      window.location.href = "http://localhost:3000/"
    },

    updateUser(type){
      switch(type){
        case "mail":
          this.$store.commit("setUserEmail", this.newMail)
          this.compteInfos.email_user = this.newMail
          break;
        case "password":
          this.compteInfos.password_user = this.newPassword
          break;
      }

      this.compteInfos.id_role = this.convertRoleIntoNumber(this.compteInfos.id_role)

      this.$axios.put('http://localhost:8004/AuthDB/user/' + this.$store.getters.getUserId, this.compteInfos).then(() => {
        this.updateText = "Le compte a correctement été modifié !"
      })
    },

    convertRoleIntoNumber(role){
      switch(role){
        case "Compte utilisateur":
          return 1;
        case "Compte restaurateur":
          return 2;
        case "Compte livreur":
          return 3;
      }
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
