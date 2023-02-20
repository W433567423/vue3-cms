import { createStore } from 'vuex'
import login from './login'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'tutu',
      age: 18
    }
  },
  modules: { login }
})

export function setupStore() {
  store.commit('login/loadLocalLogin')
}

export default store
