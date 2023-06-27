import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LandingViewVue from '../views/LandingView.vue';
import VueViewVue from '../views/VueView.vue';
import JavascriptVue from '../views/JavascriptView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: LandingViewVue
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueViewVue
    },
    {
      path: '/js',
      name: 'js',
      component: JavascriptVue
    },
  ]
})

export default router
