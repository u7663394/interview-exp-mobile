import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/utils/vant-ui";

// 全局注册-通用组件
import ArticleItem from "./components/ArticleItem.vue";
Vue.component("ArticleItem", ArticleItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
