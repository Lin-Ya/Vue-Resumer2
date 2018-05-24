<template>
  <div id="side">
    <SideDetails></SideDetails>
    <SideTools></SideTools>
  </div>
</template>

<script>
import SideDetails from './side-details.vue'
import SideTools from './side-tools.vue'
export default {
  name: 'side',
  components: {
    SideDetails,
    SideTools
  }
};
</script>

<style lang="less" scoped>
#side {
  border: 1px solid red;
  width: 36%;
  padding: 80px 48px;
}
</style>
