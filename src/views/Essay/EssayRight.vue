<template>
  <div class="right">
    <div class="hot">
      <p class="title">热门文章</p>
      <ul class="list">
        <li
          class="item"
          v-for="(item, index) in enterHot"
          :key="index"
          :title="item.title"
          @click="goRouter(item.id, item.img)"
        >
          <img class="tx" v-lazy="item.img" alt="" />
          <div class="list-info">
            <span class="list-title">{{ item.title }}</span>
            <p class="cont">{{ item.views }} views</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EssayRight',
  data() {
    return {
      hotList: []
    }
  },
  computed: {
    enterHot() {
      return this.$store.state.enterHot
    }
  },
  created() {},
  methods: {
    goRouter(id, img) {
      this.$router.push({ name: 'Studydetails', params: { id, img } })
    }
  }
}
</script>

<style scoped lang="scss">
.hot {
  position: sticky;
  top: 140px;
  padding: 12px 0;
  width: 100%;
  background: #ffffff;
  .title {
    padding: 0 16px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 800;
    border-bottom: 1px solid #eee;
  }
}
.list .item {
  display: flex;
  padding: 6px 8px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: #f3f3f3;
    border-radius: 5px;
  }
  .tx {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    border-radius: 100%;
  }
  .list-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    font-size: 12px;
  }
  .list-title {
    box-sizing: border-box;
    width: 100%;
    padding-right: 20px;
    margin-bottom: 6px;
    color: #768791;
    font-size: 11px;
    line-height: 15px;
  }
  .cont {
    overflow: hidden;
    color: #c3ccd3;
  }
}
</style>
