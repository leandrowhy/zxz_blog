/*
 * @Description:
 * @Author: leandrowhy
 * @Date: 2020-12-25 16:59:31
 * @LastEditTime: 2021-12-30 14:53:28
 * @LastEditors: Please set LastEditors
 * @FilePath: \front-end\vue.config.js
 * 希望此代码无bug~
 */
const path = require('path')
//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  publicPath: '/',
  productionSourceMap: false, // 是否需要生产环境的 source map（减小dist文件大小，加速构建）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.clowned.cn', //目标地址
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { '^/api': '/api' } //这里重写路径
      },
      '/qqmusic': {
        target: 'http://qqmusic-api.clowned.cn/',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/qqmusic': '/' }
      }
    }
  }
}
