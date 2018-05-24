<template>
  <div class="imageGroup">
    <input type="file" v-on:change="uploadImg($event)">
    <img :src="src">
  </div>
</template>

<style lang="less">
.imageGroup {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  input {
    display: block;
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: 999;
    opacity: 0;
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>]

<script>
import defaultImg from "img/default.png";
export default {
  data() {
    return {
      src: defaultImg
    };
  },
  props: {
    custom: {
      type: String,
      required: false
    }
  },
  methods: {
    uploadImg(e) {
      let img = e.target.nextElementSibling;
      let reader = new FileReader();
      let file = e.target.files[0];
      if (!file.type.match("image/*")) {
        alert("上传的图片必须是png、gif、jpg格式哟！");
        e.target.value = "";
        return;
      }
      reader.readAsDataURL(file);
      console.log(reader);
      reader.onload = function(ev) {
        img.src = ev.target.result;
      };
    }
  },
  created(){
    if(this.custom){
      this.src = this.custom
    }
  }
};
</script>

