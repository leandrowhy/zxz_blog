<template>
  <div class="login-box">
    <div class="centen-box">
      <h2 class="title">登陆</h2>
      <div class="input-box">
        <input type="text" placeholder="请输入邮箱、用户名、账号" />
        <p class="el-icon-user iptit">账号：</p>
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入密码" />
        <p class="el-icon-lock iptit">密码：</p>
      </div>
      <p class="forget" title="忘记密码？">忘记密码</p>
      <span class="btn login-btn">登陆</span>
    </div>
    <!-- 快捷登陆 -->
    <div class="login-thirdpart">
      <span class="iconfont icon-qq" title="QQ登陆" @click="thirdParty"></span>
      <span
        class="iconfont icon-wechat-fill"
        title="微信登陆"
        @click="thirdParty"
      ></span>
      <span
        class="iconfont icon-weibo"
        title="微博登陆"
        @click="thirdParty"
      ></span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "LoginBox",
  data() {
    return {};
  },
  methods: {
    thirdParty() {
      this.$notify.info({
        title: "登陆提示",
        message: "该登陆方式暂未开放~",
      });
    },
  },
};
</script>
 
<style scoped lang = "scss">
.login-box {
  padding: 0 40px;
}
.centen-box {
  position: relative;
  top: 50%;
  height: 300px;
  width: 320px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-size: 26px;
    text-align: center;
    font-weight: 800;
  }
  .login-btn {
    border: 1px solid #ce4a50;
    background: #ce4a50;
    &:hover {
      border-color: #e25158;
      background: #e25158;
    }
  }
  .forget {
    color: #ce4a50;
    margin-left: auto;
    cursor: pointer;
    text-decoration: underline;
  }
}
.input-box {
  width: 100%;
}
.login-thirdpart {
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 70px;
  width: 320px;
  height: 34px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #def;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }
  }
  .icon-qq {
    color: #28c7b9;
  }
  .icon-wechat-fill {
    color: #44b035;
  }
  .icon-weibo {
    color: #dc143c;
  }
}
</style>