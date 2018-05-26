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

<style lang="less">
#side {
  width: 36%;
  padding: 80px 48px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    display: block;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -40px;
    width: 1px;
    border-left: 1px solid #d1d1d1;
  }
  .side-cell {
    padding-bottom: 48px;
  }
}
</style>
