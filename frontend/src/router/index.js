// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import AllFigure from '@/views/AllFigure';
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
            children: [
                {
                    path: '/all-figure',
                    component: AllFigure,
                    meta: { description: '전체 현황' }
                },
            ],
        },
    ]
});

router.beforeEach((to, from, next) => {
    store.commit('startSpinner');
    setTimeout(() => {
        next();
    }, 3);
})

router.afterEach((to, from) => {
    store.commit('endSpinner');
})

export default router