/*
 * @Description:
 * @Author: leandrowhy
 * @Date: 2020-12-25 16:59:31
 * @LastEditTime: 2021-08-30 17:08:22
 * @LastEditors: leandrowhy
 * @FilePath: \front-end\vue.config.js
 * 希望此代码无bug~
 */
const path = require('path');
//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
  },
  devServer: {
    proxy: {
      '/api': {
        // target: "http://localhost:3000", //目标地址
        target: 'http://api.clowned.cn', //目标地址
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { '^/api': '/' }, //这里重写路径
      },
    },
  },
};
