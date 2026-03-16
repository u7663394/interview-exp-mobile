<template>
  <div class="login-page">
    <!-- 头部 -->
    <van-nav-bar title="登陆" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[\u4e00-\u9fa5\w]{2,}$/,
            message: '用户名至少包含2个字符',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少6位' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
    <!-- 跳转注册页 -->
    <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      // 1. 发请求
      const res = await login(values);
      // 2. 成功的 toast
      this.$toast.success("登陆成功");
      // 3. 存入 token
      localStorage.setItem("vant-moblie-exp-token", res.data.data.token);
      // 4. 跳转首页
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
