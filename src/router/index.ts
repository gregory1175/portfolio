import { createRouter, createWebHistory } from 'vue-router'

import Portfolio from '@/templates/homePortfolio.vue'
import Main from '@/templates/homeMain.vue'
import Links from '@/templates/linksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/links',
      name: 'links',
      component: Links,
    },
  ],
})

export default router
