// 存放与用户相关的请求函数
import reqsuet from "@/utils/request";
// 1. 注册
export const register = (data) => {
  return reqsuet.post("/user/register", data);
};
