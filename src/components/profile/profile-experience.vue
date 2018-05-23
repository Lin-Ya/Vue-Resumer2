<template>
  <div id="Experience">
    <ItemSection :section="section"></ItemSection>
  </div>
</template>

<script>
import ItemSection from "base/item-section.vue";
export default {
  name: "Experience",
  components: {
    ItemSection
  },
  data() {
    return {
      section: {
        title: {
          style: "lightTitle",
          content: "Experience"
        },
        list: [
          {
            company: {
              style: "title",
              content: "UI Desgner @ Google "
            },
            time: {
              style: "light",
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
              style: "light",
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

<style lang="less" scoped>
</style>
