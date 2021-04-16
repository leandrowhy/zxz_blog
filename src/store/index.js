import Vue from "vue";
import Vuex from "vuex";
import { getArticleHot } from "@/api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enter: {},
    chat: {
      contact: [
        {
          date: "2021-01-12 13:54:02",
          speaker: "5645645",
          context: "周杰 yyds",
          category: 66,
          id: 288,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:53:52",
          speaker: "5645645",
          context: "君子好逑",
          category: 66,
          id: 287,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:53:39",
          speaker: "5645645",
          context: "窈窕淑女",
          category: 66,
          id: 286,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:53:34",
          speaker: "5645645",
          context: "在河之洲",
          category: 66,
          id: 285,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:53:28",
          speaker: "5645645",
          context: "关关雎鸠",
          category: 66,
          id: 284,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 12:56:19",
          speaker: "5645645",
          context: "😁",
          category: 66,
          id: 283,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2020-11-27 17:17:17",
          speaker: "5645645",
          context: "最是人间留不住，朱颜辞镜花辞树",
          category: 66,
          id: 277,
          speakerName: "悠哉",
          avatar: "UserAvatar/20210201012603.jpeg",
        },
      ],
      reply: [
        {
          date: "2020-11-27 17:17:32",
          speaker: "5645645",
          answer: "5645645",
          context: "emmmm😴",
          category: 66,
          id: 153,
          aritcleid: 277,
          answerName: "悠哉",
          answerAvatar: "UserAvatar/20210201012603.jpeg",
          speakerName: "悠哉",
          speakerAvatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 12:56:13",
          speaker: "5645645",
          answer: "5645645",
          context: "测试一哈",
          category: 66,
          id: 154,
          aritcleid: 277,
          answerName: "悠哉",
          answerAvatar: "UserAvatar/20210201012603.jpeg",
          speakerName: "悠哉",
          speakerAvatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:48:02",
          speaker: "5645645",
          answer: "5645645",
          context: "略略略",
          category: 66,
          id: 155,
          aritcleid: 277,
          answerName: "悠哉",
          answerAvatar: "UserAvatar/20210201012603.jpeg",
          speakerName: "悠哉",
          speakerAvatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:48:08",
          speaker: "5645645",
          answer: "5645645",
          context: "emmmm",
          category: 66,
          id: 156,
          aritcleid: 277,
          answerName: "悠哉",
          answerAvatar: "UserAvatar/20210201012603.jpeg",
          speakerName: "悠哉",
          speakerAvatar: "UserAvatar/20210201012603.jpeg",
        },
        {
          date: "2021-01-12 13:54:43",
          speaker: "5645645",
          answer: "5645645",
          context: "😣",
          category: 66,
          id: 157,
          aritcleid: 287,
          answerName: "悠哉",
          answerAvatar: "UserAvatar/20210201012603.jpeg",
          speakerName: "悠哉",
          speakerAvatar: "UserAvatar/20210201012603.jpeg",
        },
      ],
    },
    enterHot: [],
  },
  mutations: {
    getEnterHot(state, data) {
      state.enterHot = data;
    },
  },
  actions: {
    getArticleHot(content) {
      getArticleHot().then((res) => {
        content.commit("getEnterHot", res.data.content);
      });
    },
  },
  modules: {},
});
