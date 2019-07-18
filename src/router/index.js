import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home'),
      meta: {
        title: '主页',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;