import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkPage from '../views/WorkPage.vue' 
import ServiceView from '../views/ServiceView.vue' 
import ContactView from '../views/ContactView.vue' 
import PriceView from '../views/PriceView.vue' 
import BlogView from '../views/BlogView.vue' 
import LoginView from '../views/LoginView.vue' 
import FaqView from '../views/FaqView.vue' 
import AboutView from '../views/AboutView.vue' 

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'home',
    component: AboutView
  },
  {
    path: '/ServiceView',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/WorkPage',
    name: 'WorkPage',
    component: WorkPage
  },
  {
    path: '/PriceView',
    name: 'PriceView',
    component: PriceView
  },
  {
    path: '/FaqView',
    name: 'FaqView',
    component: FaqView
  },
  {
    path: '/BlogView',
    name: 'BlogView',
    component: BlogView
  },
  {
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
