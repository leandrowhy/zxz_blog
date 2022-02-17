<template>
  <div class="item" @click="goRouter(item.id)">
    <div class="card-cover" :title="item.title">
      <img class="bg-img" v-lazy="item.img" />
      <div class="bot-title">
        <span class="label">{{ item.partitions }}</span>
        <p class="title">{{ item.title }}</p>
      </div>
      <div class="bot-ftitle">
        <p class="title">{{ item.introduction }}</p>
      </div>
    </div>
    <div class="card-footer">
      <ul class="lg-cont">
        <li>
          <i class="iconfont icon-rili"></i>
          {{ item.date | timeTransformation }}
        </li>
        <!-- <li><i class="iconfont icon-pinglun"></i>{{ item.plcont }}条评论</li> -->
        <li>
          <i class="iconfont icon-fangwen"></i>
          {{ item.views }}次阅读
        </li>
      </ul>
      <span class="jump">
        阅读全文
        <i class="iconfont icon-V"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    timeTransformation(inputTime) {
      let date = new Date(inputTime)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      return y + '-' + m + '-' + d
    }
  },
  data() {
    return {}
  },
  methods: {
    goRouter(id) {
      this.$router.push({ name: 'Studydetails', params: { id } })
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}

.card-cover {
  position: relative;
  overflow: hidden;
  &:hover {
    .bg-img {
      filter: blur(3px);
      transition: all 0.3s;
    }
    .bot-title {
      opacity: 0;
      transition: all 0.3s;
    }
    .bot-ftitle .title {
      opacity: 1;
      transition: all 0.3s;
    }
  }
  .bg-img {
    display: block;
    width: 100%;
    height: 266px;
    transition: all 0.3s;
  }
  .bot-title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: all 0.3s;
    min-width: 550px;
    line-height: 40px;
    .label {
      display: flex;
      align-items: center;
      height: 24px;
      padding: 0 12px;
      border-radius: 6px;
      background: #dc143c;
      color: #fff;
      font-size: 14px;
      line-height: 14px;
    }
    .title {
      font-size: 30px;
      line-height: 35px;
      margin: 0 60px;
      margin-top: 10px;
      color: #fff;
      text-align: center;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
    }
  }
  .bot-ftitle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 550px;
    z-index: 3;
    .title {
      text-align: center;
      font-size: 18px;
      line-height: 30px;
      color: rgb(27, 24, 24);
      opacity: 0;
      transition: all 0.3s;
    }
  }
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
.lg-cont {
  li {
    display: inline-block;
    margin-right: 8px;
    color: #717171;
  }
  i {
    margin-right: 5px;
  }
}
.jump {
  color: #000;
  box-sizing: border-box;
  user-select: none;
  border-bottom: 1px solid #fff;
  &:hover {
    border-color: #777;
  }
  i {
    color: #000;
  }
}
</style>
