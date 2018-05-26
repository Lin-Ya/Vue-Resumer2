<template>
  <div id="control" class="Akairo">
    <div class="warper">
      <div class="container">
        <div class="logo" :class="{on:showMenu}" @click="switchMenu()">
          <i class="iconfont icon-dengpaoOn" v-show="!showMenu"></i>
          <i class="iconfont icon-dengpaoOff" v-show="showMenu"></i>
        </div>
        <div class="content" v-show="showMenu">
          <ul>
            <li :class="{active:showingIndex ===0}">
              <h3 @click="showThis(0)">How to use</h3>
              <p v-show="showingIndex === 0">Click on the box to enter content. Right-click to switch content's style.</p>
            </li>
            <!-- <li :class="{active:showingIndex ===1}">
              <h3 @click="showThis(1)">Switch theme</h3>
              <p class="colorLists" v-show="showingIndex === 1">
                <span class="colorOption" :key="index" :class="{active: currentTheme === index}" :title="list.title" @click="switchColor(index)" :style="{backgroundColor:list.color}" v-for="(list,index) in colorLists"></span>
              </p>
            </li> -->
            <li>
              <h3 @click="saveIMG()">Save as Image-file</h3>
            </li>
            <li>
              <h3 @click="savePDF()">Save as PDF-file</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "font/iconfont.css";
import html2canvas from "html2canvas";
import FileSaver from "file-saver";
import jsPDF from "jspdf";
export default {
  data() {
    return {
      showMenu: false,
      showingIndex: -1,
      currentTheme: 0
    };
  },
  props: {
    colorLists: {
      type: Array
    }
  },
  methods: {
    switchMenu() {
      this.showMenu = !this.showMenu;
    },
    showThis(index) {
      if (index === this.showingIndex) {
        this.showingIndex = -1;
      } else {
        this.showingIndex = index;
      }
    },
    saveIMG() {
      let resume = document.querySelector("#page");
      html2canvas(resume).then(canvas => {
        canvas.toBlob(blob => {
          FileSaver.saveAs(blob, "Resume.png");
        });
      });
    },
    savePDF() {
      let resume = document.querySelector("#page");
      html2canvas(resume, {
        dpi: 60000,
        background: '#fff'
      }).then(canvas => {
        let imgData = canvas.toDataURL("image/jpeg");
        let doc = new jsPDF("p", "mm", "a4");
        doc.addImage(imgData, "JPEG", 0, 0, 210, 297);
        doc.save("Resume.pdf");
      });
    }
    // switchColor(index) {
    //   this.$emit("switchTheme", index);
    //   this.currentTheme = index;
    // }
  }
};
</script>

<style lang="less">
#control {
  .warper {
    position: fixed;
    top: 80px;
    left: 32px;
    width: 240px;
    text-align: center;
    .container {
      padding: 4px;
      .logo {
        cursor: pointer;
        margin: 16px auto;
        height: 72px;
        width: 72px;
        border-radius: 50%;
        position: relative;
        color: #155272;
        transition: all 0.3s;
        &:hover {
          background-color: #38a1db;
          color: #fff;
        }
        &.on {
          background-color: #38a1db;
          color: #fff;
        }
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          width: 48px;
          line-height: 48px;
        }
      }
      .content {
        padding: 8px;
        li {
          h3 {
            margin: 24px 0;
            padding: 8px 0;
            border-radius: 8px;
            color: #38a1db;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              box-shadow: 1px 1px 5px 3px #063f1479;
              background-color: #38a1db;
              color: #fff;
            }
          }
          p {
            display: flex;
            justify-content: space-between;
            .colorOption {
              cursor: pointer;
              display: block;
              border-radius: 8px;
              width: 32px;
              height: 32px;
              position: relative;
              &:hover {
                box-shadow: 1px 1px 5px 1px #063f1479;
              }
              &.active::after {
                content: "";
                display: block;
                position: absolute;
                width: 6px;
                top: -25%;
                left: 40%;
                height: 45px;
                border-radius: 50%;
                transform: rotateZ(45deg);
                background-color: #fff;
              }
            }
          }
          &.active {
            height: 100%;
            h3 {
              background-color: #38a1db;
              color: #fff;
            }
            p {
              padding: 16px;
              border-radius: 8px;
              background-color: #d1d1d165;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
