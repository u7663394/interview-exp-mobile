import axios from "axios";
import { Toast } from "vant";
import { delToken, getToken } from "./storage";
import router from "@/router/index";

// 1. 创建实例
const instance = axios.create({
  baseURL: "http://interview-api-t.itheima.net/h5/",
  timeout: 5000,
});

// 2. 配置: 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 统一携带 token
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 请求错误时
    return Promise.reject(error);
  }
);

// 3. 配置: 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 响应数据后: 统一数据剥离
    return response.data;
  },
  function (error) {
    // 响应错误时
    if (error.response) {
      // 401 表示 token 问题
      if (error.response.status === 401) {
        delToken(); // 清楚无效 token
        router.push("/login"); // 跳转到登陆页
      } else {
        // 其余问题，提示错误信息
        Toast.fail(error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

// 3. 导出
export default instance;
