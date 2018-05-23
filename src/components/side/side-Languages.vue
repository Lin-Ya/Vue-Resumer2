<template>
  <div id="details">
    <div class="side-title">
      <ItemInfo :msg="title"></ItemInfo>
    </div>
    <div class="side-con">
      <ItemInfo :msg="title"></ItemInfo>      
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import ItemImagePacker from "base/item-imagePacker.vue";
export default {
  name: "",
  data() {
    return {
      title: {
        style: "lightTitle",
        content: "Details"
      },
      date: {
        style: 'brief',
        content: '06/06/1996'
      },
      address: {
        style: 'brief',
        content: 'Leo Sentro 25'
      },
      email: {
        style: 'brief',
        content: 'fenghuiwing@outlook.com'
      }
    };
  },
  components: {
    ItemInfo,
    ItemImagePacker
  }
};
</script>

<style lang="less" scoped>
</style>
