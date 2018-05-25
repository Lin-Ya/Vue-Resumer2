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

<style lang="less" scoped>
</style>
