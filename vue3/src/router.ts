import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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

export default createRouter({
  history: createWebHashHistory(),
  routes
})