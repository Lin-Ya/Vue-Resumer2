<template>
  <div id="SignInForm" @submit.prevent="signUp">
    <el-form :model="formData" ref="signForm">
      <el-form-item label="设置用户名" prop="username">
        <el-input type="text" placeholder="请设置用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="设置密码" prop="password">
        <el-input type="password" placeholder="请设置密码" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="submit">注册</el-button>
      </el-form-item>
    </el-form>
    <span @click="SwitchDialog()">已经有账号？马上登录</span>
  </div>
</template>

<style lang="less">

</style>

<script>
export default {
  data(){
    return {
      formData:{
        username:'',
        password:''
      },
    }
  },
  methods:{
    signUp(){
      console.log(this.formData)
    },
    SwitchDialog(){
      console.log(1)
      this.$emit('SwitchDialog')
    }
  }
}
</script>
