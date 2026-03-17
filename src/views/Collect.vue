<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<script>
import { getArticlesCollect } from "@/api/article";
export default {
  name: "collect-page",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  methods: {
    async onLoad() {
      // 1. 更新数据
      const { data } = await getArticlesCollect({ page: this.page });
      this.list.push(...data.rows);
      this.loading = false;
      this.page++;
      // 2. 结束文本
      if (this.page > data.pageTotal) {
        this.finished = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
