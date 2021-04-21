<template>
  <div class="home">
    <div class="banner">
      <carousel :banner="banner" />
      <div class="banner-aside">
        <div class="_block" :title="aside[0].title">
          <div
            class="bg-img _block-bgmove"
            :style="{ 'background-image': `url('${aside[0].img}')` }"
          ></div>
        </div>
        <div class="_block" :title="aside[1].title">
          <img v-lazy="aside[1].img" />
        </div>
      </div>
    </div>
    <div class="container home-main">
      <aside class="home-left"><home-aside :homeInfo="homeInfo" /></aside>
      <div class="home-center"><HomeAsideCenter /></div>
      <aside class="home-right"><homeAsideRight /></aside>
    </div>
  </div>
</template>
<script>
import carousel from "@/components/carousel/carousel";
import homeAside from "@/views/Home/homeAside";
import homeAsideRight from "@/views/Home/homeAsideRight";
import HomeAsideCenter from "@/views/Home/HomeAsideCenter";
import { getArticle, getHomeInfo } from "@/api/api";
export default {
  name: "Home",
  components: {
    carousel,
    homeAside,
    homeAsideRight,
    HomeAsideCenter,
  },
  data() {
    return {
      banner: [],
      aside: [
        {
          id: 2342,
          title: "前往图片区",
          img: require("@/assets/img/20200805053247.jpg"),
        },
        {
          id: 2342,
          title: "前往图片区",
          img: require("@/assets/img/5fb1f290df867.jpg"),
        },
      ],
      homeInfo: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getArticle({ pageNumber: 1, pageSize: 3 }).then((res) => {
        this.banner = res.data.content;
        this.$show();
      });
      getHomeInfo().then((res) => {
        this.homeInfo = res.data;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  background: #f4f5f7;
}
.banner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 380px;
  grid-template-rows: 1fr;
  width: 85%;
  margin: 0 auto;
  height: 36vw;
  margin-bottom: 20px;
  min-width: 1400px;
  min-height: 440px;
  .banner-aside {
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 162px;
    grid-template-columns: 1fr;
    ._block {
      width: 100%;
      border: 3px solid #fff;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(218, 99, 99, 0.1);
      overflow: hidden;
      cursor: pointer;
      &:first-child {
        margin-bottom: 16px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bg-img {
      width: 100%;
      height: 100%;
    }
    ._block-bgmove {
      background-size: cover;
      animation: bgmove 16s linear infinite alternate;
    }
  }
}
@keyframes bgmove {
  0% {
    background-position: 0, 0;
    filter: blur(0);
  }
  20%,
  60% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  100% {
    background-position: 100% 100%;
  }
}
.home-main {
  position: sticky;
  top: 100px;
  width: 73%;
}
.home-left,
.home-right {
  display: inline-block;
  position: sticky;
  height: fit-content;
  top: -160px;
}
.home-right {
  top: -330px;
}
.home-left {
  width: 260px;
}
.home-center {
  flex: 1;
  margin: 0 60px;
  overflow: unset;
  margin-bottom: 60px;
}
.home-right {
  width: 320px;
}
</style>
