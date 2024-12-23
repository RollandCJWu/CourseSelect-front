import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Forbidden from "@/views/Forbidden.vue";

import Login from "@/views/secure/Login.vue";

import User from "@/views/user/User.vue";

const routes = [
    { path: "/", name: "home-link", component: Home },
    { path: "/:pathMatch(.*)", name: "notfound-link", component: NotFound },
    { path: "/403", name: "forbidden-link", component: Forbidden },

    { path: "/secure/login", name: "login-link", component: Login },

    { path: "/user", name: "user-link", component: User },
];

export default createRouter({
    history: createWebHistory(),
    routes: routes
});
