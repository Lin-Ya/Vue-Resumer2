<template>
  <div class="section">
    <div class="warper">
      <div class="section-title">
        <ItemInfo :msg="section.title"></ItemInfo>
      </div>
      <ul class="section-body">
        <li v-for="(list,index) in section.list" :key="index">
          <ItemInfo v-for="(item,itemIndex) in list" :key="itemIndex" :msg="item"></ItemInfo>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
export default {
  components: {
    ItemInfo
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.warper {
  margin: 24px 0;
  padding: 4px;
  ul {
    border-left: 1px solid #bababa;
    li {
      padding-left: 32px;
    }
  }
}
</style>
