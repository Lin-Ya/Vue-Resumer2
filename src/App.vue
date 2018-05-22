<template>
  <div id="app">
    <page></page>
  </div>
</template>

<script>
import "normalize.css";
import Page from "components/page.vue";

export default {
  name: "App",
  components: {
    Page
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
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 32px 0;
}
</style>
