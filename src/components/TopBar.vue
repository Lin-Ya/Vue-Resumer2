<template>
  <div id="Topbar">
    <div class="title">
      <span>Resume Editor</span>
    </div>
    <div class="action">
      <div v-if="logined" class="userActions">
        <span>你好，{{user.username}}</span>
        <el-button type="danger" @click="removeUser()">退出</el-button>
      </div>
      <div v-else class="userActions">
        <MyDialogMode :class="enterTo" @ExitDialog="ExitDialog()">
          <SignInForm v-if="enterTo === 'signIn'" @SwitchDialog="SwitchDialog()" @success="setUser($event)"/>
          <LogInForm v-else @SwitchDialog="SwitchDialog()"/>
        </MyDialogMode>
        <el-button type="success" @click="showSignIn()">注册</el-button>
        <el-button type="primary" @click="showLogIn()">登录</el-button>
      </div>
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
      .userActions {
        margin-right: 2em;
        #MyDialogMode {
          display: none;
          &.signIn,&.logIn{
            display: block;
          }
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
      removeUser(){
        this.$store.commit('removeUser');
        this.$notify({
          title: '退出成功',
          message: '你已经退出本应用',
          type: 'success',
          duration: 2500
        })
      }
    },
    components: {
      MyDialogMode,SignInForm,LogInForm
    },
    computed: {
      user(){
        return this.$store.state.user;
      },
      logined(){
        return this.user.id;
      }
    }
  };
</script>
