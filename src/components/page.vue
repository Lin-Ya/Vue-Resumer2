<template>
  <div id="page">
    <div class="main">
      <PageProfile></PageProfile>
      <PageSide></PageSide>
    </div>
  </div>
</template>

<script>
import PageProfile from "./profile/page-profile.vue";
import PageSide from "./side/page-side.vue";
export default {
  name: "page",
  components: {
    PageProfile,
    PageSide
  }
};
</script>

<style  lang="less">
#page {
  font-size: 16px;
  width: 1240px;
  height: 1754px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 1px 1px 4px 1px #5a5a5a6e;
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>

