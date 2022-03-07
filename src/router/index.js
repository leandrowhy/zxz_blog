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
    meta: {
      index: 0,
    },
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/Music/Music.vue"),
    meta: {
      index: 2,
    },
  },
  {
    path: "/essay",
    name: "Essay",
    component: () => import("../views/Essay/Essay.vue"),
    meta: {
      index: 1,
    },
  },
  {
    path: "/study/details/:id",
    name: "Studydetails",
    component: () => import("../views/Studydetails/Studydetails.vue"),
    meta: {
      index: 1,
    },
  },
  {
    path: "/picture",
    name: "Picture",
    component: () => import("../views/Picture/Picture.vue"),
    meta: {
      index: 1,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About/About.vue"),
    meta: {
      perfect: false,
      index: 3,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
    meta: {
      index: 4,
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact/Contact.vue"),
    meta: {
      perfect: false,
      index: 3,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User/User.vue"),
    redirect: "/user/home",
    meta: {
      index: 4,
    },
    children: [
      {
        path: "home",
        name: "UserHome",
        component: () => import("../views/User/UserHome.vue"),
        meta: {
          index: 4,
          perfect: true,
        },
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("../views/User/UserProfile.vue"),
        meta: {
          index: 4,
          perfect: true,
        },
      },
      {
        path: "fav",
        name: "Fav",
        component: () => import("../views/User/UserFav.vue"),
        meta: {
          index: 4,
          perfect: true,
        },
      },
    ],
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
      offset: 100
    });
  }
  if (to.name == "Studydetails") {
    NProgress.start();
    store.commit("setIsShow", false);
    store.commit("setIsShow", true);
  } else if (to.params.id != from.params.id) {
    NProgress.start();
    // NProgress.inc();
    store.commit("setIsShow", false);
  }
  if (to.path == from.path) {
    NProgress.done(true);
  }
  next();
});

export default router;
