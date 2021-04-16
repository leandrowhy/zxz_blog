<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ title }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item, index) in list" :key="index">
        <span @click="goRouter(item.pathName, item.index)">
          {{ item.title }}
        </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "dropDown",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    goRouter(name, index) {
      this.$emit("ghIndex", index);
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped lang="scss">
/deep/ .el-dropdown-link:hover {
  cursor: pointer;
  color: #72dafa;
}

/deep/ .el-icon-arrow-down {
  font-size: 14px;
}
</style>
