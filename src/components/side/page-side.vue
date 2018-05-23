<template>
  <div id="side">
    <SideDetails></SideDetails>
  </div>
</template>

<script>
import SideDetails from './side-details.vue'
export default {
  name: 'side',
  components: {
    SideDetails
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
