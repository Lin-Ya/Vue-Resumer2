<template>
  <div id="Topbar">
    <div class="title">
      <span>Resume Editor</span>
    </div>
    <div class="action">
      <el-button type="success">注册</el-button>
      <el-button>登录</el-button>
      <el-button v-on:click="EnterPreview()">预览</el-button>
    </div>
  </div>
</template>

<style lang="less">
  #Topbar {
    background-color: #fff;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    // align-self: center;
    // text-align: center;
    .title {
      padding: 22px 0;
      span {
        font-size: 40px;
      }
    }
    .action {
      display: flex;
      align-self: center;
    }
  }
</style>

<script>
  export default {
    data(){
      return {
      }
    },
    methods: {
      EnterPreview(){
        this.$emit('EnterPreview');
      }
    }
  };
</script>
