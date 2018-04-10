<template>
  <div id="SignInForm" @submit.prevent="signUp()">
    <el-form :model="formData" ref="signForm">
      <el-form-item label="设置用户名" prop="username">
        <el-input type="text" placeholder="请设置用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="设置密码" prop="password">
        <el-input type="password" placeholder="请设置密码" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="submit" value="注册"></el-input>
      </el-form-item>
    </el-form>
    <span @click="SwitchDialog()">已经有账号？马上登录</span>
  </div>
</template>

<style lang="less">

</style>

<script>
import AV from "../lib/leancloud.js";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    signUp() {
      console.log ('signUP')
      var user = new AV.User();
      let { username, password } = this.formData;
      user.setUsername(username);
      user.setPassword(password);
      //user.signUP之后会在leancloud根据用户名和密码在数据库添加用户，并返回一个对象或error
      //本地就可以根据这个loginedUser来获取用户id和用户名，好给数据打标签。
      user.signUp().then(
        (loginedUser)=> {
          console.log(loginedUser)
          //给父组件触发一个success事件，带上返回得到的username和id。
          //这里的前提是在父组件引入了vuex
          this.$emit('success',{
            username: loginedUser.attributes.username,
            id:loginedUser.id
          })
        },(error)=> {
          window.alert(error)
        }
      );
    },
    SwitchDialog() {
      console.log(1);
      this.$emit("SwitchDialog");
    }
  }
};
</script>
