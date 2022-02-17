<!--
 * @Author: leandrowhy
 * @Date: 2022-02-17 15:27:03
 * @Description: file content
-->
<template>
  <audio :src="urlSrc" @ended="overAudio" @pause="onPause" @play="onPlay"></audio>
</template>

<script>
export default {
  name: 'player',
  props: {
    urlSrc: {
      type: String
    }
  },
  data() {
    return {}
  },
  mounted() {
    document.body.appendChild(this.$el)
    this.onPlay()
  },
  methods: {
    /**
     * audio自身事件
     * */
    // 当音频播放
    onPlay() {
      console.log('开始播放声音')
    },
    // 当音频暂停
    onPause() {
      console.log('暂停播放声音')
    },
    //播放完毕执行
    overAudio() {
      console.log('播放声音完毕')
    }
  }
}
</script>

<style scoped lang="scss"></style>
