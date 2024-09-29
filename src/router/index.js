import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // 这里将 HomeView 改为 Home

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // 这里保持不变，指向引入的 Home
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/Explore.vue')
    },
    {
      path: '/creatdemo',
      name: 'creatdemo',
      component: () => import('../views/Creatdemo.vue')
    },
    {
      path: '/howto',
      name: 'howto',
      component: () => import('../views/Howto.vue')
    }
  ]
})

export default router

