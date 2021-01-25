import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import beforeEnter from "@/utils"
import appRouter from "./appRouter.js"
import Login from "@/views/Login.vue"
import beforeEnter from "../utils/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "app",
    beforeEnter: beforeEnter,
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [
      appRouter
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export default router
