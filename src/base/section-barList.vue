<template>
  <div class="barList">
    <div class="section-title">
      <ItemInfo :msg="title"></ItemInfo>
      <div class="myicon add" @click="addList()">+</div>
    </div>
    <ul class="section-body">
      <li v-for="(list,index) in dataList" :key="index">
        <ItemDatabar :group="list"></ItemDatabar>
        <div class="myicon remove" @click="deleteList(index)">X</div>
      </li>
    </ul>
  </div>
</template>

<script>
import ItemInfo from "base/item-info.vue";
import ItemDatabar from "base/item-databar.vue";
import "less/section-base.less";
export default {
  components: {
    ItemInfo,
    ItemDatabar
  },
  data() {
    return {
      template: null,
      dataList: null
    };
  },
  props: ["lists", "title"],
  created(){
    this.template = this.lists[0]
    this.dataList = this.lists;
  },
  methods: {
    addList(){
      this.dataList.push(this.template)
    },
    deleteList(index){
      console.log(index)
      this.dataList.splice(index,1)
    }
  }
};
</script>

<style lang="less">
</style>
