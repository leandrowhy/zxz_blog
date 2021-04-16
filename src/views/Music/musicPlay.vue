<template>
  <div class="player">
    <div class="bar">
      <div class="album">
        <img src="https://api.adicw.cn/uploads/StudyImg/20200929095155.jpg" />
      </div>
      <div class="controls">
        <div class="play-btn prev">
          <i class="iconfont icon-ai-rew-left"></i>
        </div>
        <div class="play-btn play"><i class="iconfont icon-bofang"></i></div>
        <div class="play-btn next">
          <i class="iconfont icon-ai-rew-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicPlay",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.player {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .bar {
    background: #fff;
    padding: 10px 25px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: 0 30px 56px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 3;
  }
  .album {
    position: relative;
    width: 150px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-left: 15px;
    }
  }
  .controls {
    display: flex;
    align-items: center;
    .play-btn {
      cursor: pointer;
      height: 80px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transition: all 0.3s ease 0s;
        background: #d6d6de;
        .iconfont {
          color: #fff;
        }
      }
    }
    .iconfont {
      color: #d7dce2;
      font-size: 32px;
      transition: all 0.3s ease 0s;
    }
  }
}
.playerz {
  left: 10px;
  top: -90px;
  position: absolute;
  z-index: 1;
  width: 420px;
  /deep/ .aplayer {
    border-radius: 15px 15px 0 0;
    height: 100px;
    .aplayer-body,
    .aplayer-pic {
      height: 100%;
    }
    .aplayer-pic {
      display: none;
    }
  }
}
</style>
