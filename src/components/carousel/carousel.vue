<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="hover" height="100%" ref="carousel" @change="updateCar">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <div class="carousel-info" @mouseover="addFilter(index)" @mouseout="moveFilter(index)">
          <p class="tj">
            <i class="el-icon-caret-right" style="color: red"></i>
            推荐文章
          </p>
          <p class="title" :title="item.title">{{ item.title }}</p>
          <span class="btn-right" @click="goRouter(item.id, item.img)" title="文章详情">
            READ MORE
          </span>
          <div class="tag-bot">
            <div class="el-icon-collection-tag">
              |
              <span class="hash" @click="next(index)" title="next 下一篇">Next</span>
            </div>
          </div>
        </div>
        <img v-lazy="item.img" ref="bgimg" />
      </el-carousel-item>
    </el-carousel>
    <div class="car-card">
      <img
        v-for="(item, index) in banner"
        :key="index"
        :class="{ 'is-active': index === activeIndex }"
        v-lazy="item.img"
        @mouseover="update(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    addFilter(i) {
      this.$refs.bgimg[i].style = 'filter: blur(5px)'
    },
    moveFilter(i) {
      this.$refs.bgimg[i].style = ''
    },
    // 更新当前轮播图
    update(i) {
      this.activeIndex = i
      this.$refs.carousel.setActiveItem(i)
    },
    // 更新卡片
    updateCar(now, old) {
      this.activeIndex = now
    },
    // 跳转路由 到详情页
    goRouter(id, img) {
      this.$router.push({ name: 'Studydetails', params: { id, img } })
    },
    // 下一个
    next(i) {
      if (++i >= 3) {
        i = 0
      }
      this.activeIndex = i
      this.$refs.carousel.setActiveItem(i)
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  margin: 16px 0 16px 16px;
  border-radius: 10px;
  border: 3px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  /deep/ img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    transition: all 0.4s ease;
  }
  /deep/ .el-carousel--horizontal {
    height: 100%;
  }
  /deep/ .el-carousel--horizontal {
    overflow: hidden;
  }

  // 切换效果
  /deep/ .el-carousel__container .is-animating {
    -webkit-animation: carousel-out 0.625s ease-in-out;
    animation: carousel-out 0.625s ease-in-out;
    & button {
      animation: none;
    }
  }
  /deep/ .el-carousel__container .is-active {
    -webkit-animation: carousel-in 0.625s ease-in-out;
    animation: carousel-in 0.625s ease-in-out;
    & button {
      animation: none;
    }
  }
  // 左右指示器
  /deep/ .el-carousel__arrow--left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 50px solid rgba(255, 255, 255, 0.9);
    border-bottom: 50px solid transparent;
    border-right: 50px solid transparent;
    background: transparent;
    border-radius: 0;
    left: 0;
  }
  /deep/ .el-carousel__arrow--right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 50px solid rgba(255, 255, 255, 0.9);
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
    background: transparent;
    border-radius: 0;
    right: 0;
  }
  /deep/ .el-carousel__arrow .el-icon-arrow-left,
  /deep/ .el-carousel__arrow .el-icon-arrow-right {
    display: none;
  }
}
.carousel-info {
  position: absolute;
  left: 100px;
  bottom: 15%;
  color: #ffffff;
  width: 35%;
  height: 270px;
  padding: 16px;
  overflow: hidden;
  z-index: 100;

  &:hover {
    background: rgba($color: #000000, $alpha: 0.1);
    .btn-right {
      transform: translateX(0);
    }
    .tag-bot .el-icon-collection-tag {
      transform: translateY(0);
    }
    & {
      box-shadow: 0 0 30px #000;
      transition: all 0.4s ease;
    }
  }
  .tj {
    font-family: element-icons !important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
  }
  .title {
    margin-top: 24px;
    width: 100%;
    height: 105px;
    font-size: 36px;
    line-height: 54px;
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .tag-bot {
    & .el-icon-collection-tag {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 111px;
      height: 46px;
      color: #bebebe;
      margin: 14px 10px;
      transform: translateY(100%);
      transition: all 0.4s ease;
      &::before {
        font-size: 22px;
      }
    }
    & .hash {
      color: #fff;
      cursor: pointer;
    }
  }
  .btn-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 110px;
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 2em;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #aff, #f0f, #aff);
    background-size: 300%;
    animation: glow 8s linear infinite !important;
    transform: translateX(-140%);
    transition: all 0.4s ease;
    &::before {
      position: absolute;
      content: '';
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      z-index: -1;
      background: inherit;
      background-size: inherit;
      border-radius: 4em;
      opacity: 0;
      transition: 0.5s;
    }
    &:hover::before {
      opacity: 1;
      filter: blur(20px);
      animation: glow 8s linear infinite;
    }
  }
}
.car-card {
  position: absolute;
  display: flex;
  right: 10px;
  bottom: 30px;
  height: 68px;
  z-index: 100;
  img {
    width: 128px;
    margin: 0 10px;
    cursor: pointer;
  }
  .is-active {
    transition: all 0.4s ease;
    transform: scale(1.15);
  }
}
@keyframes carousel-out {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-300px) scale(1.5);
  }
}
@keyframes carousel-in {
  0% {
    opacity: 0;
    transform: translateX(300px) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
@keyframes glow {
  100% {
    background-position: 300%;
  }
}
</style>
