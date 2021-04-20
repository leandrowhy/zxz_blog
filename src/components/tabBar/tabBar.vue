<template>
  <header class="tabbar">
    <div title="点击返回主页">
      <router-link :to="{ name: 'Home' }" class="login" tag="div">
        <span>赵小赵Blog</span>
      </router-link>
    </div>
    <div class="nav-bar">
      <ul class="bar-list">
        <li
          v-for="(item, index) in navBar"
          :key="index"
          :class="{ 'li-active': activeIndex === index }"
          @click="goRouter(item.pathName, item.index, item.isList)"
        >
          <dropDown
            v-if="item.isList"
            :title="item.title"
            :list="item.list"
            @ghIndex="ghIndex"
          />
          <span v-else>{{ item.title }}</span>
        </li>
        <!-- 已登录路由 -->
        <li
          v-if="isLogin"
          :class="{ 'li-active': activeIndex === 4 }"
          @click="goRouter(user.pathName, user.index, user.isList)"
        >
          <dropDown
            v-if="user.isList"
            :title="user.title"
            :list="user.list"
            @ghIndex="ghIndex"
          />
          <span v-else>{{ user.title }}</span>
        </li>
        <!-- 未登录路由 -->
        <li
          v-else
          :class="{ 'li-active': activeIndex === 4 }"
          @click="goRouter(noLogin.pathName, noLogin.index, noLogin.isList)"
        >
          <dropDown
            v-if="noLogin.isList"
            :title="noLogin.title"
            :list="noLogin.list"
            @ghIndex="ghIndex"
          />
          <span v-else>{{ noLogin.title }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import dropDown from "./dropDown";
export default {
  name: "tabBar",
  components: {
    dropDown,
  },
  data() {
    return {
      activeIndex: 0,
      // 通用路由
      navBar: [
        {
          index: 0,
          pathName: "Home",
          title: "首页",
          isList: false,
        },
        {
          index: 1,
          pathName: "Home",
          title: "茶话会",
          isList: true,
          list: [
            {
              index: 1,
              pathName: "Essay",
              title: "学习",
            },
            {
              index: 1,
              pathName: "Picture",
              title: "图片",
            },
          ],
        },
        {
          index: 2,
          pathName: "Music",
          title: "音乐",
          isList: false,
        },
        {
          index: 3,
          pathName: "other",
          title: "其它",
          isList: true,
          list: [
            {
              index: 3,
              pathName: "About",
              title: "关于",
            },
            {
              index: 3,
              pathName: "Contact",
              title: "联系",
            },
          ],
        },
      ],
      isLogin: false,
      // 登陆之后的路由
      user: {
        index: 4,
        title: "用户",
        pathName: "User",
        isList: true,
        list: [
          { index: 4, pathName: "UserHome", title: "主页" },
          { index: 4, pathName: "Profile", title: "个人信息" },
          { index: 4, pathName: "Fav", title: "收藏" },
        ],
      },
      // 未登录的路由
      noLogin: {
        index: 4,
        title: "登陆",
        pathName: "Login",
        isList: false,
      },
    };
  },
  methods: {
    goRouter(name, index, bom) {
      if (!bom) {
        this.activeIndex = index;
        this.$router.push({ name });
      }
    },
    ghIndex(index) {
      this.activeIndex = index;
    },
  },
  watch: {
    $route(to) {
      this.activeIndex = to.meta.index;
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {
  min-width: 1024px;
  position: relative;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  width: 100%;
  height: 70px;
  background: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 700;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    font-size: 26px;
    cursor: pointer;
  }
  .bar-list {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 70px;
    padding-right: 140px;
    color: #768791;
    font-size: 14px;
    li {
      position: relative;

      cursor: pointer;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      z-index: 5;
      &:hover {
        color: #72dafa;
      }
      span {
        display: inline-block;
        padding: 6px 14px;
      }
    }
  }
}
.li-active {
  color: #72dafa !important;
  & /deep/ .el-dropdown-link {
    color: #72dafa !important;
  }
}
</style>
