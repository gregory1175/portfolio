import { createRouter, createWebHistory } from 'vue-router'

import Portfolio from '@/templates/portfolioPage.vue'
import Main from '@/templates/homePage.vue'
import Links from '@/templates/linksPage.vue'
import Projects from '@/templates/projectsPage.vue'
import ProjectDetail from '@/components/projects/projectDetails/projectDetails.vue'
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
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/projects/:id',
      name: 'projectDetail',
      component: ProjectDetail,
      props: true,
    },
  ],
})

export default router
