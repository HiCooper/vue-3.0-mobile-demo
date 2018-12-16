import router from './router'
import {getUserInfo} from './utils'

const whiteList = ['/login', '/register'];// no redirect whitelist

router.beforeEach((to, from, next) => {
    const userInfo = getUserInfo();
    if (userInfo) {
        if (to.path === '/login') {
            sessionStorage.clear();
        }
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            sessionStorage.clear();
            next('/login'); // 否则全部重定向到登录页
        }
    }
});
