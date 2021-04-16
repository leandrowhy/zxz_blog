<template>
  <div id="app">
    <tab-bar />
    <router-view />
    <div
      title="点击返回顶部"
      class="back-top"
      :style="{ transform: `translateY(${moveHeight})` }"
      @click="goTop"
    ></div>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/tabBar";

//节流函数
import fnThrottle from "@/tools/fnThrottle";
export default {
  components: {
    tabBar,
  },
  name: "App",
  data() {
    return {
      moveHeight: "-100%",
    };
  },
  created() {
    this.$store.dispatch("getArticleHot");
  },
  mounted() {
    this.listenerFunction();
  },
  methods: {
    // 回到顶部
    goTop() {
      document.getElementsByClassName("studymain-shell")[0]
        ? (document.getElementsByClassName("studymain-shell")[0].scrollTop = 0)
        : (document.documentElement.scrollTop = 0);
    },
    //监听滚动时间
    listenerFunction(e) {
      document.addEventListener("scroll", this.handleScroll, true);
    },
    //处理返回顶部div 是否显示
    handleScroll() {
      let that = this;
      fnThrottle(fnContnt(), 300);
      function fnContnt() {
        that.moveHeight = that.getScrollTop() > 400 ? "0%" : "-100%";
      }
    },
    //获取滚动条高度
    getScrollTop() {
      let scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
      } else if (document.body) {
        scroll_top = document.body.scrollTop;
      }
      return scroll_top;
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
};
</script>

<style lang="scss">
@import url("//at.alicdn.com/t/font_2294844_97n5p59fg74.css");
@import url("./assets/css/markdown.css");
.back-top {
  position: fixed;
  right: 30px;
  top: 0;
  z-index: 666;
  width: 70px;
  height: 900px;
  background: url("./assets/img/back-top.png") no-repeat bottom/cover;
  transition: all 0.6s;
  cursor: pointer;
}
</style>
