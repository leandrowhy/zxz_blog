import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//animate.css 动画库
// import "./assets/css/animate.min.css"
//element Ui 组件
import "./plugin/index.js";
//css默认样式初始化
import "./assets/css/base.css";
//css公共样式
import "./assets/css/common.css";

//bus总线
Vue.prototype.$bus = new Vue();

import VueLazyload from "vue-lazyload";

//vue图片懒加载
Vue.use(VueLazyload, {
  // loading: require("./assets/lazy/loding.gif"), //加载中图片，一定要有，不然会一直重复加载占位图
  // error: require("./assets/lazy/erro.jpg"), //加载失败图片
});

import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);

//页面加载进度条
// 引入
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { from } from "core-js/core/array";
// 进度条配置项这样写
NProgress.configure({
  showSpinner: false,
  minimum: 0.3,
  trickleRate: 1,
  trickleSpeed: 800,
  speed: 500,
});

Vue.prototype.$show = function() {
  NProgress.done(true);
  setTimeout(() => {
    store.commit("setIsShow", true);
  }, 800);
};

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
