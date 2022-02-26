<template>
  <div class="comment" id="commentsSection">
    <h4 class="title">评论</h4>
    <p class="tips">tips：昵称输入QQ号码可以自动填充昵称、邮箱及头像</p>
    <Comments />
    <!-- <p>暂未开放评论区，敬请期待~</p> -->
  </div>
</template>

<script>
import Comments from '@/components/Comments'
export default {
  name: 'StudyComment',
  components: {
    Comments
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.comment {
  margin-top: 60px;
  padding: 30px 0;
  border-top: 1px solid #eee;
  .title {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 600;
  }
  .tips {
    font-size: 12px;
    color: #525255;
  }
}
</style>
