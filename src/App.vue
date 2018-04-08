<template>
  <div id="app">
    <TopBar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
  import TopBar from "./components/TopBar";
  import Editor from "./components/Editor";
  import Preview from "./components/Preview";
  import "normalize.css";
  
  export default {
    name: "App",
    components: {
      TopBar,
      Editor,
      Preview
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
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
</style>
