<template>
  <div class="share">
    <el-tooltip class="item" effect="dark" content="评论" placement="right">
      <span class="icon-cricle iconfont icon-pinglun1"></span>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="收藏" placement="right">
      <span class="icon-cricle iconfont icon-shoucang_huaban1"></span>
    </el-tooltip>
    <p class="title">分享</p>
    <div>
      <el-tooltip
        class="item"
        effect="dark"
        content="分享到QQ空间"
        placement="right"
      >
        <span
          @click="shareClick(1)"
          class="icon-cricle iconfont icon-iconfonttencentweibo"
        ></span>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="分享到新浪微博"
        placement="right"
      >
        <span
          @click="shareClick(2)"
          class="icon-cricle iconfont icon-weibo"
        ></span>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="分享到QQ"
        placement="right"
      >
        <span
          @click="shareClick(3)"
          class="icon-cricle iconfont icon-qq"
        ></span>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideShare",
  data() {
    return {};
  },
  computed: {
    enter() {
      return this.$store.state.enter;
    },
  },
  methods: {
    shareClick(cont) {
      if (cont == 2) {
        this.$message({
          showClose: true,
          message: "暂未开放此功能,敬请期待~",
          type: "warning",
        });
        return;
      }
      let urlPath = window.location.host + this.$route.path;
      let playMap = new Map();
      playMap.set(
        1,
        `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${urlPath}&sharesource=qzone&title=${this.enter.title}&pics=${this.enter.img}&summary=${this.enter.introduction}`
      );
      playMap.set(
        3,
        `http://connect.qq.com/widget/shareqq/index.html?url=${urlPath}&sharesource=qzone&title=${this.enter.title}&pics=${this.enter.img}&summary=${this.enter.introduction}&desc=${this.enter.introduction}`
      );
      let shareUrl = playMap.get(cont) ? playMap.get(cont) : 0;
      window.open(shareUrl);
    },
  },
};
</script>

<style scoped lang="scss">
.share {
  margin-top: 20px;
  float: right;
  .title {
    margin: 2.5rem 0 1rem;
    font-size: 14px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    user-select: none;
  }
}
.icon-cricle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-top: 16px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
  color: #b2bac2;
  outline: none;
  &:hover {
    color: #dc143c;
  }
}
</style>
