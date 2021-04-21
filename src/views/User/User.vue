<template>
  <div class="user">
    user
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  created() {
    this.$show();
  },
};
</script>
 
<style scoped lang = "scss">
</style>