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
import PageProfile from "./profile/page-profile.vue";
import PageSide from "./side/page-side.vue";
import PageFooter from "./footer/page-footer.vue";
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
  font-size: 16px;
  width: 1240px;
  height: 1754px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 1px 1px 0px 2px #5a5a5a6e;
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 95%;
    width: 100%;
    overflow: hidden;
  }
  .footer {
    height: 5%;
  }
}
</style>

