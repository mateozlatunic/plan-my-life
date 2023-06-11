<template>

    <div class="signup-form">
    <h2>Sign up</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
  
</template>

    
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Submit the form to the server
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log(formData); // for testing purposes only
      // You can use axios or fetch to submit the form data to the server
      // and handle any errors that may occur.
    },
  },
};
</script>

<style>
.main-container {
  background-color: rgb(158, 224, 206);
  margin-bottom: 0px;
}

.signup-form {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>
