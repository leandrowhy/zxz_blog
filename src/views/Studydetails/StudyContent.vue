<template>
  <div class="content">
    <div class="header">
      <h2>{{ enter.title }}</h2>
      <div class="contain-msg">
        <span class="fa tag"
          ><i class="iconfont icon-number-sign-full"></i
          >{{ enter.partitions }}</span
        >
        <span class="fa clock"
          ><i class="iconfont icon-shijian"></i
          >{{ enter.date | timeTransformation }}</span
        >
        <span class="fa eye"
          ><i class="iconfont icon-liulan"></i>{{ enter.views }}次浏览</span
        >
        <span class="fa comments"
          ><i class="iconfont icon-pinglun"></i>{{ 0 }}</span
        >
      </div>
      <em v-if="enter.copyright"
        >版权声明：本文为博主原创文章，转载请说明来源</em
      >
      <em v-else
        >版权声明：非原创，转载地址：
        <a :href="enter.reprint" target="_blank" rel="noopener noreferrer"
          >{{enter.reprint}}</a
        ></em
      >
      <hr />
    </div>
    <div class="inner" ref="content" v-html="code"></div>
    <StudyComment />
  </div>
</template>

<script>
import StudyComment from "@/views/Studydetails/StudyComment";
//markdown语法解析
import marked from "marked";
import hljs from "highlight.js";
import { getArticleInfo, addArticleViews } from "@/api/api";

export default {
  name: "StudyContent",
  components: {
    StudyComment,
  },
  props: {
    enter: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      code: "",
      sectionContainer: "",
    };
  },
  created() {
    // this.getData();
  },
  filters: {
    timeTransformation(inputTime) {
      let date = new Date(inputTime);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      // getArticleInfo({ id }).then((res) => {
      //   this.enter = res.data.content;
      //   this.toProcess();
      // });
      this.toProcess();
      addArticleViews({ id });
    },
    toProcess() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      this.code = marked(this.enter.context);
      setTimeout(() => {
        this.sectionContainer = this.getContent();
        this.$bus.$emit("section", this.sectionContainer);
      }, 100);
    },
    getContent() {
      let self = this;
      let sectionContainer;
      let each = [].forEach;
      // 获取dom
      let content = this.$refs.content;
      // 提取h3标签
      let headers = content.querySelectorAll("h3");
      sectionContainer = document.createElement("ul");
      each.call(headers, function (h, i) {
        sectionContainer.appendChild(self.makeLink(h, i));
      });
      return sectionContainer.innerHTML;
    },
    makeLink(h, i) {
      let link = document.createElement("li");
      h.id = "directory" + i;
      window.arst = h;
      let text = [].slice
        .call(h.childNodes)
        .map(function (node) {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.nodeValue;
          } else if (["CODE", "SPAN"].indexOf(node.tagName) !== -1) {
            return node.textContent;
          } else {
            return "";
          }
        })
        .join("")
        .replace(/\(.*\)$/, "");
      link.innerHTML =
        '<a class="section-link" data-scroll href="#directory' +
        i +
        '">' +
        this.htmlEscape(text) +
        "</a>";
      return link;
    },
    htmlEscape(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    },
    // collectH3s(h) {
    //   let h3s = [];
    //   let next = h.nextSibling;
    //   while (next && next.tagName !== "H2") {
    //     if (next.tagName === "H3") {
    //       h3s.push(next);
    //     }
    //     next = next.nextSibling;
    //   }
    //   return h3s;
    // },
  },
  watch: {
    enter: function (indexVal, oldVal) {
      if (indexVal.id) {
        this.getData();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  background: #fff;
  padding: 24px 40px 40px;
}
.header {
  h2 {
    font-size: 34px;
    font-weight: bold;
    color: #000;
    padding: 10px 0;
  }
  .contain-msg {
    margin-top: 8px;
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    color: #a0a0a0;
    text-indent: 6px;
    .fa {
      padding-right: 15px;
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      color: #a0a0a0;
    }
    i {
      padding-right: 3px;
      font-size: 12px;
    }
  }
  em {
    color: red;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
