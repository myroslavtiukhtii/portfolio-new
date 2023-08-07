import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LandingViewVue from '../views/LandingView.vue';
import VueViewVue from '../views/VueView.vue';
import JavascriptVue from '../views/JavascriptView.vue';
import YoutubeApi from '../views/YoutubeApi.vue';
import NasaApi from '../views/NasaApi.vue';
import PictureDay from '../views/nasa/PictureDay.vue';
import EpiCamera from '../views/nasa/EpiCamera.vue';
import StocksApi from '../views/StocksApi.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/yotubeapi',
      name: 'youtube',
      component: YoutubeApi
    },
    {
      path: '/nasaapi',
      name: 'nasaapi',
      component: NasaApi,
      children: [
        {
          path: '',
          name: 'apod',
          component: PictureDay
        },
        {
          path: '/epic',
          name: 'epic',
          component: EpiCamera
        }
      ]
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: StocksApi
    }
  ]
})

export default router
