<template>
  <div class="picture">
    <div class="zxz-waterfall-box" ref="box">
      <div class="zxz-waterfall-column" v-for="(item, index) in images" :key="index" ref="img">
        <div class="imgdfcard slide-ltin-up" v-for="(e, index) in item" :key="index">
          <div class="imgdfcard-btn el-icon-copy-document" @click="onPreview(e.index)">
            点击查看
          </div>
          <img v-lazy="e.url" alt="图片.png" class="imgdfcard-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPicture } from '@/api/api'

export default {
  name: 'Picture',

  data() {
    return {
      images: [], //瀑布流数组 [[第一竖排],[第二竖排],[第三竖排]]
      allList: [],
      urlList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getAllPicture().then(res => {
        this.allList = res.data
        let arr1 = [],
          arr2 = [],
          arr3 = []
        this.allList.forEach((e, i) => {
          e.index = i
          if ((i + 1) % 3 == 1) {
            arr1.push(e)
          } else if ((i + 1) % 3 == 2) {
            arr2.push(e)
          } else {
            arr3.push(e)
          }
          this.urlList.push(e.url)
        })
        this.images.push(arr1, arr2, arr3)
        this.$show()
      })
    },
    onPreview(index) {
      let arr = this.getList(this.urlList, index)
      this.$bus.$emit('onPreview', true, arr)
    },
    //数据重新排列 abcd -> 传入下标2 =>cdab
    // allList 需要重新排列的数据   index 开始下标
    getList(allList, index) {
      let arr = []
      let i = 0
      for (i; i < allList.length; i++) {
        arr.push(allList[i + index])
        if (i + index >= allList.length - 1) {
          index = 0 - (i + 1)
        }
      }
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.picture {
  background: rgba($color: #99ecf3, $alpha: 0.2);
}
.zxz-waterfall-box {
  width: 100%;
  display: flex;
  .zxz-waterfall-column {
    flex: 1;
    .imgdfcard {
      min-height: 300px;
      max-height: 450px;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      display: block;
      overflow: hidden;
      animation-duration: 0.6s;
      &:hover {
        &::before {
          opacity: 1;
          width: 100%;
          height: 100%;
        }
        &::after {
          opacity: 1;
          width: 100%;
          height: 100%;
        }
        .imgdfcard-btn {
          opacity: 0.8;
        }
      }
      .imgdfcard-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 80px;
        height: 80px;
        padding: 10px;
        color: #fff;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 6;
        user-select: none;
        cursor: pointer;
        &::before {
          font-size: 40px;
        }
        &:hover {
          box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.4);
        }
      }
      .imgdfcard-image {
        display: block;
        width: 100%;
      }
    }
  }
}
.imgdfcard:after,
.imgdfcard:before {
  content: '';
  position: absolute;
  width: 25%;
  height: 25%;
  opacity: 0;
  transition: all 0.5s ease;
}
.imgdfcard:before {
  top: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 150, 136, 0.2);
}
.imgdfcard:after {
  right: 0;
  bottom: 0;
  z-index: 5;
  transition-delay: 0.2s;
  background-color: rgba(0, 150, 136, 0.4);
}
</style>
