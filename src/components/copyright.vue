<!--
 * @Author: leandrowhy
 * @Date: 2022-02-12 10:11:00
 * @Description: file content
-->
<template>
  <div class="copyright" :class="{ isradius: isRadius }">
    <!-- <div class="contact">
      <p class="work-tiem">联系我们</p>
      <p class="work-time work2">（工作日： 19:00-21:00）</p>
      <p class="work-time p2 work2">（休息日： 09:00-20:00）</p>
      <p class="work">Q Q：1229911200</p>
      <p class="work p2">邮箱：1229911200@qq.com</p>
    </div> -->
    <div class="info">
      <p>渝ICP备20002215号-3</p>
      <p>Copyrigth @2021 赵小赵的个人博客</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  props: {
    isRadius: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.copyright {
  margin-top: 16px;
  padding: 20px;
  background: #fff;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
  .contact {
    color: #768791;
    font-size: 14px;
    border-bottom: 1px solid #f3f3f3;
    .work2 {
      text-indent: 2rem;
    }
    .p2 {
      margin-bottom: 12px;
    }
  }
  .info {
    // padding-top: 12px;
    color: #768791;
    font-size: 14px;
  }
}
.isradius {
  border-radius: 15px;
}
</style>
