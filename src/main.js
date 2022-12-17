/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import {routes}  from './routes'

// Composables
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Plugins
import { registerPlugins } from '@/plugins'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

registerPlugins(app)
app.use(router)

app.mount('#app')
