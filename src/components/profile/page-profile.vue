<template>
	<div id="profile">
    <ProfileHero></ProfileHero>
    <ProfileExperience></ProfileExperience>
    <ProfileProjects></ProfileProjects>
    <ProfileEducation></ProfileEducation>
	</div>
</template>

<script>
import ItemInfo from 'base/item-info.vue';
import ProfileHero from './profile-hero'
import ProfileEducation from './profile-education'
import ProfileProjects from './profile-projects'
import ProfileExperience from './profile-experience.vue'

export default {
  name: 'Profile',
  components: {
    ItemInfo,
    ProfileHero,
    ProfileEducation,
    ProfileProjects,
    ProfileExperience
  }
};
</script>

<style lang="less">
#profile {
  width: 64%;
  padding: 40px 48px;
}
</style>
