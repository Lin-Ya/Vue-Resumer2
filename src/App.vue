<template>
  <div id="app">
    <div class="warper" :class="currentTheme">
      <page></page>
      <control :colorLists="colorLists" @switchTheme="switchTheme"></control>
    </div>
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
  },
  data() {
    return {
      colorLists: [
        {
          color: "#c53d43",
          title: "Akairo"
        },
        {
          color: "#38a1db",
          title: "Tsuyukusairo"
        },
        {
          color: "#ed6d3d",
          title: "Kakiiro"
        },
        {
          color: "#007b43",
          title: "Tokiwairo"
        }
      ],
      currentTheme: null
    };
  },
  methods: {
    switchTheme(index) {
      console.log(index);
    }
  },
  created() {
    this.currentTheme = this.colorLists[0].title;
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  height: 100%;
  width: 100%;
  padding: 32px 0;
  background-color: #38a1db;
}
</style>
