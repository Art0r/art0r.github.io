import App from '@/App.vue'
import Post from '@/Post.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/home', component: Post },
  ],
})

export default router
