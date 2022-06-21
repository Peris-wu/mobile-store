import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(VueRouter)

const Category = () => import('@/views/Category')
const Cart = () => import('@/views/Cart')
const My = () => import('@/views/My')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }
]

const router = new VueRouter({
  routes
})

export default router
