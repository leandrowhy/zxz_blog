<template>
  <div class="login-box">
    <div class="centen-box">
      <h2 class="title">登陆</h2>
      <div class="box">
        <div class="input-box">
          <input type="text" placeholder="请输入邮箱、用户名、账号" v-model="user" />
          <p class="el-icon-user iptit">账号：</p>
        </div>
        <div class="input-box">
          <input type="password" placeholder="请输入密码" v-model="psd" />
          <p class="el-icon-lock iptit">密码：</p>
        </div>
        <p class="forget" title="忘记密码？">忘记密码</p>
        <span class="btn login-btn" @click="loginCLick">登陆</span>
      </div>
    </div>
    <!-- 快捷登陆 -->
    <div class="login-thirdpart">
      <span class="iconfont icon-qq" title="QQ登陆" @click="qqAuth"></span>
      <span class="iconfont icon-wechat-fill" title="微信登陆" @click="thirdParty"></span>
      <span class="iconfont icon-github1" title="GitHub登陆" @click="gitHubLogin"></span>
    </div>
    <!-- 登录加载盒子 -->
    <div class="load" v-show="isloading" ref="load">
      <div class="felx-box">
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
    </div>
  </div>
</template>

<script>
import { setLocal, getLocal } from '@/tools/localStorage'
import { Login, githubLogin, qqLogin } from '@/api/api'
import md5 from 'js-md5'
import { setCookie } from '@/tools/cookie'
export default {
  name: 'LoginBox',
  data() {
    return {
      user: '',
      psd: '',
      isloading: false
    }
  },
  created() {
    // 获取url里面的code
    const code = this.$route.query.code || ''
    this.$route.query.code = ''
    let that = this
    let type = getLocal('login_type') || ''
    if (code == '' || type == '') {
      return
    }
    this.isloading = true
    let quickLogin = null
    if (type == 1) {
      quickLogin = qqLogin
    } else {
      quickLogin = githubLogin
    }
    quickLogin({ code }).then(
      res => {
        that.loginLogic(res)
      },
      err => {
        console.log(err)
      }
    )
  },
  mounted() {
    const body = document.querySelector('body')
    if (body.append) {
      body.append(this.$refs.load)
    } else {
      body.appendChild(this.$refs.load)
    }
  },
  methods: {
    // 登陆按钮
    loginCLick() {
      if (this.user == '' && this.psd == '') {
        this.$notify.error({
          title: '错误信息',
          message: '用户名或密码不能为空'
        })
        return
      }
      let psd = md5(this.psd)
      let that = this
      this.isloading = true
      Login({ user: this.user, psd }).then(res => {
        that.loginLogic(res)
      })
    },
    loginLogic(res) {
      if (res.code == 200) {
        // 登录成功 处理事务
        let regtimer = setTimeout(() => {
          this.$notify({
            title: '成功信息',
            message: '登陆成功',
            type: 'success'
          })
          setLocal('TOKEN', res.token)
          setLocal('USER', res.data) //存入localstorage
          setCookie('TOKEN', res.token) //存入cookie
          //信息转码
          this.$store.commit('setIsLogin', true)
          this.$store.commit('setUserInfo', res.data)
          this.$store.commit('setToken', res.token)
          this.$route.query.redirect
            ? this.$router.push({ path: `${this.$route.query.redirect}` })
            : this.$router.push({ name: 'User' })
          clearTimeout(regtimer)
          this.isloading = false
        }, 1200)
      } else {
        this.$notify.error({
          title: '错误信息',
          message: res.msg
        })
        this.isloading = false
      }
    },
    thirdParty() {
      this.$notify.info({
        title: '登陆提示',
        message: '该登陆方式暂未开放~'
      })
    },
    gitHubLogin() {
      setLocal('login_type', '2')
      window.location.href =
        'https://github.com/login/oauth/authorize?client_id=e4a1ffcdc0a852a9cc1b&redirect_uri=http://clowned.cn/login'
      // window.open(
      //   url,
      //   '_blank',
      //   'GitHubLogin',
      //   'width=450,height=320,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1'
      // )
    },
    // 简单粗暴
    qqAuth() {
      setLocal('login_type', '1')
      const appId = '101998428'
      const redirectUrl = 'http://clowned.cn/login' // 回调地址 我这里路由是/login 你的是什么填什么
      const url = `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${appId}&redirect_uri=${redirectUrl}`
      window.location.href = url
      // window.open(
      //   url,
      //   '_blank',
      //   'TencentLogin',
      //   'width=45,height=32,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1'
      // )
      // 开始访问请求 ，这个时候用户点击登陆，就会跳转到qq登陆界面，
      //登陆后会返回code 到最开始我们写好的后端接口也就是回调地址哪里，开始操作
    }
  }
}
</script>

<style scoped lang="scss">
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
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
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
.load {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  background: rgba($color: #000, $alpha: 0.5);
  z-index: 1000;
  .felx-box {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    color: #fff;
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
