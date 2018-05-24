<template>
  <div id="side">
    <SideDetails></SideDetails>
    <SideSocial></SideSocial>
    <SideTools></SideTools>
  </div>
</template>

<script>
import SideDetails from './side-details.vue'
import SideTools from './side-tools.vue'
import SideSocial from './side-social.vue'
export default {
  name: 'side',
  components: {
    SideDetails,
    SideTools,
    SideSocial
  }
};
</script>

<style lang="less" scoped>
#side {
  border: 1px solid red;
  width: 36%;
  padding: 80px 48px;
  .side-cell {
    padding-bottom: 48px;
  }
}
</style>
