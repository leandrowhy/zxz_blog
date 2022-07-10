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
      <!-- 步骤一 -->
      <div class="step-one animate bounceIn" v-show="active == 1">
        <div class="input-box check-input">
          <a class="el-icon-user"></a>
          <input type="text" placeholder="请输入用户名" v-model="user" @change="userFocus" />
          <span
            :class="{
              'el-icon-circle-check': userCheck,
              'el-icon-circle-close': !userCheck
            }"
          ></span>
          <p class="tit">{{ usertit }}</p>
        </div>
        <div class="input-box check-input">
          <a class="el-icon-lock"></a>
          <input type="password" placeholder="请输入密码" v-model="pass" @change="passFocus" />
          <span
            :class="{
              'el-icon-circle-check': passdCheck,
              'el-icon-circle-close': !passdCheck
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
              'el-icon-circle-close': !twoPassCheck
            }"
          ></span>
          <p class="tit">{{ checkPassTit }}</p>
        </div>
      </div>
      <!-- 步骤二 -->
      <div class="step-two animate bounceIn" v-show="active == 2">
        <div class="input-box check-input">
          <a class="el-icon-user"></a>
          <input type="text" placeholder="请输入邮箱" v-model="email" @change="emailFocus" />
          <span
            :class="{
              'el-icon-circle-check': emailCheck,
              'el-icon-circle-close': !emailCheck
            }"
          ></span>
          <p class="tit">{{ emailtit }}</p>
        </div>
        <div class="input-box check-input">
          <a class="el-icon-user"></a>
          <input type="text" placeholder="验证码" v-model="code" />
          <span class="code-btn" v-if="sendCode">{{ codetext }}</span>
          <span class="code-btn" v-else @click="getCode">获取验证码</span>
          <p class="tit">{{ codetit }}</p>
        </div>
      </div>
      <!-- 步骤三 -->
      <div class="step-tre animate bounceIn" v-show="active == 3">
        <div
          class="mint-spinner-snake"
          style="
            border-top-color: rgb(38, 162, 255);
            border-left-color: rgb(38, 162, 255);
            border-bottom-color: rgb(38, 162, 255);
            height: 88px;
            width: 88px;
          "
        ></div>
        <p>登陆中...</p>
      </div>
      <span class="btn next-btn" @click="nextClick" v-show="active == 1">下一步</span>
      <div class="btn-box">
        <span class="btn next-btn" @click="backClick" v-show="active == 2">上一步</span>
        <span class="btn reg-btn" @click="regClick" v-show="active == 2">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { verifyUserName, verifyEmail, getMailCode, register } from '@/api/api'
