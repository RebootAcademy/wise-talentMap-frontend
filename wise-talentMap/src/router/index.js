import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Layout from '@/layouts/Layout.vue'
import MapLayout from '@/layouts/MapLayout.vue'
import MapView from '@/views/MapView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import LegalView from '@/views/LegalView.vue'
import CookiesPolicy from '@/views/CookiesPolicy.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Admin/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'landing-page',
          component: LandingPage,
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: PrivacyView,
        },
        {
          path: 'legal',
          name: 'legal',
          component: LegalView,
        },
        {
          path: 'cookies',
          name: 'cookies',
          component: CookiesPolicy,
        },
      ],
    },

    {
      path: '/talentmap',
      name: 'talent-map',
      component: MapLayout,
      children: [
        {
          path: '',
          component: MapView,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Layout,
      children: [{path: '', name: 'login', component: Login}],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Layout,
      children: [{path: '', name: 'not-found', component: NotFound}],
    }
  ],
})

export default router
