import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
import Tres from '@tresjs/core'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Tres)
app.mount('#app')
