import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '首页',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/login',
            name: '登录',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: '注册',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/publish',
            name: '发布',
            component: () => import('./views/Publish.vue')
        },{
            path: '/detail',
            name: '查看评论',
            component: () => import('./views/Detail.vue')
        },
        {
            path: '/*',
            name: '404',
            component: () => import('./views/NotFound.vue')
        },

    ]
})
