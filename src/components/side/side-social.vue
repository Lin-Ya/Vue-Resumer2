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
        }
      ]
    };
  }
};
</script>