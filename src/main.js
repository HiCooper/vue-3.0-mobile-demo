import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'


import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
import './mock'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
