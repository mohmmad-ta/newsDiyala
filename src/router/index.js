import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsPage.vue'),
    },
    {
      path: '/problem',
      name: 'problem',
      component: () => import('../views/ProblemPage.vue'),
    },
  ],
})

export default router
