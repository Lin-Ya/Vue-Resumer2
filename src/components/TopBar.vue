<template>
  <div id="Topbar">
    <div class="title">
      <span>Resume Editor</span>
    </div>
    <div class="action">
      <MyDialogMode :class="enterTo" @ExitDialog="ExitDialog()">
        <SignInForm v-if="enterTo === 'signIn'" @SwitchDialog="SwitchDialog()" @success="setUser($event)"/>
        <LogInForm v-else @SwitchDialog="SwitchDialog()"/>
      </MyDialogMode>
      {{user.username}}
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
import store from '../Vuex/store.js'
import MyDialogMode from './MyDialogMode';
import SignInForm from './SignInForm';
import LogInForm from './LogInForm';
  export default {
    store,
    data(){
      return {
        enterTo: ''
      }
    },
    methods: {
      EnterPreview(){
        this.$emit('EnterPreview');
      },

      //用enterTo来存储切换注册和登录的值。
      showSignIn(){
        this.enterTo = 'signIn';
      },
      showLogIn(){
        this.enterTo = 'logIn';
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
      },

      //当注册成功以后，会触发success事件，来到这里设置username和id到数据store里
      //执行store里的setUser方法。
      setUser(payload){
        this.$store.commit('setUser',payload)
        this.enterTo = '';
      },
    },
    components: {
      MyDialogMode,SignInForm,LogInForm
    },
    computed: {
      user(){
        return this.$store.state.user;
      }
    }
  };
</script>
