<!--
 * @Author: leandrowhy
 * @Date: 2022-02-12 10:11:00
 * @Description: file content
-->
<template>
  <div class="contact">
    <div class="row about-body">
      <div class="blog-header blog-body">
        <h4>留言板</h4>
        <p class="blog-description" id="hitokoto">我追索人心的深度，却看到了人心的浅薄。</p>
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
        <ul class="alter">
          <li>
            <i class="iconfont icon-dengpaotishi"></i>
            随便留言，只要不是反人类、反国家的危险言论。
          </li>
          <li>
            <i class="iconfont icon-dengpaotishi"></i>
            欢迎各种花式留言！(支持部分markdown语法)
          </li>
          <li>
            <i class="iconfont icon-heartbeat"></i>
            <strong>爱谁谁...</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="message-board">
      <p class="tips">tips：昵称输入QQ号码可以自动填充昵称、邮箱及头像</p>
      <Comments />
    </div>
    <CopyBottom />
  </div>
</template>

<script>
import Comments from '@/components/Comments'
import CopyBottom from '@/components/CopyBottom'
export default {
  name: 'Contact',
  components: {
    Comments,
    CopyBottom
  },
  data() {
    return {}
  },
  mounted() {
    this.$show()
  }
}
</script>

<style scoped lang="scss">
.contact {
  min-height: calc(100vh - 70px);
  background: #f4f5f7;
  .message-board {
    width: calc(100vw - 400px);
    background: #fff;
    margin: 0 auto;
    margin-bottom: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    /deep/ #vcomments {
      width: auto !important;
      padding: 10px 40px;
    }
  }
}
.about-body {
  width: calc(100vw - 400px);
  min-width: 600px;
  margin: 0 200px;
  padding-top: 50px;
  padding-bottom: 20px;
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
    .alter {
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
.tips {
  font-size: 12px;
  color: #333;
  padding: 0 40px;
}
</style>
