import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Intro.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anim',
    name: 'Anim',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Anim.vue')
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Info.vue')
  }
]

export function goToAnim(){
  router.push(routes[1]);
}

export function goToHome(){
  router.push(routes[0]);
}

export function goToInfo(){
  router.push(routes[2]);
}

const router = new VueRouter({
  routes
})

export default router
