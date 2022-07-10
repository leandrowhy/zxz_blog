<!--
 * @Description: 
 * @Author: leandrowhy
 * @Date: 2021-04-16 22:34:46
 * @LastEditTime: 2022-02-12 10:40:31
 * @LastEditors: Please set LastEditors
 * @FilePath: \front-end\src\views\Studydetails\AsideLeft.vue
 * 希望此代码无bug~
-->
<template>
  <div class="left aside-left-nav">
    <homeAside class="aside" :isShow="false" :isGreen="true" />
    <titleBox title="活跃平台" isGreen :class="['mrtop']">
      <ul slot="content" class="active-main">
        <li
          class="item"
          v-for="(item, index) in activeList"
          :key="index"
          :title="item.pathUrl"
          @click="goUrl(item.pathUrl)"
        >
          <i :class="item.class">{{ item.name }}</i>
        </li>
      </ul>
    </titleBox>
    <AsideShare :enter="enter" />
  </div>
</template>

<script>
import homeAside from '@/views/Home/homeAside'
import titleBox from '@/components/titleBox'
import AsideShare from '@/views/Studydetails/AsideShare'
export default {
  name: 'AsideLeft',
  components: {
    homeAside,
    AsideShare,
    titleBox
  },
  props: {
    enter: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      activeList: [
        {
          name: 'GitHub',
          pathUrl: 'https://github.com/leandrowhy',
          class: ['iconfont', 'icon-github']
        },
        {
          name: 'bilibili',
          pathUrl: 'https://space.bilibili.com/39710083',
          class: ['iconfont', 'icon-bilibili-line']
        }
      ]
    }
  },
  methods: {
    goUrl(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.left {
  border-radius: 0 !important;
  ::v-deep .title-box {
    border-radius: 0;
  }
  ::v-deep .mrtop {
    margin-top: 16px;
  }
}

.active-main {
  padding: 0 16px;
  .item {
    box-sizing: border-box;
    display: block;
    padding: 5px 12px;
    font-size: 12px;
    color: #768791;
    transition: all 0.4s ease;
    background: hsla(0, 0%, 93.3%, 0.44);
    border-radius: 6px;
    margin-bottom: 12px;
    cursor: pointer;
    i {
      font-size: 12px;
      &::before {
        padding-right: 5px;
      }
    }
    &:hover {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
