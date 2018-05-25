<template>
  <div id="control">
    <div class="warper">
      <div class="container">
        <div class="logo">
          <i class="iconfont icon-dengpaoOff"></i>
          <i class="iconfont icon-dengpaoOn"></i>          
        </div>
        <div class="content">
          <ul>
            <li>
              <h3>How to use</h3>
            </li>
            <li>
              <h3>Switch theme</h3>
            </li>
            <li>
              <h3>save as Image-file</h3>
            </li>
            <li>
              <h3>Save as PDF-file</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "font/iconfont.css";
import "font/iconfont.js";
export default {};
</script>

<style lang="less" scoped>
#control {
  .container {
    border: 1px solid blue;
    position: fixed;
    top: 0;
    left: 0;
    .logo {
      width: 48px;
      height: 48px;
      i {
        color: blue;
        background-color: #fff;
        font-size: 48px;
        padding: 10px;
        border: 1px solid red;
        border-radius: 50%;
      }
    }
  }
}
</style>
