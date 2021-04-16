<template>
  <div class="item">
    <p class="title">{{ titleTag }}</p>
    <span class="text">{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: "BlogInfoItem",
  props: {
    titleTag: {
      type: String,
      default: "~",
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
