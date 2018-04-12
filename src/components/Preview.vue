<template>
  <div id="Preview">
    <div class="actions">
      <div class="head">
        <span class="theme">主题</span>
        <div class="block top"></div>
        <div class="block bottom"></div>
      </div>
      <div class="tab">
        <span class="selatedTab" v-bind:class="{active: theTheame === 'default'}" v-on:click="switchTheame($event)" v-bind:theame="'default'">默认</span>
        <span class="selatedTab" v-bind:class="{active: theTheame === 'simple'}" v-on:click="switchTheame($event)" v-bind:theame="'simple'">简约</span>
        <span class="selatedTab" v-bind:class="{active: theTheame === 'brisk'}" v-on:click="switchTheame($event)" v-bind:theame="'brisk'">清新</span>
      </div>
    </div>
    <div class="page" id="page" v-bind:class="this.theTheame">
      <div class="aside">
        <section class="profile">
          <ul v-for="item in filterArray(resume.profile.data)" v-bind:key="item.name">
            <li class="profile_name">
              <h1>{{item.name}}</h1>
            </li>
            <li>
              <span>{{item.genter}}</span>
              <span>{{item.birth}}</span>
              <span>{{item.status}}</span>
            </li>
            <li>
              <span>目前在{{item.city||"【请填写所在城市"}}，期望在{{item.wishCity||"【请填写所在城市】"}}找到一份{{item.wishPosition||"【请填写期望职位】"}}的工作</span>
            </li>
          </ul>
        </section>
        <section class="contacts" v-if="filterArray(resume.contacts.data).length > 0">
          <h2>联系方式</h2>
          <ul v-for="item in filterArray(resume.contacts.data)" v-bind:key="item.name">
            <li class="item_name">{{item.type}}</li>
            <span>{{item.address}}</span>
          </ul>
        </section>
      </div>
      <div class="detail">
        <section class="project" v-if="filterArray(resume.projects.data).length > 0">
          <h2>项目经验</h2>
          <ul v-for="item in filterArray(resume.projects.data)" :key="item.name">
            <li class="item_name">{{item.name}}</li>
            <li>{{item.skill}}</li>
            <li>{{item.content}}</li>
          </ul>
        </section>
        <section class="workHistory" v-if="filterArray(resume.workHistory.data).length > 0">
          <h2>工作经历</h2>
          <ul v-for="item in filterArray(resume.workHistory.data)" :key="item.name">
            <li class="item_name">{{item.company}}</li>
            <li>{{item.time}} | {{item.position}}</li>
            <li>{{item.content}}</li>
          </ul>
        </section>
        <section class="education" v-if="filterArray(resume.education.data).length > 0">
          <h2>学习经历</h2>
          <ul v-for="item in filterArray(resume.education.data)" v-bind:key="item.name">
            <li class="item_name">{{item.school}}</li>
            <li>{{item.time}} | {{item.major}}</li>
            <li></li>
          </ul>
        </section>
        <section class="awards" v-if="filterArray(resume.awards.data).length > 0">
          <h2>获奖经历</h2>
          <ul v-for="item in filterArray(resume.awards.data)" v-bind:key="item.name">
            <li class="item_name">{{item.name}}</li>
            <li>{{item.content}}</li>
          </ul>
        </section>
        <section class="others" v-if="filterArray(resume.others.data).length > 0">
          <h2>其他</h2>
          <ul v-for="item in filterArray(resume.others.data)" v-bind:key="item.name">
            <li class="item_name">{{item.name}}</li>
            <li>{{item.content}}</li>
          </ul>
        </section>
      </div>
    </div>
    <el-tooltip class="item" effect="dark" content="点击退出预览" placement="right">
      <el-button class="exitButton" type="info" icon="el-icon-close" circle v-on:click="ExitPreview()"></el-button>
    </el-tooltip>
    <el-button class="printButton" @click="makepdf()">保存为pdf</el-button>
  </div>
</template>

<style lang="less">
#Preview {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .actions {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #fafafa;
    box-shadow: 0 1px 0 0 #dddddd;
    overflow: hidden;
    span {
      line-height: 50px;
      padding: 11px 0;
      font-size: 25px;
      color: #666666;
      letter-spacing: 2px;
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
      width: 280px;
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
        color: #888888;
        &:hover {
          color: #272727;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.288);
        }
        &.active {
          color: #272727;
          font-weight: bold;
        }
      }
    }
  }
  .exitButton,.printButton {
    display: none;
  }
  .page {
    flex: 1;
    padding: 0 32px 0 16px;
    overflow: auto;
    margin-right: -18px;
    @import "../style/theme/default";
    @import "../style/theme/simple";
    @import "../style/theme/brisk";
  }
}
</style>

<script>
import store from "../Vuex/store.js";
import jsPDF from "jspdf";
export default {
  store,
  data() {
    return {
      theTheame: "default"
    };
  },
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    filterArray(arr) {
      //isEmpty是一个用来判断对象里面是否有值的函数。只要有一个key有value，就返回false。
      //isEmpty返回的是布尔，而filter函数则是根据布尔来返回一个新的数组的，这样可以达到筛选不为空的数据展示在页面上
      let isEmpty = function(obj) {
        let empty = true;
        for (let key in obj) {
          //一旦有value，就不为空，就可以退出循环了
          if (obj[key]) {
            empty = false;
            break;
          }
        }
        //注意，一定要循环结束以后再return布尔。如果再循环里面return，就永远只是遍历了第一个key。
        return empty;
      };
      //下面用了箭头函数，讲arr里面的
      return arr.filter(item => !isEmpty(item));
    },
    ExitPreview() {
      this.$emit("ExitPreview");
    },
    switchTheame(e) {
      this.theTheame = e.target.getAttribute("theame");
    },
    makepdf() {
      html2canvas(document.getElementById("page"), {
        dpi: 600000,
        onrendered: function(canvas) {
          //通过html2canvas将html渲染成canvas，然后获取图片数据
          var imgData = canvas.toDataURL("image/jpeg");

          //初始化pdf，设置相应格式
          var doc = new jsPDF("p", "mm", "a4");

          //这里设置的是a4纸张尺寸
          doc.addImage(imgData, "JPEG", 0, 0, 210, 297);

          //输出保存命名为content的pdf
          doc.save("resume.pdf");
        },
        background: '#FFF'
      });
    }
  }
};
</script>
