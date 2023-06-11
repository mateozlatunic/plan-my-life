import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/login.vue";
import signup from "../views/signup.vue";

Vue.use(VueRouter)
const routes=[
{
  path: '/',
  name: 'home',
  component: HomeView
},
{
  path: '/login',
  name: 'login-view',
  component: login
},
{
  path: '/signup',
  name: 'sign-up',
  component: signup
},
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
