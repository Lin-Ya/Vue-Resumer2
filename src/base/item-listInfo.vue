<template>
  <div>
    <div class="listInfo" v-for="list in lists">
      <ItemImagePacker class="imgPacker"></ItemImagePacker>
      <ItemInfo class="content" :msg="list"></ItemInfo>
    </div>
  </div>

</template>

<style lang="less" scoped>
.listInfo {
  border: 1px solid red;
  display: flex;
  height: 48px;
  align-items: center;
  margin-top: 8px;
  .imgPacker {
    width: 32px;
    height: 32px;
    margin-right: 20px;
  }
}
</style>

<script>
import ItemInfo from "base/item-info.vue";
import ItemImagePacker from "base/item-imagePacker.vue";
export default {
  props: ["lists"],
  data() {
    return {};
  },
  components: {
    ItemInfo,
    ItemImagePacker
  },
  props: ["lists"]
};
</script>
