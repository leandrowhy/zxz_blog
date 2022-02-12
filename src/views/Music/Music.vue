<template>
  <div class="music">
    <div
      class="bg-img"
      :style="{
        'background-image': `url(${this.logo})`
      }"
    ></div>
    <div class="box">
      <musicPlay />
      <MusicList :list="list" />
    </div>
  </div>
</template>

<script>
import musicPlay from '@/views/Music/musicPlay'
import MusicList from '@/views/Music/musicList'
import { getMusicPlaylist } from '@/api/music'
export default {
  name: 'Music',
  components: {
    musicPlay,
    MusicList
  },
  data() {
    return {
      logo: '',
      list: []
    }
  },
  async created() {
    const res = await getMusicPlaylist(1551071404)
    this.$show()
    const data = res.data
    this.list = data.songlist
    this.logo = data.logo
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
.box {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
}
</style>
