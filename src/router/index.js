import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ShowView from '@/views/ShowView'
import useLoginStore from '@/store/login'

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
        component: () => import('@/views/Jjm'),
        children: [
          {
            path: '',
            name: 'Jjm',
            component: () => import('@/views/Jjm/JjmContent')
          },
          {
            path: 'dhp',
            name: 'Dhp',
            component: () => import('@/views/Jjm/DhpContent')
          },
          {
            path: 'tgy',
            name: 'Tgy',
            component: () => import('@/views/Jjm/TgyContent')
          },
          {
            path: 'zpsx',
            name: 'Zpsx',
            component: () => import('@/views/Jjm/ZpsxContent')
          },
          {
            path: 'lj',
            name: 'Lj',
            component: () => import('@/views/Jjm/LjContent')
          },
          {
            path: 'bc',
            name: 'Bc',
            component: () => import('@/views/Jjm/BcContent')
          },
          {
            path: 'pe',
            name: 'Pe',
            component: () => import('@/views/Jjm/PeContent')
          },
          {
            path: 'mf',
            name: 'Mf',
            component: () => import('@/views/Jjm/MfContent')
          },
          {
            path: 'mlhc',
            name: 'Mlhc',
            component: () => import('@/views/Jjm/MlhcContent')
          },
          {
            path: 'zsxz',
            name: 'Zsxz',
            component: () => import('@/views/Jjm/ZsxzContent')
          }
        ]
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
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/Login/Login')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Login/SingIn')
      },
      {
        path: 'findPassword',
        name: 'FindPassword',
        component: () => import('@/views/Login/FindPassWord')
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()
  if (to.path === '/login') {
    if (!loginStore.isLogin) {
      next()
    }
  } else {
    next()
  }
})
export default router
