import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

//全局注册
import { registerApp } from './global'
import tuRequest from './service'

const app = createApp(App)
registerApp(app)
app.use(router).use(store).mount('#app')
// tuRequest.request({
//   url: '/api/sunrun',
//   method: 'GET'
// })
