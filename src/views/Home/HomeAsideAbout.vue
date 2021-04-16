<template>
  <div class="home-aside-about">
    <div class="clock">
      <div class="clockanm">
        <span class="time">{{ dateTime }}</span>
      </div>
    </div>
    <div class="blogger">赵小赵个人Blog</div>
    <div class="blogger-ingo">
      游戏、宅男、前端编程，这是博主的三大标签。本站推荐博主自己所总结的知识，也会分享一些日常心得~
    </div>
    <div class="blog-info">
      <BlogInfoItem
        v-for="(item, index) in homeInfo"
        :key="index"
        :titleTag="blogTag[index]"
        :number="item"
      />
    </div>
  </div>
</template>

<script>
import BlogInfoItem from "@/views/Home/BlogInfoItem";
export default {
  name: "HomeAsideAbout",
  components: {
    BlogInfoItem,
  },
  props: {
    homeInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      blogTag: ["文章", "动漫", "评论", "浏览"],
      valDate: 0,
    };
  },
  created() {
    setInterval(() => {
      this.valDate = new Date();
    }, 1000);
  },
  computed: {
    dateTime() {
      if (this.valDate != null) {
        var date = new Date(this.valDate);
        var hour = date.getHours().toString().padStart(2, "0");
        var minute = date.getMinutes().toString().padStart(2, "0");
        var second = date.getSeconds().toString().padStart(2, "0");

        return hour + " : " + minute + " : " + second;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home-aside-about {
  background: #fff;
  border-radius: 15px;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.clock {
  width: 100%;
  height: 130px;
  background: url("../../assets/img/20190917010840.jpg");
  background-size: cover;
  .clockanm {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .time {
      color: #fff;
      font-size: 40px;
      text-shadow: 0.8px 0 5px #333;
      cursor: default;
      user-select: none;
    }
  }
}
.blogger {
  font-size: 15px;
  color: #28c7b9;
  padding: 8px 16px;
  font-weight: 600;
}
.blogger-ingo {
  font-size: 12px;
  line-height: 18px;
  padding: 0 16px 10px;
}
.blog-info {
  display: flex;
  text-align: center;
  align-items: center;
  /deep/ .item {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    border-top: 1px solid #eee;
    height: 56px;
    &::before {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      width: 1px;
      height: 70%;
      background: #eee;
    }
    &:last-child::before {
      display: none;
    }
  }
}
</style>
