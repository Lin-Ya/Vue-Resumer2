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
  margin-top: 24px;
  .section-title {
    width: 240px;
  }
  .section-body {
    margin-top: 24px;
    border-left: 1px solid #bababa;
    li {
      padding: 0 32px 8px 32px; 
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
