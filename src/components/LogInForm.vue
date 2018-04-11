<template>
  <div id="LogInForm">
    <el-form :model="loginForm" ref="loginForm" status-icon :rules="loginRule">
      <el-form-item label="用户名" prop="userName">
        <el-input type="userName" placeholder="请输入用户名" v-model="loginForm.userName" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.pwd" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <span @click="SwitchDialog()">还没有账号？马上注册</span>
  </div>
</template>

<style lang="less">

</style>

<script>
import AV from "../lib/leancloud.js";
import getAVUser from "../lib/getAVUser";
import getErrorMessage from "../lib/getErrorMessage";
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        pwd: ""
      },
      loginRule: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    SwitchDialog() {
      console.log(1);
      this.$emit("SwitchDialog");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let username = this.loginForm.userName;
          let password = this.loginForm.pwd;
          AV.User.logIn(username, password).then(
            () => {
              this.$emit("success", getAVUser());
              this.$notify({
                title: '登录成功',
                message: '欢迎回来',
                type: 'success',
                duration: 2500
              })
            },
            (error) => {
              this.$message.error(getErrorMessage(error));
              setTimeout(() => {
                this.$refs.loginForm.resetFields();
              }, 2000);
            }
          );
        } else {
          return false;
        }
      });
    }
  }
};
</script>
