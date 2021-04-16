import Vue from "vue";
import VueRouter from "vue-router";
import { Notification } from "element-ui";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/Music/Music.vue"),
  },
  {
    path: "/essay",
    name: "Essay",
    component: () => import("../views/Essay/Essay.vue"),
  },
  {
    path: "/study/details/:id",
    name: "Studydetails",
    component: () => import("../views/Studydetails/Studydetails.vue"),
  },
  {
    path: "/picture",
    name: "Picture",
    component: () => import("../views/Picture/Picture.vue"),
    meta: {
      perfect: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About/About.vue"),
    meta: {
      perfect: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
    meta: {
      perfect: true,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact/Contact.vue"),
    meta: {
      perfect: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

import NProgress from "nprogress";
// 路由跳转前钩子函数中 - 执行进度条开始加载
router.beforeEach((to, from, next) => {
  if (to.meta.perfect) {
    Notification({
      title: "警告",
      message: "暂未开放~",
      type: "warning",
    });
  }
  if (to.params.id !== from.params.id) {
    NProgress.start();
    // NProgress.inc();
    store.commit("setIsShow", false);
  }
  next();
});

export default router;
