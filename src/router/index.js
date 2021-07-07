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
  },
  {
    path: '/tools/open-graph-tester',
    name: 'OpenGraphTester',
    component: () => import('@/views/tools/OpenGraphTester')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
