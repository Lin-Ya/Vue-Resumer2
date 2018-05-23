<template>
  <div id="hero">
    <div class="warper">
      <div class="hero-info">
        <div class="avatar">
          <ItemImagePacker></ItemImagePacker>
        </div>
        <div class="person">
          <ItemInfo :msg="info.name"></ItemInfo>
          <ItemInfo :msg="info.job"></ItemInfo>
          <ItemInfo :msg="info.location"></ItemInfo>
        </div>
      </div>
      <ItemSection :section="section"></ItemSection>
    </div>
  </div>
</template>

<script>
import ItemImagePacker from "base/item-imagePacker.vue";
import ItemInfo from "base/item-info.vue";
import ItemSection from "base/item-section.vue";
export default {
  name: "hero",
  components: {
    ItemImagePacker,
    ItemInfo,
    ItemSection
  },
  data() {
    return {
      info: {
        name: {
          style: "bgTitle",
          content: "Feng HuiWing"
        },
        job: {
          style: "light",
          content: "Font-End Engineer"
        },
        location: {
          style: "normal",
          content: "JiangMen GuangDong"
        }
      },
      section: {
        title: {
          style: 'lightTitle',
          content: 'Profile'
        },
        list: [
          {
            content: {
              style: "brief",
              content:
                "I'm a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit metus in libero rutrum congue aliquam eu libero. Donec tristique est pharetra fringilla sollicitudin. Etiam eu ipsum vitae nulla tincidunt scelerisque semper id arcu. Phasellus quam tellus, laoreet id felis a, dignissim facilisis orci. Mauris feugiat vulputate quam quis tincidunt. In eleifend augue eu tristique bibendum. Donec gravida, eros sed iaculis iaculis, magna est finibus tortor, ultricies accumsan diam lorem non neque."
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
#hero {
  .hero-info {
    display: flex;
    align-items: center;
    .avatar {
      height: 120px;
      width: 120px;
      margin: 0 8px;
      overflow: hidden;
      border-radius: 50%;
    }
    .person {
      flex: 1;
      margin: 0 8px;
    }
  }
}
</style>
