import Vue from "vue";
import Vuex from "vuex";
import { getArticleHot } from "@/api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enter: {},
    enterHot: [],
    isShow: false,
    token: null,
    userInfo: null,
    isLogin: false,
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setIsLogin(state, data) {
      state.isLogin = data;
    },
    setEnterHot(state, data) {
      state.enterHot = data;
    },
    setIsShow(state, data) {
      state.isShow = data;
    },
  },
  actions: {
    getArticleHot(content) {
      getArticleHot().then((res) => {
        content.commit("setEnterHot", res.data.content);
      });
    },
  },
  modules: {},
});
