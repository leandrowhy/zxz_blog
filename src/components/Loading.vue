<!--
 * @Author: leandrowhy
 * @Date: 2021-11-19 09:19:32
 * @Description: 加载动画效果组件
-->
<template>
  <div class="loading">
    <!-- 音频波形Loading动画 -->
    <div id="preloader_1" v-if="type === 'sonic'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 圆形变矩形Loading动画 -->
    <div id="preloader_2" v-else-if="type === 'round'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 交叉图形变换Loading动画 -->
    <div id="preloader_3" v-else-if="type === 'cross'"></div>
    <!-- 蛇形Loading动画 -->
    <div id="preloader_4" v-else-if="type === 'snake'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- 旋转轮盘Loading动画 -->
    <div id="preloader_5" v-else-if="type === 'rotat'"></div>
    <!-- windows标志Loading动画 -->
    <div id="preloader_6" v-else-if="type === 'win'">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loadding',
  props: {
    type: String,
    default: 'snake'
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-right: 50px;
}
#preloader_1 {
  position: relative;
}
#preloader_1 span {
  display: block;
  bottom: 0px;
  width: 9px;
  height: 5px;
  background: #9b59b6;
  position: absolute;
  animation: preloader_1 1.5s infinite ease-in-out;
}
#preloader_1 span:nth-child(2) {
  left: 11px;
  animation-delay: 0.2s;
}
#preloader_1 span:nth-child(3) {
  left: 22px;
  animation-delay: 0.4s;
}
#preloader_1 span:nth-child(4) {
  left: 33px;
  animation-delay: 0.6s;
}
#preloader_1 span:nth-child(5) {
  left: 44px;
  animation-delay: 0.8s;
}
@keyframes preloader_1 {
  0% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
  25% {
    height: 30px;
    transform: translateY(15px);
    background: #3498db;
  }
  50% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
  100% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
}
#preloader_2 {
  position: relative;
  left: 50%;
  width: 40px;
  height: 40px;
}
#preloader_2 span {
  display: block;
  bottom: 0px;
  width: 20px;
  height: 20px;
  background: #9b59b6;
  position: absolute;
}
#preloader_2 span:nth-child(1) {
  animation: preloader_2_1 1.5s infinite ease-in-out;
}
#preloader_2 span:nth-child(2) {
  left: 20px;
  animation: preloader_2_2 1.5s infinite ease-in-out;
}
#preloader_2 span:nth-child(3) {
  top: 0px;
  animation: preloader_2_3 1.5s infinite ease-in-out;
}
#preloader_2 span:nth-child(4) {
  top: 0px;
  left: 20px;
  animation: preloader_2_4 1.5s infinite ease-in-out;
}
@keyframes preloader_2_1 {
  0% {
    -transform: translateX(0px) translateY(0px) rotate(0deg);
    border-radius: 0px;
  }
  50% {
    -transform: translateX(-20px) translateY(-10px) rotate(-180deg);
    border-radius: 20px;
    background: #3498db;
  }
  80% {
    -transform: translateX(0px) translateY(0px) rotate(-360deg);
    border-radius: 0px;
  }
  100% {
    -transform: translateX(0px) translateY(0px) rotate(-360deg);
    border-radius: 0px;
  }
}
@keyframes preloader_2_2 {
  0% {
    -transform: translateX(0px) translateY(0px) rotate(0deg);
    border-radius: 0px;
  }
  50% {
    -transform: translateX(20px) translateY(-10px) rotate(180deg);
    border-radius: 20px;
    background: #f1c40f;
  }
  80% {
    -transform: translateX(0px) translateY(0px) rotate(360deg);
    border-radius: 0px;
  }
  100% {
    -transform: translateX(0px) translateY(0px) rotate(360deg);
    border-radius: 0px;
  }
}
@keyframes preloader_2_3 {
  0% {
    -transform: translateX(0px) translateY(0px) rotate(0deg);
    border-radius: 0px;
  }
  50% {
    -transform: translateX(-20px) translateY(10px) rotate(-180deg);
    border-radius: 20px;
    background: #2ecc71;
  }
  80% {
    -transform: translateX(0px) translateY(0px) rotate(-360deg);
    border-radius: 0px;
  }
  100% {
    -transform: translateX(0px) translateY(0px) rotate(-360deg);
    border-radius: 0px;
  }
}
@keyframes preloader_2_4 {
  0% {
    -transform: translateX(0px) translateY(0px) rotate(0deg);
    border-radius: 0px;
  }
  50% {
    -transform: translateX(20px) translateY(10px) rotate(180deg);
    border-radius: 20px;
    background: #e74c3c;
  }
  80% {
    -transform: translateX(0px) translateY(0px) rotate(360deg);
    border-radius: 0px;
  }
  100% {
    -transform: translateX(0px) translateY(0px) rotate(360deg);
    border-radius: 0px;
  }
}
#preloader_3 {
  position: relative;
}
#preloader_3:before {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: blue;
  content: '';
  position: absolute;
  background: #9b59b6;
  animation: preloader_3_before 1.5s infinite ease-in-out;
}

