<template>
  <div id="projects">
    <SectionGroup :section="section"></SectionGroup>
  </div>
</template>

<script>
import SectionGroup from "base/section-group.vue";
export default {
  name: "projects",
  components: {
    SectionGroup
  },
  data() {
    return {
      section: {
        title: {
          style: "section-title",
          content: "Projects"
        },
        list: [
          {
            projectName: {
              style: 'title',
              content: 'Vue-ResumeEditor '
            },
            time: {
              style: 'light-title',
              content: '01/2018-Present'
            },
            content: {
              style: 'brief',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu.'
            }
          },
          {
            projectName: {
              style: 'title',
              content: 'Vue-ResumeEditor '
            },
            time: {
              style: 'light-title',
              content: '02/2018-Present'
            },
            content: {
              style: 'brief',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu.'
            }
          },
          {
            projectName: {
              style: 'title',
              content: 'Vue-ResumeEditor '
            },
            time: {
              style: 'light-title',
              content: '03/2018-Present'
            },
            content: {
              style: 'brief',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu.'
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
</style>
