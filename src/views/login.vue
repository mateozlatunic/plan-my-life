<template>
  <v-form @submit.prevent="submitForm">
    <v-container class="login-form" fluid>
      <h2 class="login">Login</h2>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-btn type="button" @click="login" color="success" block
            >Login</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {
  auth,
  signInWithEmailAndPassword,
} from "../../firebase.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
debugger;
      let email=this.email;
      signInWithEmailAndPassword(auth,email,this.password).then(()=>{
        this.$router.push("/");
      }).catch((error)=> {
        alert(error.message);
      })

      /*
      firebase
        .default.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("Uspiješna registracija");
        })
        .catch((error) => {
          console.log("NEMOJ ZAJEBAVAT", error);
        });
      console.log("Nastavak");
      */
    },
  },
};
</script>

<style>
.login {
  padding-bottom: 20px;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 180px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.v-text-field {
  width: 100%;
}

.v-btn {
  margin-top: 10px;
  padding-bottom: 20px;
}
</style>
