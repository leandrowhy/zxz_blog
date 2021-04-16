<template>
  <div class="title-box">
    <div class="sidetip" :class="{ 'bot-red': !isGreen }">
      <span :class="{ green: isGreen }">{{ title }}</span>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "titleBox",
  props: {
    isGreen: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.title-box {
  width: 100%;
  background: #fff;
  border-radius: 15px;
  margin-top: 16px;
  padding-bottom: 20px;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.04);
  .sidetip {
    position: relative;
    color: #717171;
    font-size: 14px;
    width: 80%;
    height: 30px;
    border-bottom: 1px solid #e8e8e8;
    margin: 0 16px;
    margin-bottom: 16px;
    padding-top: 16px;
    text-indent: 8px;
  }
  .bot-red::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 60px;
    height: 3px;
    background: #dc143c;
    border-radius: 10px;
  }
}
.green {
  position: relative;
  border-left: 3px solid #009688;
  padding: 0 4px;
  font-size: 14px;
  font-weight: 700;
  text-indent: 6px;
  color: #000;
}
</style>
