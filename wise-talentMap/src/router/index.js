import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Layout from '@/layouts/Layout.vue'
import MapLayout from '@/layouts/MapLayout.vue'
import MapView from '@/views/MapView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import LegalView from '@/views/LegalView.vue'


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
          path: '/privacy',
          name: 'privacy',
          component: PrivacyView,
        },
        {
          path: '/legal',
          name: 'legal',
          component: LegalView,
        }
      ],
    },
    {
      path: '/talentmap',
      name: 'talent map',
      component: MapLayout,
      children: [
        {
          path: '',
          component: MapView,
        },
      ],
    },
    /*  {
       path: '/statistics',
       name: 'statistics',
       // route level code-splitting
       // this generates a separate chunk (About.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import('../views/Statistics.vue')
     } */
  ],
})

export default router
