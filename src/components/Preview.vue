<template>
  <div id="Preview">
    <div class="actions">
      <div class="head">
        <span class="theme">主题</span>
        <div class="block top"></div>
        <div class="block bottom"></div>
      </div>
      <div class="tab">
        <ul>
          <li><span class="selatedTab active">主题一</span></li>
          <li><span class="selatedTab">主题二</span></li>
          <li><span class="selatedTab">主题三</span></li>
        </ul>
      </div>
    </div>
    <div class="page">
      <section class="education" v-if="filterArray(resume.education.data).length > 0">
        <ul v-for="item in filterArray(resume.education.data)" v-bind:key="item.name">
          <li>{{item.school}}</li>
          <li>{{item.time}}</li>
          <li>{{item.major}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="less">
#Preview {
  .actions {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    background-color: #fafafa;
    box-shadow:0 1px 0 0 #dddddd;
    overflow: hidden;
    span {
      line-height: 50px;
      padding: 11px 0;
      font-size: 25px;
      color:#666666;
      letter-spacing:2px;
    }
    .head {
      width: 140px;
      padding-left: 16px;
      position: relative;
      .theme {
        padding: 8px 0;
        width: 100px;
        text-align: center;
      }
      .block {
        background-color: #dfdfdf;
        right: 0px;
        position: absolute;
        width: 51px;
        height: 3px;
        &.top {
          top: 6px;          
          transform: rotate(45deg);
        }
        &.bottom {
          bottom: 5px;
          transform: rotate(-45deg);          
        }
      }
    }
    .tab {
      margin-left: 16px;
      width: 320px;
      ul {
        display: flex;
        justify-content: space-between;
        span {
          cursor: pointer;
          &:hover {
            color: #272727;
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.288);
          }
          &.active {
            color: #404dff;            
          }
        }
      }
    }
  }
}
</style>

<script>
import store from "../Vuex/store.js";
export default {
  store,
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    filterArray(arr){
      //isEmpty是一个用来判断对象里面是否有值的函数。只要有一个key有value，就返回false。
      //isEmpty返回的是布尔，而filter函数则是根据布尔来返回一个新的数组的，这样可以达到筛选不为空的数据展示在页面上
      let isEmpty = function(obj){
        let empty = true;
        for(let key in obj){
        //一旦有value，就不为空，就可以退出循环了
          if(obj[key]){
            empty = false;
            break;
          }
        }
        //注意，一定要循环结束以后再return布尔。如果再循环里面return，就永远只是遍历了第一个key。
        return empty;
      }
      //下面用了箭头函数，讲arr里面的
      return arr.filter(item => !isEmpty(item))
    },
  }
};
</script>
