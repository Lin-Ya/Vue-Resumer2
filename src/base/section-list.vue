<template>
  <div class="listInfo">
    <div class="section-title">
      <ItemInfo :msg="title"></ItemInfo>
      <div class="icon add" @click="addList()">+</div>
    </div>
    <ul class="section-body">
      <li v-for="(list,index) in lists">
        <div class="icon remove" @click="deleteList(index)">X</div>
        <ItemImagePacker class="imgPacker" :custom="list.logo"></ItemImagePacker>
        <ItemInfo class="content" :msg="list"></ItemInfo>
      </li>
    </ul>
  </div>

</template>

<style lang="less" scoped>
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
.icon {
  transition: all 0.5s;
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
  color: red;
  &:hover {
    background-color: red;
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
  li {
    position: relative;
    .remove {
      font-size: 16px;
      right: -50%;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover .icon {
      opacity: 1;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
}
</style>

<script>
import ItemInfo from "base/item-info.vue";
import ItemImagePacker from "base/item-imagePacker.vue";
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
