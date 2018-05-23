<template>
  <div id="details">
    <div class="warper">
      <ItemSection :section="section"></ItemSection>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import ItemSection from "base/item-section";
import ItemImagePacker from "base/item-imagePacker.vue";
export default {
  name: "",
  data() {
    return {
      section: {
        title: {
          style: "lightTitle",
          content: "Details"
        },
        list: [
          {
            date: {
              content: '08 1994'
            },
            email: {
              style: 'light',
              content: 'fenghuiwing@outlook.com'
            },
            tel: {
              content: '132 0261 7737'
            }
          }
        ]
      }
    };
  },
  components: {
    ItemInfo,
    ItemSection,
    ItemImagePacker
  }
};
</script>

<style lang="less" scoped>
</style>
