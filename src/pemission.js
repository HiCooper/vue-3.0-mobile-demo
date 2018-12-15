import router from './router'


const whiteList = ['/login','/register'];// no redirect whitelist

router.beforeEach((to, from, next) => {
    console.log('to:',to.path)
    console.log('from:',from.path)
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    if (userInfo) { // determine if there has token
        /* has token*/
        if (to.path === '/login') {
            sessionStorage.removeItem('userInfo');
        }
        next()
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
        }
    }
});