#preloader_3:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: blue;
  content: '';
  position: absolute;
  background: #2ecc71;
  left: 22px;
  animation: preloader_3_after 1.5s infinite ease-in-out;
}
@keyframes preloader_3_before {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(50px) scale(1.2) rotate(260deg);
    background: #2ecc71;
    border-radius: 0px;
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
@keyframes preloader_3_after {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-50px) scale(1.2) rotate(-260deg);
    background: #9b59b6;
    border-radius: 0px;
  }
  100% {
    transform: translateX(0px);
  }
}
#preloader_4 {
  position: relative;
}
#preloader_4 span {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #3498db;
  opacity: 0.5;
  border-radius: 20px;
  -animation: preloader_4 1s infinite ease-in-out;
}
#preloader_4 span:nth-child(2) {
  left: 20px;
  animation-delay: 0.2s;
}
#preloader_4 span:nth-child(3) {
  left: 40px;
  animation-delay: 0.4s;
}
#preloader_4 span:nth-child(4) {
  left: 60px;
  animation-delay: 0.6s;
}
#preloader_4 span:nth-child(5) {
  left: 80px;
  animation-delay: 0.8s;
}
@keyframes preloader_4 {
  0% {
    opacity: 0.3;
    transform: translateY(0px);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
    background: #f1c40f;
    box-shadow: 0px 20px 3px rgba(0, 0, 0, 0.05);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0px);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }
}
#preloader5 {
  position: relative;
  width: 30px;
  height: 30px;
  background: #3498db;
  border-radius: 50px;
  animation: preloader_5 1.5s infinite linear;
}
#preloader5:after {
  position: absolute;
  width: 50px;
  height: 50px;
  border-top: 10px solid #9b59b6;
  border-bottom: 10px solid #9b59b6;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-radius: 50px;
  content: '';
  top: -20px;
  left: -20px;
  animation: preloader_5_after 1.5s infinite linear;
}
@keyframes preloader_5 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    background: #2ecc71;
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes preloader_5_after {
  0% {
    border-top: 10px solid #9b59b6;
    border-bottom: 10px solid #9b59b6;
  }
  50% {
    border-top: 10px solid #3498db;
    border-bottom: 10px solid #3498db;
  }
  100% {
    border-top: 10px solid #9b59b6;
    border-bottom: 10px solid #9b59b6;
  }
}
#preloader_6 {
  position: relative;
  width: 42px;
  height: 42px;
  animation: preloader_6 5s infinite linear;
}
#preloader_6 span {
  width: 20px;
  height: 20px;
  position: absolute;
  background: red;
  display: block;
  animation: preloader_6_span 1s infinite linear;
}
#preloader_6 span:nth-child(1) {
  background: #2ecc71;
}
#preloader_6 span:nth-child(2) {
  left: 22px;
  background: #9b59b6;
  animation-delay: 0.2s;
}
#preloader_6 span:nth-child(3) {
  top: 22px;
  background: #3498db;
  animation-delay: 0.4s;
}
#preloader_6 span:nth-child(4) {
  top: 22px;
  left: 22px;
  background: #f1c40f;
  animation-delay: 0.6s;
}
@keyframes preloader_6 {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@keyframes preloader_6_span {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
