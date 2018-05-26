<template>
  <div class="listInfo">
    <div class="section-title">
      <ItemInfo :msg="title"></ItemInfo>
      <div class="myicon add" @click="addList()">+</div>
    </div>
    <ul class="section-body">
      <li v-for="(list,index) in lists" :key="index">
        <div class="myicon remove" @click="deleteList(index)">X</div>
        <ItemImagePacker class="imgPacker" :custom="list.logo"></ItemImagePacker>
        <ItemInfo class="content" :msg="list"></ItemInfo>
      </li>
    </ul>
  </div>

</template>

<style lang="less">
.listInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 16px;
    height: 48px;
  }
  .imgPacker {
    width: 32px;
    height: 32px;
    margin-right: 20px;
  }
}
</style>

<script>
import "less/theme.less";
import ItemInfo from "base/item-info.vue";
import ItemImagePacker from "base/item-imagePacker.vue";
import "less/section-base.less";
export default {
  props: ["lists", "title"],
  data() {
    return {
      template: null
    };
  },
  created(){
    this.template = this.lists[0]
  },
  components: {
    ItemInfo,
    ItemImagePacker
  },
  methods: {
    addList(){
      this.lists.push(this.template)
    },
    deleteList(index){
      this.lists.splice(index,1)
    }
  }
};
</script>
