import login from "./components/Login.vue";
import home from "./components/Home.vue";
import register from "./components/Register.vue";
import { store } from "./plugins/store";

export const routes = [
  {
    path: "/",
    component: home,
    beforeEnter: (to, from, next) => {
      !store.state.token ? next("login") : next();
    },
  },
  {
    path: "/login",
    component: login,
    beforeEnter: (to, from, next) => {
      store.state.token ? next("/") : next();
    },
  },
  {
    path: "/register",
    component: register,
    beforeEnter: (to, from, next) => {
      store.state.token ? next("/") : next();
    },
  },
];
