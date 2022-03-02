<template>
  <div class="home-aside">
    <home-aside-about v-if="isShow" :homeInfo="homeInfo" />
    <titleBox title="最受欢迎的文章" :isGreen="isGreen">
      <ul slot="content" class="article">
        <li
          class="item"
          v-for="(item, index) in enterHot"
          :key="index"
          :title="item.title"
          @click="goRouter(item.id, item.img)"
        >
          <img class="tx" v-lazy="item.img" alt="" />
          <div class="article-info">
            <span class="title">{{ item.title }}</span>
            <p class="cont">{{ item.views }} views</p>
          </div>
        </li>
      </ul>
    </titleBox>
  </div>
</template>

<script>
import homeAsideAbout from '@/views/Home/HomeAsideAbout'
import titleBox from '@/components/titleBox'
export default {
  name: 'homeAside',
  components: {
    homeAsideAbout,
    titleBox
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    isGreen: {
      type: Boolean,
      default: false
    },
    homeInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    enterHot() {
      return this.$store.state.enterHot
    }
  },
  data() {
    return {}
  },
  methods: {
    goRouter(id, img) {
      this.$router.push({ name: 'Studydetails', params: { id, img } })
    }
  }
}
</script>

<style scoped lang="scss">
.article .item {
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
  .article-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    font-size: 12px;
  }
  .title {
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
