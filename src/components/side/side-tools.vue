<template>
  <div id="tools"  class="side-cell">
    <div class="warper">
      <ItemInfo :msg="title"></ItemInfo>
    </div>
    <ItemDatabar :group="item.dataGroup" v-for="(item,index) in items" :key="index" ></ItemDatabar>
  </div>
</template>

<script>
import ItemInfo from 'base/item-info.vue'
import ItemDatabar from 'base/item-databar.vue'
export default {
  name: 'tools',
  components: {
    ItemInfo,
    ItemDatabar
  },
  data(){
    return {
      title: {
        style: 'lightTitle',
        content: 'Tools'
      },
      items: [
        {
          dataGroup: {
            number: '75',
            name: {
              content: 'Visual Studio Code'
            }
          }
        },
        {
          dataGroup: {
            number: '75',
            name: {
              content: 'Google Chrome'
            }
          }
        },
        {
          dataGroup: {
            number: '80',
            name: {
              content: 'Adobe Photoshop'
            }
          }
        },
        {
          dataGroup: {
            number: '65',
            name: {
              content: 'Axure'
            }
          }
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
</style>
