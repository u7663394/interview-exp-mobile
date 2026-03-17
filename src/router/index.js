import { getToken } from "@/utils/storage";
const Article = () => import("@/views/Article.vue");
const Collect = () => import("@/views/Collect.vue");
const Detail = () => import("@/views/Detail.vue");
const Layout = () => import("@/views/Layout.vue");
const Like = () => import("@/views/Like.vue");
const Login = () => import("@/views/Login.vue");
const Register = () => import("@/views/Register.vue");
const User = () => import("@/views/User.vue");
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
