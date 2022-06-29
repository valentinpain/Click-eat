<template>
  <div class="Background">
    <v-card>
      <v-row>
        <v-col align="center">
          <h1>Qui sommes-nous?</h1>
        </v-col>
      </v-row>
      <v-row>
         <h5> credite, Patres conscripti (id quod vosmet de me existimatis
        et facitis ipsi) incredibili quodam amore patriae, qui me amor et
        subvenire olim impendentibus periculis maximis cum dimicatione capitis,
        et rursum, cum omnia tela undique esse intenta in patriam viderem,
        subire coegit atque excipere unum pro universis. <br/> Hic me meus in rem
        publicam animus pristinus ac perennis cum C. Caesare reducit,
        reconciliat, restituit in gratiam. <br/> </h5> <h5> Antiochensis ordinis vertices
        sub uno elogio iussit occidi ideo efferatus, quod ei celebrari vilitatem
        intempestivam urgenti, cum inpenderet inopia, gravius rationabili
        responderunt; et perissent ad unum ni comes orientis tunc Honoratus fixa
        constantia restitisset. Superatis Tauri montis verticibus qui ad solis
        ortum sublimius attolluntur, Cilicia spatiis porrigitur late distentis
        dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari
        sorte uberi palmite viget et frugibus minutis, quam mediam navigabile
        flumen Calycadnus interscindit. </h5>
      </v-row>
      <br/>
      <br/>
      <br/>
      <v-row>
        <h2>Nous rejoindre
        </h2>
        <h5>Qui tamen adulescentiam in si tamen provecti vel inimicitias quo maiorem in maiorem in maximas.
        </h5>
        <v-col align="center">
            <btncompte/>
            <!--<v-btn color="success" class="mr-4" to="/compte">
              Créer mon compte
            </v-btn>-->
        </v-col>
      </v-row>
<br/>
      <v-row>
        <h2>Nous contacter
        </h2>
        <h5>Ita sectatoribus minimarum tempus magistris magistris praecipites ob ad remanerent disciplinarum veri ad tenerentur extrusis.
        </h5>
        <br/>
        <br/>
        <v-col align="center">
        <h5>
            E-mail: ClickEatSupport@gmail.come <br/> <br/>
            France +33 (0)1 70 48 90 43<br/><br/>

Du Lundi au Vendredi de 9:00 à 18:00<br/>
 
Le Samedi de 10:00 à 18:00 <br/>
        </h5>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import btncompte from "../components/BtnCompte.vue"
export default {
  components:{
    btncompte,
  },}
</script>

<style scoped>
.Background {
  width: 100%;
  height: 100%;
  background-image: url('./../assets/Background/bg.svg');
  background-repeat: repeat;
}
</style>