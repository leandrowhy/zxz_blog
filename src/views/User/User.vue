<!--
 * @Author: leandrowhy
 * @Date: 2022-02-12 10:11:00
 * @Description: file content
-->
<template>
  <div class="user">
    <div class="user-bg">
      <img :src="userInfo.avatar" />
    </div>
    <div class="user-contain">
      <div class="user-contain-margin">
        <div class="user-info">
          <div class="info-avatar">
            <img :src="userInfo.avatar" class="baseimg" title="我的头像" />
          </div>
          <div class="info-main">
            <div class="_title">
              <span class="nick_name">{{ userInfo.nick_name }}</span>
              <span class="editor" title="编辑个人资料">编辑个人资料</span>
              <i class="el-icon-setting" title="系统设置"></i>
            </div>
            <div class="_item user-state">{{ userInfo.status == 1 ? '正常' : '禁言' }}用户</div>
            <div class="_item _sex">{{ userInfo.sex | sexFilter }}（所有人可见）</div>
          </div>
        </div>
        <div class="user-nav">
          <ul class="_navs">
            <li
              :class="{ active: activeNav === index }"
              v-for="(item, index) in navs"
              :key="index"
              @click="goRouter(item)"
            >
              {{ item.title }}
            </li>
          </ul>
          <div class="_contain"><router-view></router-view></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocal } from '@/tools/localStorage'
export default {
  name: 'User',
  data() {
    return {
      userInfo: {},
      activeNav: 0,
      navs: [
        {
          index: 0,
          title: '主页',
          name: 'UserHome'
        },
        {
          index: 1,
          title: '收藏',
          name: 'Fav'
        },
        {
          index: 2,
          title: '个人信息',
          name: 'Profile'
        }
      ]
    }
  },
  created() {
    let islogin = this.$store.state.isLogin
    if (!islogin) {
      this.$router.push({ name: 'Home' })
      return
    }
    this.activeNav = this.$route.meta.activeNavIndex
    this.$show()
    this.userInfo = getLocal('USER')
  },
  filters: {
    sexFilter(i) {
      let arr = ['未知', '女 ♀', '男 ♂']
      return arr[i] || '未知'
    }
  },
  methods: {
    goRouter(item) {
      if (this.activeNav == item.index) return
      this.activeNav = item.index
      this.$router.push({ name: item.name })
    }
  },
  watch: {
    $route(to) {
      this.activeNav = to.meta.activeNavIndex
    }
  }
}
</script>

<style scoped lang="scss">
.user-bg {
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 40vh;
  filter: blur(22px);
  overflow: hidden;
  img {
    width: 120%;
    height: 120%;
    transform: translate(-10%, -10%);
  }
}
.user-contain {
  position: relative;
  z-index: 2;
  top: 0;
  background: #fff;
  width: 100%;
  min-height: 600px;
  padding-bottom: 100px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  .user-contain-margin {
    width: 1000px;
    margin: 0 auto;
  }
}
.user-info {
  width: 100%;
  display: flex;
  .info-avatar {
    height: 100px;
    width: 100px;
    box-sizing: border-box;
    border: 2px solid #fff;
    margin-top: -40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s;
    &:hover {
      transform: scale(1.1);
    }
    .baseimg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-main {
    flex: 1;
    margin-left: 30px;
    ._item {
      margin: 8px 0;
    }
    ._title {
      margin-top: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 122px 40px;
      .nick_name {
        align-self: center;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.88);
      }
      .editor {
        background-color: #f5f5f5;
        padding: 10px 25px;
        line-height: 1;
        border: none;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 700;
        transition: background-color 0.2s;
        color: #666;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        &:hover {
          background: #dcdcdc;
        }
      }
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        justify-self: flex-end;
        align-self: center;
        color: #adadad;
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
}
.user-nav {
  ._navs {
    li {
      display: inline-flex;
      align-items: center;
      padding: 0 24px;
      height: 42px;
      font-weight: 700;
      font-size: 16px;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.32);
      cursor: pointer;
    }
    .active {
      border-top: 4px solid #72dafa;
      color: rgba(0, 0, 0, 0.88);
    }
  }
}
</style>
