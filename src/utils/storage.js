// 此模块用于封装有关本地 token 的函数
const KEY = "vant-moblie-exp-token";

// 1. 获取 token
export const getToken = () => {
  return localStorage.getItem(KEY);
};

// 2. 设置 token
export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken);
};

// 3. 删除 token
export const delToken = () => {
  localStorage.removeItem(KEY);
};
