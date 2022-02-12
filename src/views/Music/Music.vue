<!--
 * @Author: leandrowhy
 * @Date: 2022-02-12 10:11:00
 * @Description: file content
-->
<template>
  <div class="music">
    <div
      class="bg-img"
      :style="{
        'background-image': `url('https://p2.music.126.net/iYRj0og9f3jD8rjGSRn2aA==/109951164679229248.jpg')`
      }"
    ></div>
    <musicPlay />
  </div>
</template>

<script>
import musicPlay from '@/views/Music/musicPlay'
export default {
  name: 'Music',
  components: {
    musicPlay
  },
  data() {
    return {}
  },
  mounted() {
    this.$show()
  }
}
</script>

<style scoped lang="scss">
.music {
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  .bg-img {
    position: absolute;
    inset: 0;
    display: block;
    background: 50% center / cover no-repeat;
    filter: blur(40px);
    z-index: -2;
    &::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      background: rgba($color: #000000, $alpha: 0.3);
      z-index: -1;
    }
  }
}
</style>
