<template>
  <div class="search">
    <div class="search-main">
      <div class="search-top">
        <div class="search-input">
          <el-autocomplete
            class="inline-input"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="search"
            prefix-icon="el-icon-search"
            :trigger-on-focus="false"
            @select="handleSelect"
            @input="search"
            clearable
          ></el-autocomplete>
        </div>
        <div class="search-sort">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{ sortBom == 1 ? '浏览量' : '发布时间' }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0">发布时间</el-dropdown-item>
              <el-dropdown-item command="1">浏览量</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <ul class="search-tips">
        <li
          v-for="(item, index) in cata"
          :key="index"
          @click="cataClick(item, index)"
          :class="{ active: activeIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/tools/utils'
export default {
  props: {
    articcle: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      state: '',
      sortBom: 0,
      cata: ['ALL', '前端', '后端'],
      activeIndex: 0,
      activeCata: 'ALL'
    }
  },
  computed: {
    restaurants() {
      return this.articcle
    }
  },
  methods: {
    searchRequest(key, sort) {
      this.$emit('searchRequest', { key, sort })
      // console.log(key, sort);
    },
    cataClick(str, index) {
      this.activeIndex = index
      this.activeCata = str
      this.state = str
      this.searchRequest(this.state, this.sortBom)
    },
    handleCommand(command) {
      this.sortBom = command
      this.searchRequest(this.state, this.sortBom)
    },
    //监听输入框内容 防抖函数
    search: debounce(function () {
      if (this.state == '') {
        this.activeIndex = 0
        this.activeCata = 'ALL'
      }
      this.searchRequest(this.state, this.sortBom)
    }),
    querySearch(queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      results.forEach(item => {
        item.value = item.title
      })
      cb(results)
    },
    createFilter(queryString) {
      return restaurant => {
        return restaurant.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
      }
    },
    handleSelect(item) {
      this.searchRequest(item.title, this.sortBom)
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 10px;
  max-width: 1300px;
  min-width: 1024px;
}
.search-main {
  margin-left: 100px;
}
.search-top {
  display: flex;
  align-items: center;
}
.search-sort {
  margin-left: 20px;
}
.search {
  .search-input {
    grid-area: input;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 40px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    background: #fff;
    border: 1px solid #eee;
    width: 660px;
  }
}
.search-tips {
  display: flex;
  margin-top: 20px;
  li {
    display: inline-block;
    padding: 0px 14px;
    border-radius: 40px;
    margin-right: 12px;
    transition: all 0.4s ease;
    cursor: pointer;
    font-size: 14px;
    user-select: none;
    &:hover {
      background: #28c7b9;
      box-shadow: 0 0 10px #30f3e0;
      color: #fff;
    }
  }
  .active {
    background: #28c7b9;
    box-shadow: 0 0 10px #30f3e0;
    color: #fff;
  }
}
</style>
