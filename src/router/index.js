/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
//进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const NotFound = () =>
    import( /* webpackChunkName: "page" */ '@/components/notFound.vue');


let routes = [
    {
        path: '/',
        name: 'home',
        meta:{
            title: '首页'
        },
        component: () => import( /* webpackChunkName: "page" */ '@/page/Home/Home.vue')
    },
    {
        name: '404',
        path: '/404',
        meta:{
            title: '404'
        },
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]
const router = new Router({
    base: '/',
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    //对网页 title 进行改变
    const title = to.meta && to.meta.title;
    if (title) {
      document.title = title;
    }
    next();
})


router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})

export default router;