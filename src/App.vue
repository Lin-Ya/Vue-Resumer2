<template>
  <div id="app" v-bind:class="{PreviewMode: PreviewMode === true}">
    <TopBar class="topbar" v-on:EnterPreview="EnterPreview()" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" v-on:ExitPreview="ExitPreview()" />
    </main>
  </div>
</template>

<script>
  import store from "./Vuex/store"
  import TopBar from "./components/TopBar";
  import Editor from "./components/Editor";
  import Preview from "./components/Preview";
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'
  import "normalize.css";
  
  export default {
    store,
    name: "App",
    components: {
      TopBar,
      Editor,
      Preview
    },
    data() {
      return {
        PreviewMode: false
      }
    },
    methods: {
      EnterPreview() {
        this.PreviewMode = true;
        // console.log(this.PreviewMode)
      },
      ExitPreview() {
        this.PreviewMode = false;
      }
    },
    created() {
      //页面创建时，查看本地localStorage有没有名为state的，
      let state = localStorage.getItem('state');
      if(state){
        state = JSON.parse(state)
      }
      //如果有就json处理以后，commit给store
      this.$store.commit('initState', state)
      // this.$store.commit('setUser', getAVUser())
    }
  };
</script>

<style lang="less">
  @import "./assets/reset.css";
  @import "./assets/normalize.css";
  html,
  body,
  #app {
    height: 100%;
  }
  
  //SVG icon样式
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  
  //布局样式
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-width: 1140px;
    .topbar {
      width: 100%;
      height: 88px;
      z-index: 1;
    }
    main {
      flex: 1;
      display: flex;
      background-color: #cfcfcf;
      .editor {
        width: 40em;
        margin: 16px 8px 16px 16px;
        border-radius: 4px;
        overflow: hidden;
      }
      .preview {
        flex: 1;
        margin: 16px 16px 16px 8px;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  
  .topbar,
  .editor,
  .preview {
    background-color: #fff;
    box-shadow: 0 1px 6px 1px #444444a1;
  }
  
  #app {
    &.PreviewMode {
      .topbar,
      .editor {
        display: none;
      }
      .preview {
        margin: 40px auto;
        width: 720px;
        flex: none;
        .actions {
          display: none;
        }
        .exitButton {
          display: block;
          position: fixed;
          top: 19px;
          right: calc( 50% - 452px);
        }
      }
    }
  }
</style>
