<template>
  <div class="essay">
    <div class="essay-top"><EssaySearch /></div>
    <div class="contain">
      <EssayLeft :class="['contain-left']" :articcle="articcle" />
      <EssayRight :class="['contain-right']" />
    </div>
  </div>
</template>

<script>
import EssaySearch from "@/views/Essay/EssaySearch";
import EssayLeft from "@/views/Essay/EssayLeft";
import EssayRight from "@/views/Essay/EssayRight";
import { getArticle } from "@/api/api";
export default {
  name: "Essay",
  components: {
    EssaySearch,
    EssayLeft,
    EssayRight,
  },
  data() {
    return {
      articcle: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getArticle({ pageNumber: 1, pageSize: 1000 }).then((res) => {
        this.articcle = res.data.content;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.essay {
  width: 100%;
  padding-top: 40px;
  background: #f4f5f7;
}
.essay-top {
  position: fixed;
  top: 70px;
  width: 100%;
  background: #f4f5f7;
  z-index: 600;
}
.contain {
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 50px;
  max-width: 1300px;
  min-width: 1024px;
  /deep/ .contain-left {
    flex: 1;
    background: #ffffff;
  }
  /deep/ .contain-right {
    margin-left: 16px;
    // background: #ffffff;
    width: 280px;
    z-index: 610;
  }
}
</style>
