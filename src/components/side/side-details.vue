<template>
  <div id="details">
    <div class="warper">
      <ItemInfo :msg="title"></ItemInfo>
      <ItemListInfo class="listItem" :lists="contact"></ItemListInfo>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import ItemListInfo from "base/item-listInfo.vue";
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
          content: '13123456789'
        }
      }
    };
  },
  components: {
    ItemInfo,
    ItemListInfo
  }
};
</script>

<style lang="less" scoped>
.listItem {
  margin-top: 24px;
}
</style>
