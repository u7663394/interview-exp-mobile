// 存放与文章相关的请求函数
import request from "@/utils/request";

// 1. 获取文章列表
export const getArticles = (obj) => {
  return request.get("/interview/query", {
    params: {
      current: obj.current || 1, // 当前页 (默认1)
      pageSize: obj.pageSize || 10, // 每页条数 (默认10)
      sorter: obj.sorter, // 排序
    },
  });
};

// 2. 获取文章详情
export const getArticleDetail = (id) => {
  return request.get("interview/show", {
    params: {
      id,
    },
  });
};

// 3. 点赞
export const updateLike = (id) => {
  return request.post("interview/opt", {
    id,
    optType: 1, // 点赞
  });
};

// 4. 收藏
export const updateCollect = (id) => {
  return request.post("interview/opt", {
    id,
    optType: 2, // 收藏
  });
};

// 5. 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get("/interview/opt/list", {
    params: {
      page: obj.page, // 当前页
      pageSize: 5,
      optType: 2,
    },
  });
};

// 6. 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get("/interview/opt/list", {
    params: {
      page: obj.page, // 当前页
      pageSize: 5,
      optType: 1,
    },
  });
};
