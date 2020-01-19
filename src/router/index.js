import Vue from 'vue'
import VueRouter from 'vue-router'
import Categories from "../views/Categories";
import Videos from "../views/Videos";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories',
    component: Categories
  },
  {
    path: '/all-videos',
    name: 'all-Videos',
    component: Videos
  }
]

const router = new VueRouter({
  routes
})

export default router
