import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ShowView from '@/views/ShowView'

Vue.use(VueRouter)

const Category = () => import('@/views/Category')
const Cart = () => import('@/views/Cart')
const My = () => import('@/views/My')
const routes = [
  {
    path: '/',
    component: ShowView,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/jjm',
        name: 'Jjm',
        component: () => import('@/views/Jjm')
      }
    ]
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes
})
export default router
