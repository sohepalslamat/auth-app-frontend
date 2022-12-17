import login from "./components/Login.vue"
import home from "./components/Home.vue"


export const routes = [
    { path: '/', component: home },
    { path: '/login', component: login }
]
