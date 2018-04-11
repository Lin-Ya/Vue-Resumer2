<template>
  <div id="SignInForm">
    <el-form :model="registerForm" ref="registerForm" status-icon :rules="registerRule">
      <el-form-item label="设置用户名" prop="userName">
        <el-input type="userName" placeholder="请设置用户名" v-model="registerForm.userName" required></el-input>
      </el-form-item>
      <el-form-item label="设置密码" prop="pwd">
        <el-input type="password" placeholder="请设置密码" v-model="registerForm.pwd" required></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPwd">
        <el-input type="password" placeholder="请确认密码" v-model="registerForm.checkPwd" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('registerForm')">注册</el-button>
      </el-form-item>
    </el-form>
    <span @click="SwitchDialog()">已经有账号？马上登录</span>
    <span class="errorMessage">{{errorMessage}}</span>
  </div>
</template>

<style lang="less">

</style>

<script>
import AV from "../lib/leancloud.js";
import getAVUser from '../lib/getAVUser';
import getErrorMessage from '../lib/getErrorMessage';
export default {
  data() {
    var validateUser = (rule, value, cb) => {
      var pattern = /^[\w\u4e00-\u9fa5]{3,10}$/g;
      if (value === "") {
        cb(new Error("请输入用户名"));
      } else if (!pattern.test(value)) {
        cb(new Error("请输入3-10个字母/汉字/数字/下划线"));
      } else {
        cb();
      }
    };
    var validatePwd = (rule, value, cb) => {
      var pattern = /^\S{3,20}$/g;
      if (value === "") {
        cb(new Error("请输入密码"));
      } else if (!pattern.test(value)) {
        cb(new Error("请输入3-20个非空白字符"));
      } else {
        if (this.registerForm.checkPwd !== "") {
          this.$refs.registerForm.validateField("checkPwd");
        }
        cb();
      }
    };
    var validateCheckPwd = (rule, value, cb) => {
      if (value === "") {
        cb(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pwd) {
        cb(new Error("两次输入密码不一致!"));
      } else {
        cb();
      }
    };
    return {
      registerForm: {
        userName: "",
        pwd: "",
        checkPwd: ""
      },
      registerRule: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "blur" }]
      },
      errorMessage: ''
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.$refs.registerForm)
          //以下便是提交信息注册到leancloud的过程
          var user = new AV.User();
          let username = this.registerForm.userName;
          let password = this.registerForm.pwd;
          user.setUsername(username);
          user.setPassword(password);
          //user.signUP之后会在leancloud根据用户名和密码在数据库添加用户，并返回一个对象或error
          //本地就可以根据这个loginedUser来获取用户id和用户名，好给数据打标签。
          user.signUp().then(
            (loginedUser) => {
              //给父组件触发一个success事件，带上返回得到的username和id。
              //这里的前提是在父组件引入了vuex
              // this.$emit("success", {
              //   username: loginedUser.attributes.username,
              //   id: loginedUser.id
              // });
              // 下面的getAVUser其实就是完成上面的操作。
              this.$emit('success', getAVUser())
              this.$notify({
                title: '注册成功',
                message: '欢迎使用本应用',
                type: 'success',
                duration: 2500
              })
            },
            (error) => {
              this.$message.error(getErrorMessage(error))
              setTimeout(()=>{
                this.$refs.registerForm.resetFields()
              },2000)
            }
          );
        } else {
          return false;
        }
      });
    },
    SwitchDialog() {
      this.$emit("SwitchDialog");
    }
  }
};
</script>