import md5 from 'js-md5'
import { setCookie } from '@/tools/cookie'
export default {
  name: 'RegisterBox',
  data() {
    return {
      active: 1,
      user: '', //用户名
      pass: '', //密码
      checkPass: '', //确认密码
      userCheck: false, //用户名验证
      passdCheck: false, //密码验证
      twoPassCheck: false, //两次密码验证
      usertit: '', //用户名提示信息
      passtit: '', //密码提示信息
      checkPassTit: '', //确认密码提示信息
      passReg: /^[A-Za-z0-9]{6,16}$/, //密码正则
      email: '', //邮箱
      emailCheck: '', //邮箱是否验证成功
      emailtit: '', //验证提示
      emailReg: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //验证邮箱的正则
      code: '', //验证码
      codetit: '',
      sendCode: false, //是否已发送验证码
      codetext: '已发送(60s)',
      codeTimer: null
    }
  },
  methods: {
    //用户名验证
    userFocus() {
      if (this.user == '') {
        this.usertit = '* 用户名不能为空'
        this.userCheck = false
      } else {
        //验证用户名是否存在
        let params = {
          user: this.user
        }
        verifyUserName(params).then(res => {
          if (res.code == 200) {
            this.usertit = res.msg
            this.userCheck = true
          } else {
            this.usertit = '* ' + res.msg
            this.userCheck = false
          }
        })
      }
    },
    //密码验证
    passFocus() {
      if (this.pass == '') {
        this.passdCheck = false
        this.passtit = '* 密码不能为空'
      } else {
        if (this.passReg.test(this.pass)) {
          this.passdCheck = true
          this.passtit = ''
        } else {
          this.passdCheck = false
          this.passtit = '* 密码必须由6-16位的数字和字母组成'
        }
      }
    },
    //确认密码验证
    passCheckFocus() {
      if (this.checkPass == '') {
        this.twoPassCheck = false
        this.checkPassTit = '* 密码不能为空'
      } else {
        if (this.checkPass == this.pass) {
          this.twoPassCheck = true
          this.checkPassTit = ''
        } else {
          this.twoPassCheck = false
          this.checkPassTit = '* 两次密码不一致'
        }
      }
    },
    //邮箱验证
    emailFocus() {
      if (this.email == '') {
        this.emailCheck = false
        this.emailtit = '* 邮箱不能为空'
      } else {
        if (this.emailReg.test(this.email)) {
          verifyEmail({ email: this.email }).then(res => {
            if (res.code == 200) {
              this.emailCheck = true
              this.emailtit = res.msg
            } else {
              this.emailCheck = false
              this.emailtit = res.msg
            }
          })
        } else {
          this.emailCheck = false
          this.emailtit = '* 邮箱格式不对，请检查'
        }
      }
    },
    // 获取验证码
    getCode() {
      // 先验证邮箱是否正确
      this.emailFocus()
      if (this.emailCheck) {
        getMailCode({ mail: this.email }).then(res => {
          if (res.code == 200) {
            // 发送成功
            this.codetit = '验证码发送成功'
            let seconds = 60
            this.sendCode = true
            this.codeTimer = setInterval(() => {
              console.log(seconds)
              if (seconds == 0) {
                this.sendCode = false
                clearInterval(this.codeTimer)
                return
              }
              seconds--
              this.codetext = `已发送(${seconds}s)`
            }, 1000)
          } else {
            // 发送失败
            this.codetit = '获取验证码失败'
          }
        })
      }
    },
    // 下一步
    nextClick() {
      // 第一步 基础信息
      if (this.active == 1) {
        // 下一步之前再次验证 数据是否合格
        this.userFocus()
        this.passFocus()
        this.passCheckFocus()
        if (this.userCheck && this.passdCheck && this.twoPassCheck) {
          this.active = 2
        }
      } else if (this.active == 2) {
      }
    },
    // 返回上一步
    backClick() {
      this.active = this.active - 1
    },
    //注册按钮
    regClick() {
      // 注册前 先本地验证
      this.emailFocus()
      if (this.code == '') {
        this.codetit = '* 验证码不能为空'
        return
      }
      if (this.emailCheck) {
        let psd = md5(this.pass)
        let ip = returnCitySN['cip']
        let params = {
          user: this.user,
          psd,
          email: this.email,
          code: this.code,
          ip_address: ip
        }
        register(params).then(res => {
          if (res.code == 200) {
            // 注册成功 处理事务
            this.active = 3
            let regtimer = setTimeout(() => {
              setCookie('USER', res.data) //存入cookie
              setCookie('TOKEN', res.token) //存入cookie
              //信息转码
              let str = encodeURI(JSON.stringify(res.data))
              this.$store.commit('setIsLogin', true)
              this.$store.commit('setUserInfo', str)
              this.$store.commit('setToken', res.token)
              this.$route.query.redirect
                ? this.$router.push({ path: `${this.$route.query.redirect}` })
                : this.$router.push({ name: 'User' })
              clearTimeout(regtimer)
            }, 1200)
          } else {
            this.$notify.error({
              title: '错误信息',
              message: res.msg
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
::v-deep .el-steps--horizontal {
  width: 300px;
  margin: 20px;
}
::v-deep .el-step__head.is-success,
::v-deep .el-step__title.is-success {
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
.step-one,
.step-two {
  width: 100%;
}
.step-two {
  margin-top: 50px;
}
.step-tre {
  min-height: 200px;
  p {
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
  }
}
.code-btn {
  width: 120px !important;
  height: 35px !important;
  background: #eeeeee;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  color: #717171;
  transition: all 0.3s ease;
  &:hover {
    background: #dfdfdf;
  }
}
.btn-box {
  display: flex;
  width: 260px;
  flex-direction: row;
  justify-content: space-between;
  .reg-btn {
    margin-top: 20px;
    border: 1px solid #ce4a50;
    background: #ce4a50;
    &:hover {
      border-color: #e25158;
      background: #e25158;
    }
  }
}
.mint-spinner-snake {
  margin-top: 20px;
  animation: circle 1s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
