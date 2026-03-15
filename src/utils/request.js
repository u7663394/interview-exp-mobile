import axios from "axios";

// 1. 创建实例
const instance = axios.create({
  baseURL: "http://interview-api-t.itheima.net/h5/",
  timeout: 5000,
});

// 2. 配置: 请求/响应拦截器
instance.interceptors.request.use(
  function (config) {
    // 发送请求前
    return config;
  },
  function (error) {
    // 请求错误时
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // 响应数据后
    return response;
  },
  function (error) {
    // 响应错误时
    return Promise.reject(error);
  }
);

// 3. 导出
export default instance;
