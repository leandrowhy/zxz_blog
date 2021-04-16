<template>
  <div class="home-aside-right">
    <div class="user">
      <div class="bg-img">
        <img src="https://api.adicw.cn/uploads/DfImg/S00213-22232990(1).jpg" />
      </div>
      <img class="tx" src="@/assets/img/20201229171723.jpg" />
    </div>
    <titleBox title="活跃平台">
      <ul slot="content" class="active">
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
    <titleBox title="我的技术栈">
      <ul slot="content" class="skill">
        <li class="item" v-for="(item, index) in skill" :key="index">
          <i :style="{ background: item.color }"></i>
          <span class="tag">{{ item.name }}</span>
        </li>
      </ul>
    </titleBox>
    <titleBox title="友情链接">
      <ul slot="content" class="active">
        <li
          class="item"
          v-for="(item, index) in activeList"
          :key="index"
          :title="item.pathUrl"
          @click="goUrl(item.pathUrl)"
        >
          <i class="el-icon-link">{{ item.name }}</i>
        </li>
      </ul>
    </titleBox>
    <copyright />
  </div>
</template>

<script>
import titleBox from "@/components/titleBox";
import copyright from "@/components/copyright";
export default {
  name: "homeAsideRight",
  components: {
    titleBox,
    copyright,
  },
  data() {
    return {
      activeList: [
        {
          name: "GitHub",
          pathUrl: "https://github.com/leandrowhy",
          class: ["iconfont", "icon-github"],
        },
        {
          name: "bilibili",
          pathUrl: "https://space.bilibili.com/39710083",
          class: ["iconfont", "icon-bilibili-line"],
        },
      ],
      skill: [
        { name: "H5" },
        { name: "Css3" },
        { name: "ES6" },
        { name: "Vue" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "Uniapp" },
      ],
    };
  },
  beforeMount() {
    this.skill.forEach((item) => {
      item.color = this.Color();
    });
  },
  methods: {
    Color() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let color = "rgba(" + r + "," + g + "," + b + ",0.8)";
      return color;
    },
    goUrl(path){
      window.open(path)
    }
  },
};
</script>

<style scoped lang="scss">
.user {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  .bg-img {
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tx {
    position: absolute;
    left: 0;
    right: 0;
    top: 86px;
    margin: 0 auto;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid hsla(0, 0%, 100%, 0.4);
  }
}
.active {
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
.skill {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 6px 8px;
    margin: 0 6px 8px 0;
    border: 1px solid #eee;
    font-size: 14px;
    cursor: default;
    user-select: none;
    & i {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 10px;
      &::before {
        padding-right: 5px;
      }
    }
  }
}
</style>
