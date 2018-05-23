<template>
  <div class="databar">
    <div class="content">
      <ItemInfo :msg="java"></ItemInfo>
      <div class="bar topbar" :style="{width:number+'%'}"></div>
      <div class="bar bottombar"></div>
    </div>
    <div class="num">
      <input contenteditable="true" @input="setBar($event)" v-model="number" maxlength="2">
      <span>%</span>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
export default {
  data() {
    return {
      number: "80",
      java: {
        style: "brief",
        content: "java"
      }
    };
  },
  components: {
    ItemInfo
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.databar {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  .content {
    position: relative;
    width: 240px;
    .bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      border-radius: 1px;
      background-color: #dfdfdf;
    }
    .topbar {
      z-index: 2;
      background-color: red;
    }
    .bottombar {
      width: 100%;
      z-index: 1;
    }
  }
  .num {
    input {
      width: 2em;
    }
  }
}
</style>
