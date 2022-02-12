<!--
 * @Author: leandrowhy
 * @Date: 2021-04-16 22:34:46
 * @Description: file content
-->
<template>
  <div
    class="center infinite-list"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
    :infinite-scroll-immediate="false"
  >
    <ContentItem
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :class="['infinite-list-item']"
    />
    <Loading v-if="loading" type="cross" />
    <p v-if="noMore" style="margin-top: 10px; font-size: 13px; color: #ccc; text-align: center">
      没有更多了
    </p>
  </div>
</template>

<script>
import { getArticle } from '@/api/api'
import ContentItem from '@/views/Home/centerCommom/ContentItem'
import Loading from '@/components/Loading'
export default {
  name: 'HomeAsideCenter',
  components: {
    ContentItem,
    Loading
  },
  data() {
    return {
      count: 0, //起始页数值为0
      loading: false,
      totalPages: 2, //取后端返回内容的总页数
      list: [] //后端返回的数组
    }
  },
  computed: {
    noMore() {
      //当起始页数大于总页数时停止加载
      return this.count >= this.totalPages
    },
    disabled() {
      return this.loading || this.noMore
    },
    isShow() {
      return this.$store.state.isShow
    }
  },
  created() {
    this.getMessage()
  },
  methods: {
    load() {
      if (this.isShow) {
        //滑到底部时进行加载
        this.loading = true
        setTimeout(() => {
          this.getMessage() //调用接口，此时页数+1，查询下一页数据
        }, 2000)
      }
    },
    getMessage() {
      this.count += 1 //页数+1
      this.loading = false
      let params = {
        pageNumber: this.count,
        pageSize: 5 //每页查询条数
      }
      getArticle(params).then(res => {
        this.list = this.list.concat(res.data.content) //因为每次后端返回的都是数组，所以这边把数组拼接到一起
        this.totalPages = res.data.totalPages
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
