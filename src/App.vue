<template>
  <div id="app">
    <page></page>
    <control></control>
  </div>
</template>

<script>
import "normalize.css";
import Page from "components/page.vue";
import Control from "components/control.vue";
export default {
  name: "App",
  components: {
    Page,
    Control
  }
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  &::before {
    box-sizing: border-box;
  }
  &::after {
    box-sizing: border-box;
  }
}
ul,
ol {
  list-style: none;
}
html,
body {
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  padding: 32px 0;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
