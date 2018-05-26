<template>
  <div class="section">
    <div class="warper">
      <div class="section-title">
        <ItemInfo :msg="section.title"></ItemInfo>
        <div class="myicon add" @click="addList()">+</div>
      </div>
      <ul class="section-body">
        <li v-for="(list,index) in section.list" :key="index">
          <div class="myicon remove" @click="deleteList(index)">X</div>
          <ItemInfo v-for="(item,itemIndex) in list" :key="itemIndex" :msg="item"></ItemInfo>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "less/theme.less";
import ItemInfo from "base/item-info.vue";
export default {
  data() {
    return {
      template: null
    };
  },
  components: {
    ItemInfo
  },
  methods: {
    deleteList(index){
      this.section.list.splice(index,1)
    },
    addList(){
      this.section.list.push(this.template)
    }
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  created(){
    this.template = this.section.list[0]
  }
};
</script>

<style lang="less">
.warper {
  margin-top: 24px;
  .icon {
    transition: all .5s;
    border-radius: 50%;
    border: 1px solid #d6d6d6;
    cursor: pointer;
    text-align: center;
    opacity: 0;
    font-size: 24px;
    font-weight: bolder;
    line-height: 32px;
    width: 32px;
    position: absolute;
    background-color: #fff;
    color: #38a1db;
    &:hover {
      background-color: #38a1db;
      color: #fff;
    }
  }
  .section-title {
    width: 100%;
    position: relative;
    .add {
      right: 0%;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover .add {
      opacity: 1;
    }
  }
  .section-body {
    margin-top: 24px;
    border-left: 1px solid #d1d1d1;
    li {
      padding: 0 32px 8px 32px;
      position: relative;
      .remove {
        font-size: 16px;
        left: 0%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      &:hover .icon {
        opacity: 1;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
