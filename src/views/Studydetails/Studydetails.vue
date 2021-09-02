<template>
  <div class="details">
    <div class="bg_active">
      <img class="bg-img" v-lazy="enter.img" />
    </div>
    <div class="study-main">
      <!-- <el-scrollbar style="height: 100vh" ref="docbox"> -->
        <div class="studymain-shell">
          <aside class="bot-left"><AsideLeft :enter="enter" /></aside>
          <div class="bot-content"><StudyContent :enter="enter" /></div>
          <div class="bot-right"><AsideRight :bgimg="enter.img" /></div>
        </div>
      <!-- </el-scrollbar> -->
    </div>
  </div>
</template>

<script>
import AsideLeft from "@/views/Studydetails/AsideLeft";
import StudyContent from "@/views/Studydetails/StudyContent";
import AsideRight from "@/views/Studydetails/AsideRight";
//api
import { getArticleInfo } from "@/api/api";
//节流函数
import fnThrottle from "@/tools/fnThrottle";
export default {
  name: "Studydetails",
  components: {
    AsideLeft,
    StudyContent,
    AsideRight,
  },
  data() {
    return {
      code: "",
      id: 0,
      enter: {
        img: require("../../assets/img/20200204113055.jpg"),
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
      let id = (this.id = this.$route.params.id);
      getArticleInfo({ id }).then((res) => {
        this.enter = res.data.content;
        this.$show();
      });
    },
    handleScroll() {
      let backTop = document.getElementsByClassName("back-top")[0];
      let scrollbarEl = this.$refs.docbox.wrap;
      scrollbarEl.onscroll = () => {
        fnThrottle(fnContnt(backTop), 300);
      };
      function fnContnt(backTop) {
        let moveHeight = scrollbarEl.scrollTop > 400 ? "0%" : "-100%";
        backTop.style.transform = `translateY(${moveHeight})`;
      }
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.id != from.params.id) {
        this.getData();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.details {
  overflow-x: hidden;
}
.bg_active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  &::before {
    background: hsla(0, 0%, 100%, 0.4);
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }
  .bg-img {
    width: 100%;
    height: 100%;
  }
}
.studymain-shell {
  display: flex;
}
.bot-left {
  position: sticky;
  top: -360px;
  margin-top: 40px;
  margin-left: calc((52% - 640px) / 2);
  width: 260px;
  z-index: 10;
}
.bot-content {
  margin: 0 60px;
  margin-top: 60px;
  width: 48%;
  padding-bottom: 100px;
  height: fit-content;
}
.bot-right {
  position: sticky;
  top: -150px;
  width: 260px;
  margin-top: 60px;
  z-index: 10;
}
</style>
