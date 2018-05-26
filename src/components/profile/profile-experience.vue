<template>
  <div id="Experience">
    <SectionGroup :section="section"></SectionGroup>
  </div>
</template>

<script>
import SectionGroup from "base/section-group.vue";
export default {
  name: "Experience",
  components: {
    SectionGroup
  },
  data() {
    return {
      section: {
        title: {
          style: "section-title",
          content: "Experience"
        },
        list: [
          {
            company: {
              style: "title",
              content: "UI Desgner @ Google "
            },
            time: {
              style: "light-title",
              content: "02/2018-Present"
            },
            content: {
              style: "brief",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu."
            }
          },
          {
            company: {
              style: "title",
              content: "UI Desgner @ Apple "
            },
            time: {
              style: "light-title",
              content: "02/2018-Present"
            },
            content: {
              style: "brief",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu."
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
