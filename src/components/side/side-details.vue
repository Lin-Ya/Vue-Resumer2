<template>
  <div id="details" class="side-cell">
    <div class="warper">
      <SectionInfo class="listItem" :title="title" :lists="contact"></SectionInfo>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import SectionInfo from "base/section-list.vue";
import ItemDatabar from "base/item-databar.vue";
import telImg from "img/phone.png";
import emailImg from "img/mail.png";
import qqImg from "img/qq.png";
import wxImg from "img/wechat.png";
import blogImg from "img/blog.png";
import linkinImg from "img/linkin.png";
export default {
  name: "",
  data() {
    return {
      title: {
        style: "section-title",
        content: "Contact"
      },
      contact: [
        {
          content: "13123456789",
          logo: telImg
        },
        {
          content: "fenghuiwing@outlook.com",
          logo: emailImg
        },
        {
          content: "9*****96",
          logo: qqImg
        },
        {
          content: "dx***ng",
          logo: wxImg
        },
        {
          content: "9*****96",
          logo: blogImg
        },
        {
          content: "dx***ng",
          logo: linkinImg
        }
      ]
    };
  },
  components: {
    ItemInfo,
    SectionInfo,
    ItemDatabar
  }
};
</script>

<style lang="less">
</style>
