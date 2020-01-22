import Vue from 'vue'
import VueRouter from 'vue-router'
import Categories from "../views/Categories";
import Videos from "../views/Videos";
import VideoContent from "../views/VideoContent";
import CategoryVideos from "../views/CategoryVideos";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'categories',
        component: Categories
    },
    {
        path: '/all-videos',
        name: 'all-Videos',
        component: Videos
    },
    {
        path: '/video',
        name: 'video',
        component: VideoContent
    },
    {
        path: '/videos-of-category',
        name: 'videos-of-category',
        component: CategoryVideos
    }
]

const router = new VueRouter({
    routes
})

export default router