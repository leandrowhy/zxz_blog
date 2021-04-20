<template>
  <div class="register">
    <div class="centen-box">
      <h2 class="title">注册</h2>
      <!-- 步骤条 -->
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="基础信息"></el-step>
        <el-step title="邮箱验证"></el-step>
        <el-step title="自动登陆"></el-step>
      </el-steps>
      <div class="input-box check-input">
        <a class="el-icon-user"></a>
        <input
          type="text"
          placeholder="请输入用户名"
          v-model="user"
          @change="userFocus"
        />
        <span
          :class="{
            'el-icon-circle-check': userCheck,
            'el-icon-circle-close': !userCheck,
          }"
        ></span>
        <p class="tit">{{ usertit }}</p>
      </div>
      <div class="input-box check-input">
        <a class="el-icon-lock"></a>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="pass"
          @change="passFocus"
        />
        <span
          :class="{
            'el-icon-circle-check': passdCheck,
            'el-icon-circle-close': !passdCheck,
          }"
        ></span>
        <p class="tit">{{ passtit }}</p>
      </div>
      <div class="input-box check-input">
        <a class="el-icon-lock"></a>
        <input
          type="password"
          placeholder="请在此输入密码"
          v-model="checkPass"
          @change="passCheckFocus"
        />
        <span
          :class="{
            'el-icon-circle-check': twoPassCheck,
            'el-icon-circle-close': !twoPassCheck,
          }"
        ></span>
        <p class="tit">{{ checkPassTit }}</p>
      </div>
      <span class="btn next-btn">下一步</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "RegisterBox",
  data() {
    return {
      active: 1,
      user: "",
      pass: "",
      checkPass: "",
      userCheck: false, //用户名验证
      passdCheck: false, //密码验证
      twoPassCheck: false, //两次密码验证
      usertit: "", //用户名提示信息
      passtit: "", //密码提示信息
      checkPassTit: "", //确认密码提示信息
      passReg: /^[A-Za-z0-9]{6,16}$/, //密码正则
    };
  },
  methods: {
    //用户名验证
    userFocus() {
      if (this.user == "") {
        this.usertit = "* 用户名不能为空";
      } else {
      }
    },
    //密码验证
    passFocus() {
      if (this.pass == "") {
        this.passdCheck = false;
        this.passtit = "* 密码不能为空";
      } else {
        if (this.passReg.test(this.pass)) {
          this.passdCheck = true;
          this.passtit = "";
        } else {
          this.passdCheck = false;
          this.passtit = "* 密码必须由6-16位的数字和字母组成";
        }
      }
    },
    //确认密码验证
    passCheckFocus() {
      if (this.checkPass == "") {
        this.twoPassCheck = false;
        this.checkPassTit = "* 密码不能为空";
      } else {
        if (this.checkPass == this.pass) {
          this.twoPassCheck = true;
          this.checkPassTit = "";
        } else {
          this.twoPassCheck = false;
          this.checkPassTit = "* 两次密码不一致";
        }
      }
    },
  },
};
</script>
 
<style scoped lang = "scss">
.register {
  padding: 0 40px;
}
.centen-box {
  position: relative;
  top: 50%;
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
  .next-btn {
    margin-top: 20px;
    border: 1px solid #28c7b9;
    background: #28c7b9;
    &:hover {
      border-color: #2ddbcd;
      background: #2ddbcd;
    }
  }
}
/deep/ .el-steps--horizontal {
  width: 300px;
  margin: 20px;
}
/deep/ .el-step__head.is-success,
/deep/ .el-step__title.is-success {
  color: #409eff;
  border-color: #409eff;
}
.input-box {
  width: 100%;
}
.check-input {
  position: relative;
  width: 100%;
  min-height: 73px;
  a {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37px;
    height: 37px;
    font-size: 26px;
  }
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 37px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .el-icon-circle-close {
    color: red;
  }
  .el-icon-circle-check {
    color: green;
  }
  input {
    margin-top: 0;
    width: calc(100% - 37px);
  }
  .tit {
    min-height: 24px;
    font-size: 14px;
    margin: 10px 0 6px 20px;
    color: red;
  }
}
</style>