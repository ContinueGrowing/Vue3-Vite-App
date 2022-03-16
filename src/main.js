import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import "./style/index.css"
import "./api/mock.js"

import { Button } from 'vant';

const app =createApp(App)
console.log("main.js",app)
console.log(import.meta.env.VITE_BASE_URL)

app.use(router)
app.use(store)

app.use(Button)

app.mount('#app')
