// 存放与文章相关的请求函数
import reqsuet from "@/utils/request";
import { getToken } from "@/utils/storage";

// 1. 获取文章列表
export const getArticles = (obj) => {
  const token = getToken();
  return reqsuet.get("/interview/query", {
    params: {
      current: obj.current || 1, // 当前页 (默认1)
      pageSize: obj.pageSize || 10, // 每页条数 (默认10)
      sorter: obj.sorter, // 排序
    },
    headers: {
      Authorization: `Bearer ${token}`, // 请求头携带 token
    },
  });
};
