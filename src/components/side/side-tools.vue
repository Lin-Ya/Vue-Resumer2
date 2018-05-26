<template>
  <div id="tools" class="side-cell">
    <div class="warper">
    <SectionBarList :title="title" :lists="dataLists"></SectionBarList>
    </div>
    <!-- <ItemDatabar :group="item.dataGroup" v-for="(item,index) in items" :key="index"></ItemDatabar> -->
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import SectionBarList from "base/section-barList.vue";
export default {
  name: "tools",
  components: {
    ItemInfo,
    SectionBarList
  },
  data() {
    return {
      title: {
        style: "section-title",
        content: "Tools"
      },
      dataLists: [
        {
          number: "75",
          name: {
            content: "Visual Studio Code"
          }
        },
        {
          number: "75",
          name: {
            content: "Google Chrome"
          }
        },
        {
          number: "80",
          name: {
            content: "Adobe Photoshop"
          }
        },
        {
          number: "65",
          name: {
            content: "Axure"
          }
        }
      ]
    };
  }
};
</script>

<style lang="less">
</style>
