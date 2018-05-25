<template>
  <div id="socail" class="side-cell">
    <div class="warper">
      <ItemListInfo class="listItem" :title="title" :lists="contact"></ItemListInfo>
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
      contact: [
        {
          content: "https://github.com/Lin-Ya"
        }
      ]
    };
  }
};
</script>