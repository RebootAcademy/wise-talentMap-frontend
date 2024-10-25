import './assets/main.css'
import 'primeicons/primeicons.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(createPinia())

/* app.use(
  VueGtag,
  {
    config: {id: 'G-JWN0SS76GG'},
  },
  router
) */

app.use(router)
app.mount('#app')
