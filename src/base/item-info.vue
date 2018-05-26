<template>
  <div class="info" @contextmenu.prevent="showMenu($event)">
    <div class="content" :class="{'editing':selecting}">
      <span contenteditable="true" :class="change">{{msg.content}}</span>
    </div>
    <div class="menu" v-show="selecting">
      <select name="infotype" id="infotype" v-model="type" @change="switchType($event)">
        <option :value="item" v-for="(item, index) in typeList" :key="index">{{item}}</option>
      </select>
      <span class="cancel" @click="restore()">Cancel</span>
    </div>
  </div>
</template>

<script>
import "less/theme.less";
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
    showMenu(e) {
      this.selecting = true;
    },
    switchType(e) {
      let selected = e.srcElement.selectedOptions[0];
      this.type = selected.label;
      this.restore()
    },
    restore(){
      this.selecting = false;
    }
  },
  computed: {
    change: function() {
      return this.type;
    }
  }
};
</script>

<style lang="less">
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
      color: #38a1db;
    }
    &.light-title {
      color: #38a1db;
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
      color: #38a1db;
      font-weight: bolder;
      line-height: 32px;
      font-size: 24px;
    }
    &.brief {
      font-weight: light-titleer;
      line-height: 24px;
    }
  }
  .editing span {
    filter: blur(2px);
  }
  .menu {
    position: absolute;
    width: auto;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    text-align: center;
    select {
      border: 1px solid #d1d1d1;
      border-radius: 8px;
      height: 32px;
      width: 160px;
      margin-right: 8px;
    }
    .cancel {
      color: #38a1db;
      background-color: #fff;
      border-radius: 8px;
      border: 1px solid #d1d1d1;
      height: 32px;
      width: 72px;
      display: block;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: #38a1db;
        color: #fff;
      }
    }
  }
}
</style>
