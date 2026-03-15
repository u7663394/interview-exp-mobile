<template>
  <div class="layout-page">
    <div>首页架子 - 内容区域</div>
    <!-- 底部导航栏 -->
    <van-tabbar>
      <van-tabbar-item icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutPage",
};
</script>

<style lang="less" scoped></style>
