import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/home',
      name: '首页',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    }
  ]
})
