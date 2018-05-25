<template>
  <div class="databar">
    <div class="content">
      <ItemInfo :msg="group.name"></ItemInfo>
      <div class="bar topbar" :style="{width:group.number+'%'}"></div>
      <div class="bar bottombar"></div>
    </div>
    <div class="num">
      <input contenteditable="true" v-model="group.number" maxlength="2">
      <span>%</span>
    </div>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
export default {
  data() {
    return {
      source: null,
      default: {
        number: "80",
        name: {
          style: "brief",
          content: "java"
        }
      }
    };
  },
  props: {
    group: {
      type: Object
    }
  },
  components: {
    ItemInfo
  },
  created() {
    if (this.group) {
      this.source = this.group;
      return;
    } else {
      this.source = this.default;
    }
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
      transition: all 0.3s;
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
