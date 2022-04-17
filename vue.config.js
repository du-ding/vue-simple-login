const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const productionGzipExtensions = ["js", "css"];


module.exports = {
  //自动保存更新的代码
  // chainWebpack: (config) => {
  // config.module
  // .rule("eslint")
  // .use("eslint-loader")
  // .loader("eslint-loader")
  // .tap((options) => {
  // options.fix = true;
  // return options;
  // });
  // },
  devServer: {
    port: 8080,
    open: true,
  },
  publicPath: "./", //解决打包时静态资源文件路径不正确问题
  assetsDir: "static",
  parallel: false,
  //启用gzip，加速首次渲染时间
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100,
      }),
    ],
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件,减少打包大小
};
