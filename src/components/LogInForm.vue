<template>
  <div id="LogInForm">
    <el-form :model="formData" ref="LogInForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit(formData)">登录</el-button>
      </el-form-item>
    </el-form>
    <span @click="SwitchDialog()">还没有账号？马上注册</span>
  </div>
</template>

<style lang="less">

</style>

<script>
export default {
  data(){
    return {
      formData: {
        username:'',
        password:''
      }
    }
  },
  methods:{
    SwitchDialog(){
      console.log(1)
      this.$emit('SwitchDialog')
    }
  }
}
</script>
