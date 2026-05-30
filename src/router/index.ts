import App from '@/App.vue'
import Home from '@/Home.vue'
import Post from '@/Post.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'post', path: '/home', component: Post },
    { name: 'home', path: '/', component: Home },
  ],
})

export default router
