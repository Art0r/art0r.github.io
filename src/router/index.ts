import App from '@/App.vue'
import Blog from '@/pages/Blog.vue'
import Home from '@/pages/Home.vue'
import Post from '@/pages/Post.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'blog', path: '/blog', component: Blog },
    { name: 'post', path: '/blog/post/:slug', component: Post },
  ],
})

export default router
