import { getToken } from "@/utils/storage";
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

// 1. 配置路由
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

// 2. 全局前置守卫: 拦截处理
const whiteList = ["/login", "/register"];
router.beforeEach((to, from, next) => {
  const token = getToken();
  // 2.1. 有 token 放行
  if (token) {
    return next();
  }
  // 2.2. 如果去 whiteList, 放行
  if (whiteList.includes(to.path)) {
    return next();
  }
  // 2.3. 否则拦截
  return next("/login");
});

export default router;
