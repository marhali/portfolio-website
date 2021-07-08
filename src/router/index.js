import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import Landing from '@/views/Landing'

Vue.use(VueHead)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
