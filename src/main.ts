import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store, { setupStore } from './store'
import './assets/css/index.less'
import 'normalize.css'
//全局注册
import { registerApp } from './global'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)

setupStore()

app.mount('#app')
