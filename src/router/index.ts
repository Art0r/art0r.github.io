import Blog from '@/pages/Blog.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'blog', path: '/blog', component: Blog },
  ],
})

export default router
