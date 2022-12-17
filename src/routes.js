import HelloWorldVue from "./components/HelloWorld.vue";
import LoginVue from "./components/Login.vue";

export const routes = [
  {path: '/', component: HelloWorldVue},
  {path: '/login', component: LoginVue}
]
