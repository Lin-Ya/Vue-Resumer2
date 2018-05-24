<template>
  <div id="education">
    <ItemSection :section="section"></ItemSection>
  </div>
</template>

<script>
import ItemSection from 'base/item-section.vue'

export default {
  name:'education',
  components: {
    ItemSection
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

<style lang="less" scoped>
</style>
