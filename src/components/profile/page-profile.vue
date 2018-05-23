<template>
	<div id="profile">
    <ProfileHero></ProfileHero>
    <ProfileProjects></ProfileProjects>
    <ProfileEducation></ProfileEducation>
	</div>
</template>

<script>
import ItemInfo from 'base/item-info.vue';
import ProfileHero from './profile-hero'
import ProfileEducation from './profile-education'
import ProfileProjects from './profile-projects'

export default {
  name: 'Profile',
  components: {
    ItemInfo,
    ProfileHero,
    ProfileEducation,
    ProfileProjects
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
