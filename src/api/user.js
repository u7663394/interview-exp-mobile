// 存放与用户相关的请求函数
import request from "@/utils/request";

// 1. 注册
export const register = (data) => {
  return request.post("/user/register", data);
};

// 2. 登陆
export const login = (data) => {
  return request.post("/user/login", data);
};

// 3. 获取个人信息
export const getUserInfo = () => {
  return request.get("user/currentUser");
};
