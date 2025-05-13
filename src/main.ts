import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { SpeedInsights } from "@vercel/speed-insights/vue"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SpeedInsights)

app.mount('#app')
