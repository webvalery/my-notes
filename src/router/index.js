import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from 'pages/Home/HomePage.vue'
import User from 'pages/Profile/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

if (localStorage.getItem('userToken')) {
  const userToken = JSON.parse(localStorage.getItem('userToken'))

  if (userToken && userToken.token) {
    store.commit('auth/SET_USER_INFO', userToken.token)
  }
}

router.beforeEach((to, _from, next) => {
  const token = store.getters['auth/token']

  if (to.meta.auth && !token) {
    next('/')
  } else if (!to.meta.auth && token) {
    next('/user')
  } else {
    next()
  }
})

export default router
