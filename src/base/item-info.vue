<template>
  <div class="info">
    <span contenteditable="true" :class="msg.style">{{msg.content}}</span>
  </div>
</template>

<script>
export default {
  name: "item-info",
  props: {
    msg: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  margin: 2px 0;
  span {
    padding: 4px;
    display: block;
    &.bingTitle {
      font-weight: bolder;
      font-size: 32px;
      line-height: 40px;
    }
    &.light {
      color: red;
      font-weight: bolder;
    }
    &.title {
      color: red;
      font-weight: bolder;
      line-height: 32px;
      font-size: 24px;
    }
    &.brief {
      font-weight: lighter;
      line-height: 24px;
    }
  }
}
</style>
