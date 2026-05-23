import { createApp } from 'vue'
import App           from './App.vue'
import router        from './router'

import '@/styles/reset.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
