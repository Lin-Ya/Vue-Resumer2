<template>
  <div class="imageGroup">
    <input type="file" v-on:change="uploadImg($event)">
    <img src="@/assets/logo.png">
  </div>
</template>

<style lang="less">
.imageGroup {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid red;
  overflow: hidden;
  input {
    display: block;
    width: 100%;
    height: 100%;
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
  methods: {}
};
</script>

