<template>
  <div id="app">
    <router-view> </router-view>
    <!-- Test postcss -->
    <div class="box"></div>
  </div>
</template>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
