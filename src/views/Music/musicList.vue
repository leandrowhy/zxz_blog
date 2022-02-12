<!--
 * @Author: leandrowhy
 * @Date: 2021-12-03 11:26:55
 * @Description: file content
-->
<template>
  <div class="music-list">
    <p class="title">歌单</p>
    <el-scrollbar style="height: 470px">
      <p class="item" v-for="item in list" :key="item.songmid">
        <span class="songname">{{ item.songname + ' - ' + item.singer[0].name }}</span>
      </p>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  props: {
    list: { type: Array, default: () => [] }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.music-list {
  position: absolute;
  right: 50px;
  top: 100px;
  background: rgba($color: #ffffff, $alpha: 0.9);
  width: 300px;
  border-radius: 5px;
  overflow: auto;
  .title {
    font-size: 20px;
    font-family: '雅黑';
    font-weight: 600;
    padding: 12px 0;
    padding-left: 16px;
    border-bottom: 1px solid #ccc;
  }
  .item {
    height: 32px;
    line-height: 32px;
    padding-left: 16px;
  }
}
</style>
