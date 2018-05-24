<template>
  <div id="socail" class="side-cell">
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
  name: "socail",
  components: {
    ItemInfo,
    ItemListInfo
  },
  data() {
    return {
      title: {
        style: "section-title",
        content: "Social"
      },
      contact: {
        github: {
          content: "https://github.com/Lin-Ya"
        }
      }
    };
  }
};
</script>