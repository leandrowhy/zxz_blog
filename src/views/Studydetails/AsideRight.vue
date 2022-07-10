<template>
  <div class="right aside-right-nav">
    <div class="clock" :style="{ background: `url(${bgimg})`, 'background-size': 'cover' }">
      <div class="clockanm">
        <span class="time">{{ dateTime }}</span>
      </div>
    </div>
    <div class="md-title-nav">
      <header>导航目录</header>
      <div class="md-list" ref="list" v-html="sectionContainer"></div>
    </div>
    <copyright :isRadius="false" />
  </div>
</template>

<script>
import copyright from '@/components/copyright'
export default {
  name: 'AsideRight',
  components: {
    copyright
  },
  props: {
    bgimg: {
      type: String
    }
  },
  data() {
    return {
      valDate: 0,
      sectionContainer: ''
    }
  },
  created() {
    setInterval(() => {
      this.valDate = new Date()
    }, 1000)
    this.$bus.$on('section', innerStr => {
      this.sectionContainer = innerStr
    })
  },
  computed: {
    dateTime() {
      if (this.valDate != null) {
        let date = new Date(this.valDate)
        let hour = date
          .getHours()
          .toString()
          .padStart(2, '0')
        let minute = date
          .getMinutes()
          .toString()
          .padStart(2, '0')
        let second = date
          .getSeconds()
          .toString()
          .padStart(2, '0')

        return hour + ' : ' + minute + ' : ' + second
      }
    }
  }
}
</script>

<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}

.clock {
  width: 100%;
  height: 130px;
  background-size: cover !important;
  .clockanm {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
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
.md-title-nav {
  margin-top: 20px;
  background: #fff;
  padding: 15px;
  color: #000;
  min-height: 100px;
  header {
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  ::v-deep li {
    list-style: none;
    .section-link {
      padding-left: 5px;
      margin: 6px 0;
      padding: 4px 0 4px 4px;
      display: block;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      font-size: 14px;
      color: #000;
      &:hover {
        color: #007fff;
        background-color: #ebedef;
      }
    }
  }
}
.md-list {
  min-height: 200px;
  max-height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
</style>
