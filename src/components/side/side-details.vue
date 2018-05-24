<template>
  <div id="details"  class="side-cell">
    <div class="warper">
      <ItemInfo :msg="title"></ItemInfo>
      <ItemListInfo class="listItem" :lists="contact"></ItemListInfo>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import ItemListInfo from "base/item-listInfo.vue";
import ItemDatabar from 'base/item-databar.vue';
import telImg from "img/phone.png";
import emailImg from "img/mail.png";
export default {
  name: "",
  data() {
    return {
      title: {
        style: "lightTitle",
        content: "Contact"
      },
      contact:{
        tel: {
          content: '13123456789',
          logo: telImg
        },
        email: {
          content: 'fenghuiwing@outlook.com',
          logo: emailImg  
        }
      }
    };
  },
  components: {
    ItemInfo,
    ItemListInfo,
    ItemDatabar
  }
};
</script>

<style lang="less" scoped>
.listItem {
  margin-top: 24px;
}
</style>
