<template>
  <div id="Topbar">
    <div class="title">
      <span>Resume Editor</span>
    </div>
    <div class="action">
      <MyDialogMode :class="enterTo" @ExitDialog="ExitDialog()">
        <SignInForm v-if="enterTo === 'signIn'" @SwitchDialog="SwitchDialog()"/>
        <LogInForm v-else @SwitchDialog="SwitchDialog()"/>
      </MyDialogMode>
      <el-button type="success" @click="showSignIn()">注册</el-button>
      <el-button @click="showLogIn()">登录</el-button>
      <el-button @click="EnterPreview()">预览</el-button>
    </div>
  </div>
</template>

<style lang="less">
  #Topbar {
    background-color: #fff;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    .title {
      padding: 22px 0;
      span {
        font-size: 40px;
      }
    }
    .action {
      display: flex;
      align-self: center;
      #MyDialogMode {
        display: none;
        &.signIn,&.logIn{
          display: block;
        }
      }
    }
  }
</style>

<script>
import MyDialogMode from './MyDialogMode';
import SignInForm from './SignInForm';
import LogInForm from './LogInForm';
  export default {
    data(){
      return {
        enterTo: ''
      }
    },
    methods: {
      EnterPreview(){
        this.$emit('EnterPreview');
      },
      showSignIn(){
        this.enterTo = 'signIn'
        console.log(this.enterTo)
      },
      showLogIn(){
        this.enterTo = 'logIn'
        console.log(this.enterTo)
      },
      isDialog(){
        if(this.enterTo === 'signIn'||'logIn'){
          return true;
        }else {
          return false;
        }
      },
      ExitDialog(){
        this.enterTo = '';
      },
      SwitchDialog(){
        if(this.enterTo === 'logIn'){
          this.enterTo = 'signIn';
        }else {
          this.enterTo = 'logIn';
        }
      }
    },
    components:{
      MyDialogMode,SignInForm,LogInForm
    }
  };
</script>
