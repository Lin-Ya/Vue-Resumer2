<template>
  <div id="app">
    daasdsadasdsf
    <Editor/>
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

<style use="less">
@import "./assets/reset.css";
@import "./assets/normalize.css";
#app {

}
</style>
