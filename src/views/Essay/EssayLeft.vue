<template>
  <div class="left infinite-list" v-infinite-scroll="load">
    <ul class="list">
      <!-- infinite-list -->
      <!-- v-infinite-scroll="load" -->
      <li
        v-for="(item, i) in articcle"
        :key="i"
        class="card"
        @click="goRouter(item.id)"
      >
        <div class="card-img">
          <img v-lazy="item.img" alt="" />
        </div>
        <div class="card-info">
          <p class="card-title">{{ item.title }}</p>
          <p class="card-intor">{{ item.introduction }}</p>
          <div class="card-else">
            <span class="fa clock"
              ><i class="iconfont icon-rili"></i
              >{{ item.date | timeTransformation }}</span
            >
            <span class="fa eye"
              ><i class="iconfont icon-liulan"></i>{{ item.views }}</span
            >
            <span class="fa comments"
              ><i class="iconfont icon-pinglun"></i>{{ 0 }}</span
            >
          </div>
        </div>
      </li>
    </ul>
    <p
      style="
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 13px;
        color: #ccc;
        text-align: center;
      "
    >
      没有更多了
    </p>
  </div>
</template>

<script>
export default {
  name: "EssayLeft",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    articcle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    timeTransformation(inputTime) {
      let date = new Date(inputTime);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
  },
  methods: {
    load() {},
    goRouter(id) {
      this.$router.push({
        name: "Studydetails",
        params: { id }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.left {
  min-height: 70vh;
}
.list {
  padding: 16px;
  .card {
    padding: 16px;
    margin-top: 10px;
    display: flex;
    border: 1px solid transparent;
    border-bottom: 1px solid #eee;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border: 1px solid rgb(167, 167, 167);
      background: #ebebeb;
    }
    .card-img {
      position: relative;
      width: 160px;
      height: 100px;
      //   background: #ecf5ff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 2px 0 2px 16px;
      //   width: calc(100% - 160px);
      height: 100px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .card-title {
        -webkit-line-clamp: 1;
        font-weight: 600;
        font-size: 18px;
        color: #717171;
      }
      .card-intor {
        font-size: 14px;
        color: #768791;
      }
    }
  }
}
.card-else {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #768791;
  .fa {
    padding-right: 15px;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    color: #a0a0a0;
  }
  i {
    padding-right: 3px;
    font-size: 12px;
  }
}
</style>
