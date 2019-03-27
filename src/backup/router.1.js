import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            // 会匹配所有路径
            path: '*',
            component: () => (import('./components/HelloWorld.vue'))
        },
        {
            path: '/',
            components: {
                default: () => (import('./components/HelloWorld.vue')),
                a: Foo,
                b: Bar
            }
        },
        {
            // 会匹配所有路径
            path: '/404',
            component: () => (import('./components/error/404.vue'))
        },
        {
            path: '/route',
            component: () => (import('./components/route.vue')),
            children: [
                {
                    path: 'foo',
                    component: Foo
                }, {
                    path: 'bar',
                    component: Bar
                }
            ]
        },
        {
            path: '/user/:id',
            component: () => (import('./components/login/users.vue'))
        }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     console.log(to, from, savedPosition);
    // }
})


export default router;