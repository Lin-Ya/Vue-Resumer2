<template>
  <div id="education">
    <SectionGroup :section="section"></SectionGroup>
  </div>
</template>

<script>
import SectionGroup from 'base/section-group.vue'

export default {
  name:'education',
  components: {
    SectionGroup
  },
  data(){
    return {
      section: {
        title: {
          style: 'section-title',
          content: 'Education'
        },
        list: [
          {
            Marjos: {
              style: 'title',
              content: 'BA,Communication'
            },
            time: {
              style: 'light-title',
              content: '2012-2016'
            },
            school: {
              style: 'brief',
              content: 'South China Normal University'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
</style>
