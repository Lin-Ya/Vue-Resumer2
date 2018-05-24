<template>
  <div class="info">
    <span contenteditable="true" :class="type">{{msg.content}}</span>
    <select name="infotype" id="infotype" v-show="selecting">
      <option :value="item" v-for="(item, index) in typeList" :key="index" @change="switchType($event)">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "item-info",
  props: {
    msg: {
      type: Object
    }
  },
  data() {
    return {
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      type: "brief",
      selecting: false,
      typeList: [
        "brief",
        "light",
        "title",
        "small-title",
        "big-title",
        "light-title",
        "section-title"
      ]
    };
  },
  created() {
    if (this.msg.style) {
      this.type = this.msg.style;
    }
  },
  methods: {
    switchType(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  margin: 4px 0;
  position: relative;
  span {
    padding: 4px 0;
    display: block;
    &.big-title {
      font-weight: bolder;
      font-size: 32px;
      line-height: 40px;
    }
    &.light {
      color: red;
    }
    &.light-title {
      color: red;
      font-weight: bolder;
    }
    &.small-title {
      font-weight: bolder;
    }
    &.title {
      font-weight: bolder;
      line-height: 32px;
      font-size: 24px;
    }
    &.section-title {
      color: red;
      font-weight: bolder;
      line-height: 32px;
      font-size: 24px;
    }
    &.brief {
      font-weight: light-titleer;
      line-height: 24px;
    }
  }
  select {
    border: 1px solid red;
    width: 80px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
