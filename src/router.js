import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abc',
      name: 'abc',
      component: () => import('./views/abc.vue')
    },
    {
      path: '/abc2',
      name: 'abc2',
      component: () => import('./views/abc2.vue')
    },
    {
      path: '/abc3',
      name: 'abc3',
      component: () => import('./views/abc3.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/akc3',
      name: 'akc3',
      component: () => import('./views/akc3.vue')
    },
    {
      path: '/dhc',
      name: 'dhc',
      component: () => import('./views/dhc.vue')
    },
  ]
})
