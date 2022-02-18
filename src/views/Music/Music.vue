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
        'background-image': `url(${this.logo})`
      }"
    ></div>
    <index :listArr="tracks" />
    <!-- <div class="box">
      <musicPlay :musicUrl="playObj.songUrl" :imgSrc="playObj.imgUrl" />
    </div> -->
  </div>
</template>

<script>
import index from '@/views/Music/index'
import musicPlay from '@/views/Music/musicPlay'
import MusicList from '@/views/Music/musicList'
import { getMusicPlaylist, getMusicPlayUrl, getMusicDetail } from '@/api/music'
export default {
  name: 'Music',
  components: {
    index,
    musicPlay,
    MusicList
  },
  data() {
    return {
      logo: '',
      list: [],
      playObj: {},
      tracks: []
    }
  },
  async created() {
    const res = await getMusicPlaylist(6879133531)
    this.$show()
    const playlist = res.playlist
    this.tracks = playlist.tracks.map(item => {
      let obj = {
        id: item.id,
        name: item.ar[0].name,
        artist: item.name,
        cover: item.al.picUrl,
        source: '',
        url: '#####',
        favorited: false
      }
      return obj
    })
    // const resSong = await getMusicPlayUrl(this.tracks[0].id)
    // this.tracks[0].source = resSong.data[0].url
    this.logo = playlist.coverImgUrl
    // const resSong = await getMusicPlayUrl(this.list[0].id)
    // const Detail = await getMusicDetail(this.list[0].id)
    // this.playObj.songUrl = resSong.data[0].url
    // this.playObj.imgUrl = Detail.songs[0].al.picUrl
    // this.logo = this.playObj.imgUrl
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
