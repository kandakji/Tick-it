import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'listing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Listing.vue')
  },
  {
    path: '/onsale/:id',
    name: 'onSale',
    component: () => import('../views/OnSale.vue')
  },
  {
    path: '/requested/:id',
    name: 'requested',
    component: () => import('../views/Requested.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
