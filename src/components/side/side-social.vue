<template>
  <div id="socail" class="side-cell">
    <div class="warper">
      <SectionInfo class="listItem" :title="title" :lists="contact"></SectionInfo>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import SectionInfo from "base/section-list.vue";
import zhihuImg from "img/zhihu.png";
import weiboImg from "img/weibo.png";
import juejinImg from "img/juejin.png";
import jianshuImg from "img/jianshu.png";

export default {
  name: "socail",
  components: {
    ItemInfo,
    SectionInfo
  },
  data() {
    return {
      title: {
        style: "section-title",
        content: "Social"
      },
      contact: [
        {
          content: "https://github.com/Lin-Ya"
        },
        {
          content: "https://github.com/Lin-Ya",
          logo: zhihuImg
        },
        {
          content: "https://github.com/Lin-Ya",
          logo: weiboImg
        },
        {
          content: "https://github.com/Lin-Ya",
          logo: juejinImg
        },
        {
          content: "https://github.com/Lin-Ya",
          logo: jianshuImg
        }
      ]
    };
  }
};
</script>