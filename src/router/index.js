import Vue from 'vue'
import VueRouter from 'vue-router'
import Categories from "../views/Categories";
import AllVideos from '../views/AllVideos';
import SingleVideo from "../views/SingleVideo";
import CategoryVideos from "../views/CategoryVideos";

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
    component: AllVideos
  },
  {
    path: '/video',
    name: 'video',
    component: SingleVideo
  },
  {
    path: '/:categoryId/videos',
    name: 'videos-of-category',
    props: true,
    component: CategoryVideos
  }
];

const router = new VueRouter({
    routes
})

export default router