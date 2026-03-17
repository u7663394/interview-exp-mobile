<template>
  <div class="article-page">
    <!-- 头部导航 -->
    <nav class="my-nav van-hairline--bottom">
      <a href="javascript:;">推荐</a>
      <a href="javascript:;">最新</a>
      <div class="logo"><img src="@/assets/logo.png" alt="logo" /></div>
    </nav>
    <!-- 单元格 -->
    <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
export default {
  name: "article-page",
  data() {
    return {
      list: [], // 文章列表
      current: 1,
      sorter: "weight_desc",
    };
  },
  methods: {},
  async created() {
    // 1. 发请求得到数据
    const res = await getArticles({
      current: this.current,
      pageSize: 10,
      sorter: this.sorter,
    });
    // 2. 存数据
    this.list = res.data.data.rows;
  },
};
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
