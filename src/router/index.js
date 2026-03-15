import Article from "@/views/Article.vue";
import Collect from "@/views/Collect.vue";
import Detail from "@/views/Detail.vue";
import Layout from "@/views/Layout.vue";
import Like from "@/views/Like.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import User from "@/views/User.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    {
      path: "/",
      component: Layout,
      redirect: "/article",
      children: [
        { path: "/article", component: Article },
        { path: "/like", component: Like },
        { path: "/collect", component: Collect },
        { path: "/user", component: User },
      ],
    },
    { path: "/article/:id", component: Detail },
  ],
});

export default router;
