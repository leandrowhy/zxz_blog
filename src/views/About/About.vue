<!--
 * @Author: leandrowhy
 * @Date: 2022-02-12 10:11:00
 * @Description: file content
-->
<template>
  <div class="about">
    <div class="row about-body">
      <div class="blog-header blog-body">
        <h4>关于本站</h4>
        <p class="blog-description" id="hitokoto">有什么胜利可言，挺住意味着一切。</p>
        <div class="icon-contac">
          <span class="link-icon" title="QQ联系我" @click="contactAction(true)">
            <i class="iconfont icon-qq"></i>
            QQ联系
          </span>
          |
          <span class="link-icon" title="点击给我发邮件" @click="contactAction(false)">
            <i class="iconfont icon-youxiang1"></i>
            邮箱联系（1229911200@qq.com）
          </span>
        </div>
      </div>
      <div class="blog-body expansion">
        <h5 class="custom-title">
          <i class="iconfont icon-user-secret"></i>
          <strong>博主简介</strong>
          <small></small>
        </h5>
        <div class="info">
          <p>
            一个爱玩游戏的宅男、刚毕业不久的菜鸡前端攻城湿。
          </p>
        </div>
        <h5 class="custom-title">
          <i class="iconfont icon-coffee"></i>
          <strong>关于博客</strong>
          <small></small>
        </h5>
        <div class="info">
          个人博客没什么内容，也不求流量，当一种兴趣，开发完善的过程中还能学到一些东西，还有就是可以记录自己。
        </div>
        <h5 class="custom-title">
          <i class="iconfont icon-banquan"></i>
          <strong>关于版权</strong>
          <small></small>
        </h5>
        <div class="info">
          本站所有标注为原创的文章，转载请标明出处。
          <br />
          本站所有转载的文章，一般都会在文章中注明原文出处。
          <br />
          所有转载的文章皆来源于互联网，若因此对原作者造成侵权，烦请原作者
          <span class="link-icon" title="点击给我发邮件" @click="contactAction(false)">
            <strong>告知</strong>
          </span>
          ，我会立刻删除相关内容。
        </div>
        <div class="date">
          2022-02-27
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {}
  },
  mounted() {
    this.$show()
  },
  methods: {
    contactAction(isQQ) {
      if (isQQ) {
        window.open('tencent://message/?uin=1229911200&amp;Site=www.clowned.cn&amp;Menu=yes')
      } else {
        window.open('mailto:1229911200@qq.com')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  background: #f4f5f7;
  height: calc(100vh - 70px);
}
.about-body {
  width: calc(100vw - 400px);
  min-width: 600px;
  margin: 0 200px;
  padding: 50px 10px;
  .iconfont {
    font-size: 15px;
    margin: 0 2px;
  }
  .blog-body {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
    h4 {
      font-family: 'Microsoft YaHei';
      font-weight: 700;
      font-size: 18px;
      margin: 10px 0;
    }
    .blog-description {
      margin: 10px 0;
      font-size: 14px;
      color: #999;
    }
    .custom-title {
      margin: 10px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      overflow: initial !important;
    }
    .info {
      line-height: 25px;
      padding: 5px 20px;
      color: #333;
    }
  }
  .blog-header {
    margin-bottom: 10px;
  }
  .link-icon {
    cursor: pointer;
    color: #009a61;
    &:hover {
      color: #015335;
    }
  }
}
.date {
  text-align: right;
}
</style>
