<template>
  <div>
    <v-app>
      <v-container fluid class="main-container">
        <div class="low">

          <v-toolbar class="transparent-navbar">
            <v-toolbar-title>
              <span class="planmylife-title">
                <v-avatar style="margin-bottom:12px;" size="36" class="mr-2">
                  <v-img src="../assets/calm.png" ></v-img>
                </v-avatar>

                <i>PlanMyLife</i></span
              >
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="navbar-buttons">
              <v-btn depressed color="#C9EEFF" class="custom-button pa-5"
                >Donacija</v-btn
              >
              <v-btn depressed color="#C9EEFF" class="custom-button pa-5"
                >Registracija</v-btn
              >
              <v-btn text to="/login" depressed color="#C9EEFF" class="custom-button pa-5"
                >Prijava</v-btn
              >
            </v-toolbar-items>
          </v-toolbar>
        </div>

        <v-row>
          <v-col cols="6">
            <div>
              <h2 class="subtitle light-sheet2">
                Dobrodošli na našu self-help aplikaciju!
              </h2>

              <v-sheet class="pa-4 light-sheet">
                <p>
                  Shvaćamo koliko je važno biti produktivan, organiziran i
                  fokusiran u današnjem svijetu, prepunog izazova i brzog načina
                  razmišljanja. Zato smo tu da vam pružimo podršku i olakšamo
                  Vaš svakodnevni život.
                </p>
              </v-sheet>
            </div>
          </v-col>

          <v-col cols="6">
            <v-img
              src="../assets/writting.jpg"
              aspect-ratio="1"
              style="margin-left: 140px; margin-bottom: 100px"
              class="img2"
            ></v-img>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-img
              src="../assets/reading.jpg"
              aspect-ratio="1"
              class="img1"
            ></v-img>
          </v-col>

          <v-col cols="6">
            <div class="align">
              <h2 class="subtitle light-sheet3">
                Ponosni smo što Vam nudimo...
              </h2>
              <v-sheet class="pa-4 light-sheet0">
                <p>
                  Neke od ključnih značajki koje će vam pomoći da se lakše
                  nosite sa svakodnevnim izazovima su:
                </p>
                <ul>
                  <li>
                    Značajka dnevnika za zapisivanje Vaših misli, emocija, te
                    ciljeva za organizaciju sadašnjih i budućih događaja.
                  </li>
                  <li>
                    Značajka kulinarskog dnevnika za zapisivanje omiljenih
                    recepata.
                  </li>
                  <li>
                    Značajka proračuna i troškova za upravljanje financijama.
                  </li>
                </ul>
              </v-sheet>
            </div>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="6">
            <v-sheet class="pa-4 light-sheet4">
              <p>
                Ako volite kuhati ili jednostavno želite biti više organizirani
                u svojoj prehrani, naša kulinarska značajka omogućit će Vam da
                zapisujete i uređujete svoje omiljene recepte. I za one koji
                žele bolje upravljati svojim financijama,tu je značajka
                proračuna i troškova koja će vam pomoći da stvorite proračun i
                pratite svoje troškove.
              </p>
            </v-sheet>
          </v-col>

          <v-col cols="6">
            <v-img
              src="../assets/meditation.jpg"
              aspect-ratio="1"
              class="img2"
              style="margin-left: 50px"
            ></v-img>
          </v-col>
        </v-row>

        <v-footer class="sticky-footer">
          <v-sheet class="pa-5" color="black" rounded elevation="12">
            <v-row justify="center">
              <v-col cols="3">
                <v-btn
                  block
                  depressed
                  color="#C9EEFF"
                  rounded
                  class="button1 pa-4"
                  >Kontaktirajte nas</v-btn
                >
              </v-col>
              <v-col cols="3">
                <v-btn
                  block
                  depressed
                  color="#C9EEFF"
                  rounded
                  class="button2 pa-4"
                  >Uvjeti korištenja</v-btn
                >
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="3">
                <v-btn
                  block
                  depressed
                  color="#C9EEFF"
                  rounded
                  class="button3 pa-4"
                  >Pratite nas</v-btn
                >
              </v-col>
              <v-col cols="3">
                <v-btn
                  block
                  depressed
                  color="#C9EEFF"
                  rounded
                  class="button4 pa-4"
                  >F&Q</v-btn
                >
              </v-col>
            </v-row>
          </v-sheet>
        </v-footer>
      </v-container>
    </v-app>
  </div>
</template>

<style scoped>
.custom-paragraph {
  margin-right: 200px;
}

.align {
  margin-right: 150px;
}

.main-container {
  background-color: rgb(158, 224, 158);
  margin-bottom: 0px;
}

.low {
  margin-bottom: 125px;
}

.transparent-navbar {
  background-color: transparent;
  box-shadow: none;
}

.planmylife-title {
  font-size: 50px;
  font-family: "Consolas Italic";
  font-weight: bold;
  color: #000000;
}

.custom-button {
  color: #000000;
  font-weight: bold;
  margin-left: 16px;
}

.img1 {
  width: 600px;
  height: 600px;
  margin-left: 130px;
  border-radius: 20px;
  margin-bottom: 100px;
  padding: 50px;
}

.img2 {
  width: 525px;
  height: 525px;
  border-radius: 20px;
  margin-bottom: 125px;
}

.transparent-navbar {
  background-color: transparent;
  box-shadow: none;
}

.subtitle {
  margin-top: 0;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 40px;
  font-family: "Gadugi";
}

.pa-4 {
  font-size: 25px;
}

.pa-5 {
  font-size: 20px;
}

.light-sheet0 {
  background-color: #ead9d9 !important;
  color: rgb(0, 0, 0) !important;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 80px;
  margin-left: -10px;
}
.light-sheet {
  background-color: #ead9d9 !important;
  color: rgb(0, 0, 0) !important;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 80px;
  margin-left: 145px;
}

.light-sheet2 {
  background-color: #fbbf6a !important;
  color: rgb(0, 0, 0) !important;
  border-radius: 8px;
  width: 110%;
  text-align: center;
  margin-left: 75px;
}

.light-sheet3 {
  background-color: #fbbf6a !important;
  color: rgb(0, 0, 0) !important;
  border-radius: 8px;
  width: 110%;
  text-align: center;
  margin-left: -10px;
}

.light-sheet4 {
  background-color: #ead9d9 !important;
  color: rgb(0, 0, 0) !important;
  width: 90%;
  border-radius: 8px;
  margin-bottom: 80px;
  margin-left: 130px;
}

.sticky-footer {
  margin-top: 50px;
  background-color: #c751fe !important;
  border-radius: 30px;
}

.button1,
.button2,
.button3,
.button4 {
  transition: background-color 0.3s;
  background-color: rgb(202, 65, 65);
}

.button1,
.button3 {
  margin-right: 1000px;
}
</style>
