<template>
  <div id="Editor">
    <div class="field">
    </div>
    <div class="subfield">
      <span>
      </span>
    </div>
  </div>
</template>

<style lang="less">
#Editor {
  display: flex;
  flex-direction: row;
  .field {
    width: 80px;
    height: 100%;
    background-color: black;
    svg {
      fill: #fff;
    }
  }
  .subfield {
    flex: 1;
    overflow: hidden;
  }
}
</style>

<script>
import store from '../Vuex/store.js';
export default {
  store,
  data(){
    return {
    }
  },
  computed: {
    config(){
      return this.$store.state.resume.config
    }
  }
};
</script>
