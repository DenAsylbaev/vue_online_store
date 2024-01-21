import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../pages/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartView.vue'),
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../pages/ProductView.vue'),
    props: true
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../pages/CatalogView.vue'),
    props: true
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
