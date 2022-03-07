<template>
  <el-scrollbar style="height: 100vh" ref="docbox">
    <div id="app" :class="{ 'right-sticky': rightSticky, 'left-sticky': leftSticky }">
      <tab-bar />
      <!-- 内容 -->
      <keep-alive include="Music">
        <router-view :key="$route.path" class="animated fadeIn" v-show="isShow" />
      </keep-alive>

      <!-- 数据加载 过渡页 -->
      <div class="mask fadeOut" v-show="!isShow"></div>
      <!-- 返回顶部 -->
      <div
        title="点击返回顶部"
        class="back-top"
        :style="{ transform: `translateY(${moveHeight})` }"
        @click="goTop"
      ></div>
      <div>
        <!-- 图片查看器 -->
        <el-image-viewer
          v-if="showViewer"
          :on-close="closeViewer"
          :url-list="urlList"
          :zIndex="2000"
        />
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import tabBar from './components/tabBar/tabBar'
// 导入组件
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
//节流函数
import fnThrottle from '@/tools/fnThrottle'
import { getCookie, setCookie, removeCookie } from '@/tools/cookie'
import { getLocal, setLocal, delLocal } from '@/tools/localStorage'
import { tokenVerify } from '@/api/api'
export default {
  components: {
    tabBar,
    ElImageViewer
  },
  name: 'App',
  computed: {
    isShow() {
      return this.$store.state.isShow
    }
  },
  data() {
    return {
      moveHeight: '-100%',
      showViewer: false, // 显示查看器
      urlList: [],
      scrollHeight: 0,
      rightSticky: false, //class 绑定
      leftSticky: false
    }
  },
  created() {
    this.$store.dispatch('getArticleHot')
    let token = getLocal('TOKEN')
    tokenVerify({ token }).then(res => {
      if (res.code == 200) {
        const user = res.data
        const token = res.token
        this.$store.commit('setToken', user)
        this.$store.commit('setUserInfo', user)
        this.$store.commit('setIsLogin', true)
        setLocal('TOKEN', token)
        setLocal('USER', user) //存入localstorage
        setCookie('TOKEN', token) //存入cookie
        //信息转码
        this.$store.commit('setIsLogin', true)
        this.$store.commit('setUserInfo', user)
        this.$store.commit('setToken', token)
      } else {
        delLocal('TOKEN')
        delLocal('USER')
        removeCookie('TOKEN')
      }
    })
  },
  mounted() {
    this.handleScroll()
    this.$bus.$on('onPreview', this.onPreview)
  },
  methods: {
    // 关闭查看器
    closeViewer() {
      this.showViewer = false
      setTimeout(() => {
        document.documentElement.scrollTop = this.scrollHeight
      }, 1)
    },
    onPreview(bom, list) {
      this.showViewer = bom
      this.urlList = list
    },
    // 回到顶部
    goTop() {
      let currentPosition, timer
      let _this = this
      let secondsAre = _this.$refs.docbox.wrap.scrollTop / 100
      //设置最小值
      secondsAre = secondsAre < 50 ? 50 : secondsAre
      timer = setInterval(function() {
        currentPosition = _this.$refs.docbox.wrap.scrollTop
        currentPosition -= secondsAre
        if (currentPosition > 0) {
          _this.$refs.docbox.wrap.scrollTop = currentPosition
        } else {
          _this.$refs.docbox.wrap.scrollTop = 0
          clearInterval(timer)
        }
      }, 10)
    },
    handleScroll() {
      let backTop = document.getElementsByClassName('back-top')[0]
      let scrollbarEl = this.$refs.docbox.wrap
      const that = this
      scrollbarEl.onscroll = () => {
        fnThrottle(fnContnt(backTop), 300)
      }
      function fnContnt(backTop) {
        let moveHeight = scrollbarEl.scrollTop > 400 ? '0%' : '-100%'
        that.rightSticky = scrollbarEl.scrollTop > 130 ? true : false
        that.leftSticky = scrollbarEl.scrollTop > 600 ? true : false
        backTop.style.transform = `translateY(${moveHeight})`
      }
    }
  }
}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_2294844_9x3kt17wsr.css');
@import './assets/css/github-markdown.css';
@import './assets/css/highlight.css';

.back-top {
  position: fixed;
  right: 30px;
  top: 0;
  z-index: 666;
  width: 70px;
  height: 900px;
  background: url('./assets/img/back-top.png') no-repeat bottom/cover;
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
