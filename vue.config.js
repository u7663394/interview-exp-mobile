const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 打包后是相对路径
  publicPath: "./",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            blue: "#FA6D1D",
          },
        },
      },
    },
  },
});
