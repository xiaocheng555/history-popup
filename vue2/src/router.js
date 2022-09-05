import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    name: 'Home',
  },
  {
    path: '/A',
    component: () => import('./views/A.vue'),
    name: 'A',
  }
]

Vue.use(Router)

export default new Router({
  routes
})