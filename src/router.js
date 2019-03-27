import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/menu/home.vue'),
            children: [
                {
                    path: '/home/seria',
                    component: () => import('./views/seria/seria.vue'),
                    children: [
                        {
                            path: '/home/se1',
                            component: () => import('./views/seria/se1.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/mine',
            component: () => import('./views/menu/mine.vue'),
            children: [
                {
                    path: '/mine/history',
                    component: () => import('./views/mine/histroy.vue')
                },
                {
                    path: '/mine/qrcode',
                    component: () => import('./views/mine/qrcode.vue')
                },
                {
                    path: '/mine/order',
                    component: () => import('./views/mine/reorder.vue')
                },
                {
                    path: '/mine/member',
                    component: () => import('./views/mine/reorder.vue')
                }, {
                    path: '/mine/level',
                    component: () => import('./views/mine/reorder.vue')
                }, {
                    path: '/mine/address',
                    component: () => import('./views/mine/reorder.vue')
                }, {
                    path: '/mine/share',
                    component: () => import('./views/mine/reorder.vue')
                }, {
                    path: '/mine/service',
                    component: () => import('./views/mine/reorder.vue')
                }, {
                    path: '/mine/setting',
                    component: () => import('./views/mine/reorder.vue')
                },
            ]
        },
        {
            path: '/Login',
            component: () => import('./views/login/login.vue'),
            children: [
                {
                    path: '/Login/loinin',
                    component: () => import('./views/login/loinin.vue')
                },
                {
                    path: '/Login/signin',
                    component: () => import('./views/login/signin.vue')
                }
            ]
        }
    ]
});

// 路由跳转之前
router.beforeEach((to, from, next) => {
    console.log('routers');
    next();
})


export default router;