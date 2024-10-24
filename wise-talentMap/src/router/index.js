import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import MapLayout from '@/layouts/MapLayout.vue'
import MapView from '@/views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/talentmap',
      name: 'talent map',
      component: MapLayout,
      children: [
        {
          path: '',
          component: MapView
        }
      ]
    }
    /*  {
       path: '/statistics',
       name: 'statistics',
       // route level code-splitting
       // this generates a separate chunk (About.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import('../views/Statistics.vue')
     } */
  ]
})

export default router
