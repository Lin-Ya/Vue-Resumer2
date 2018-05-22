<template>
	<div id="profile">
    <div class="profile-hero">
      <div class="header"></div>
      <div class="content"></div>
    </div>
    <div class="profile-projects">
    </div>
    <div class="profile-education">
    </div>
	</div>
</template>

<script>
import ItemInfo from '@/base/item-info.vue'
export default {
  name: 'Profile',
  components: {
    ItemInfo
  }
};
</script>

<style lang="less" scoped>
#profile {
	border: 1px solid red;
  width: 64%;
  padding: 40px 48px;
}
</style>
