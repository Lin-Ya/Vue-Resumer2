<template>
  <div class="imageGroup">
    <input type="file" v-on:change="uploadImg($event)">
    <img src="">
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
export default {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    uploadImg(e){
      let reader = new FileReader()
      let file = e.target.files[0];
      if(!file.type.match('image/*')){
        alert('上传的图片必须是png、gif、jpg格式哟！')
        e.target.value = '';
        return
      }
      reader.readAsDataURL(file)
        console.log(reader)
      reader.onload = function (ev) {
        let img = document.getElementsByTagName('img')
        img[0].src = ev.target.result;
      }
    }
  }
};
</script>

