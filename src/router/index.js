import Detail from "@/views/Detail.vue";
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/layout", component: Layout },
    { path: "/article/:id", component: Detail },
  ],
});

export default router;
