<!--
 * @Author: leandrowhy
 * @Date: 2022-02-26 22:03:21
 * @Description: 评论模块
-->
<template>
  <div id="vcomments"></div>
</template>

<script>
import valineConfig from '@/config/valine'
export default {
  name: 'Comments',
  mounted() {
    this.createValine()
  },

  methods: {
    createValine() {
      const Valine = require('valine')
      window.AV = require('leancloud-storage')
      // valineConfig = valineConfig || {
      //   el: '#vcomments',
      //   appId: 'yourappId',
      //   appKey: 'yourappKey',
      //   notify: false,
      //   verify: false,
      //   avatar: 'monsterid',
      //   path: window.location.pathname,
      //   placeholder: '欢迎留言与我分享您的想法...'
      // }
      valineConfig.path = window.location.pathname
      const valine = new Valine(valineConfig)
      this.valineRefresh = false
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          //重新刷新valine
          this.createValine()
        }, 300)
      }

      /**
       * TODO:
       * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
       * 2. 添加categories and tag
       * 3. 更换其他主题
       */
    }
  }
}
</script>

<style scoped lang="scss">
#vcomments {
  max-width: 740px;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
