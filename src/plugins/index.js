/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import {api} from './axios'

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify),
  app.config.globalProperties.$api = api
}
