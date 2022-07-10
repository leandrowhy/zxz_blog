<template>
  <div class="login">
    <div class="login-bg"></div>
    <div class="cutover-content login-contain">
      <LoginBox class="animated bounceInRight" v-show="hmiState" />
      <div
        class="handover-box item-box"
        :class="{
          'handover-box-right': hmiState,
          'handover-box-left': !hmiState
        }"
      >
        <div
          class="cutover-content__aside animated bounceInDown"
          v-show="hmiState"
          :class="{ bounceOutDown: !hmiState }"
        >
          <h3>没有账号嘛</h3>
          <p>快来加入我们吧</p>
          <span class="btn jump" @click="hostate">注册</span>
        </div>
        <div
          class="cutover-content__aside animated bounceInDown"
          v-show="!hmiState"
          :class="{ bounceOutDown: hmiState }"
        >
          <h3>已有账号</h3>
          <p>赶紧来登陆吧</p>
          <span class="btn jump" @click="hostate">登陆</span>
        </div>
      </div>
      <RegisterBox class="register-box item-box animated bounceInLeft" v-show="!hmiState" />
    </div>
  </div>
</template>

<script>
import LoginBox from '@/components/Login/LoginBox'
import RegisterBox from '@/components/Login/RegisterBox'
export default {
  name: 'Login',
  components: {
    LoginBox,
    RegisterBox
  },
  data() {
    return {
      hmiState: true //登陆注册界面切换  true 登陆界面  false 注册界面
    }
  },
  mounted() {
    this.$show()
  },
  methods: {
    hostate() {
      this.hmiState = !this.hmiState
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
}
.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee url('../../assets/img/ababd1db8.png');
  background-size: 110%;
  animation: rollbg 20s infinite;
}
.cutover-content {
  position: relative;
  width: 800px;
  height: 530px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.login-contain {
  display: flex;
  .item-box {
    width: 400px;
  }
  .handover-box {
    display: flex;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, #00b5ab, #46d3da);
    color: #fff;
    z-index: 50;
    transition: transform 0.6s;
    .cutover-content__aside {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 150px;
      h3 {
        font-size: 28px;
        font-weight: 800;
      }
      p {
        font-size: 14px;
      }
      .jump {
        background: none;
        border: 1px solid #fff;
        height: 38px;
        line-height: 38px;
        &:hover {
          border-color: #ce4a50;
          background: #ce4a50;
        }
      }
    }
  }
}
::v-deep .btn {
  display: inline-block;
  box-sizing: border-box;
  display: block;
  width: 100px;
  height: 38px;
  line-height: 38px;
  border: none;
  border-radius: 26px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;
}
::v-deep input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 37px;
  border-radius: 0.25rem;
  border: none;
  background: #fff;
  padding: 0 10px;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  border-bottom: 1px solid #000;
  outline: none !important;
  z-index: 2;
  margin-top: 20px;
  &::placeholder {
    color: #dddddd;
  }
  &:focus {
    outline-offset: 0px;
    & + .iptit {
      transform: translateY(-55px);
      opacity: 1;
    }
  }
}
::v-deep .iptit {
  position: absolute;
  transform: translateY(0);
  z-index: 1;
  opacity: 0;
  transition: all 0.4s ease;
  font-size: 14px;
  color: #717171;
}
.handover-box-left {
  transform: translateX(-100%);
}
.handover-box-right {
  transform: translateX(0%);
}
.register-box {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  background: #fff;
  transition: transform 0.6s;
}
/* 背景图片移动 */
@keyframes rollbg {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
