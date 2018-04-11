<template>
  <div id="MyDialogMode">
      <div class="container">
        <div class="header">
          <h1>Resume Editor</h1>
          <i id="CloseButton" class="el-icon-circle-close" @click="Exit()"></i>
        </div>
        <div class="form">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<style lang="less">
#MyDialogMode {
  background-color: rgba(0, 0, 0, 0.733);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .container {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: fixed;
    width: 480px;
    height: 500px;
    background-color: #ffffff;
    position: relative;
    .header {
      #CloseButton {
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 8px;
      }
    }
  }
}
</style>

<script>

export default {
  methods: {
    Exit(){
      this.$emit('ExitDialog')
    }
  }
}
</script>
