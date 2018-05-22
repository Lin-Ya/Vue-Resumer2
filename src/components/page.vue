<template>
  <div id="page">
    <div class="main">
      <PageProfile></PageProfile>
      <PageSide></PageSide>
    </div>
    <div class="footer">
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script>
import PageProfile from "./page-profile.vue";
import PageSide from "./page-side.vue";
import PageFooter from "./page-footer.vue";
export default {
  name: "page",
  components: {
    PageProfile,
    PageSide,
    PageFooter
  }
};
</script>

<style scoped lang="less">
#page {
  width: 1240px;
  height: 1754px;
  background-color: #fff;
  box-shadow: 1px 1px 0px 2px #5a5a5a6e;
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 88%;
    width: 100%;
  }
  .footer {
    height: 12%;
  }
}
</style>

