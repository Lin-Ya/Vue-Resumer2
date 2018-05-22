<template>
  <div class="upload">
    <input type="file" v-on:change="uploadImg($event)">
    <img :src="this.src" id="touxiang">
  </div>
</template>

<style lang="less">
  .upload {
    width: 200px;
    height: 200px;

  img {
    width: 100%;
    height: 100%;
  }

  }
</style>]

<script>
  import AV from "../lib/leancloud.js";

  export default {
    data() {
      return {
        src: ''
      }
    },
    methods: {
      uploadImg(e) {
        console.log(e.target.files[0])
        var localFile = e.target.files[0];
        var name = "haha.png";
        var file = new AV.File(name, localFile);
        file.save().then(
          (file) => {
            this.src = file.url();
          },
          (error) => {
            console.error(error)
          })
      }
    }
  }
</script>

