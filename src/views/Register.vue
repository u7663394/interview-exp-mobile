<template>
  <div class="register-page">
    <!-- 头部 -->
    <van-nav-bar title="注册" />
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
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <!-- 跳转注册页 -->
    <router-link class="link" to="/login">有账号？去登陆</router-link>
  </div>
</template>

<script>
import { register } from "@/api/user";
export default {
  name: "RegisterPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // 表单提交
    async onSubmit(values) {
      // 1. 加载中的 toast
      this.$toast.loading({
        message: "注册中...",
        forbidClick: true,
      });
      // 2. 发请求
      await register(values);
      // 3. 成功的 toast
      this.$toast.success("注册成功");
      // 4. 跳转登陆页
      this.$router.push("/login");
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
