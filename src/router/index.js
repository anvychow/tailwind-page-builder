import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Config from '@/views/config';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/config',
    name: 'config',
    component: Config,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
