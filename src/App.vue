<template>
  <div id="app" :class="{ scoll: showViewer }">
    <tab-bar />
    <!-- 内容 -->
    <router-view class="animated fadeIn" v-show="isShow" />
    <!-- 数据加载 过渡页 -->
    <div class="mask fadeOut" v-show="!isShow"></div>
    <!-- 返回顶部 -->
    <div
      title="点击返回顶部"
      class="back-top"
      :style="{ transform: `translateY(${moveHeight})` }"
      @click="goTop"
    ></div>
    <!-- 图片查看器 -->
    <el-image-viewer
      v-if="showViewer"
      :on-close="closeViewer"
      :url-list="urlList"
      :zIndex="2000"
    />
  </div>
</template>

<script>
import tabBar from "./components/tabBar/tabBar";
// 导入组件
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
//节流函数
import fnThrottle from "@/tools/fnThrottle";
export default {
  components: {
    tabBar,
    ElImageViewer,
  },
  name: "App",
  computed: {
    isShow() {
      return this.$store.state.isShow;
    },
  },
  data() {
    return {
      moveHeight: "-100%",
      showViewer: false, // 显示查看器
      urlList: [],
      scrollHeight: 0,
    };
  },
  created() {
    this.$store.dispatch("getArticleHot");
  },
  mounted() {
    this.listenerFunction();
    this.$bus.$on("onPreview", this.onPreview);
  },
  methods: {
    // 关闭查看器
    closeViewer() {
      this.showViewer = false;
      setTimeout(() => {
        document.documentElement.scrollTop = this.scrollHeight;
      }, 1);
    },
    onPreview(bom, list) {
      this.scrollHeight = this.getScrollTop();
      this.showViewer = bom;
      this.urlList = list;
    },
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
@import url("//at.alicdn.com/t/font_2294844_ca313iqx92.css");
@import "./assets/css/highlight.min.css";
@import "./assets/css/markdown.scss";

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
.mask {
  height: calc(100vh - 70px);
  background: #fff;
}
.details {
  overflow: hidden;
}
.scoll {
  overflow: hidden;
  height: 100vh;
}
</style>
