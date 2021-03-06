import Vue from 'vue'
import VueRouter from 'vue-router'
import Categories from "../views/Categories";
import AllVideos from '../views/AllVideos';
import SingleVideo from "../views/SingleVideo";
import CategoryVideos from "../views/CategoryVideos";
import Login from "../views/Login"
import Register from "../views/Register";
import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/categories",
        name: "categories",
        component: Categories
    },
    {
        path: "/all-videos",
        name: "all-Videos",
        component: AllVideos
    },
    {
        path: "/:videoId/video",
        name: "video",
        props: true,
        component: SingleVideo
    },
    {
        path: "/:categoryId/videos",
        name: "videos-of-category",
        props: true,
        component: CategoryVideos
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/Register",
        name: "register",
        component: Register
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router