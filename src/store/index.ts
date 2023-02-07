import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'tutu'
    }
  }
})
export default store
