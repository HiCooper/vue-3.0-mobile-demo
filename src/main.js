import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import './styles/index.scss'

// 路由规则
import './pemission'

// 过滤器
import * as filters from './filters'

// mock 请求
import './mock'


// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
