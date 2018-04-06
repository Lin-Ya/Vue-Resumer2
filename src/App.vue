<template>
  <div id="app">
    <TopBar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
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

#app {
  width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  min-width: 1140px;
  .topbar {
    width: 100%;
    height: 88px;
    background-color: red;
  }
  main {
    flex: 1;
    display: flex;
    background-color: #fff;
    .editor {
      width: 40em;
      background-color: green;
      margin: 16px 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    .preview {
      flex: 1;
      background-color: yellow;
      margin: 16px 8px;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
