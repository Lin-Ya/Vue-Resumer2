<template>
	<div class="container">
		<div class="header">
			<h1 id="fieldName">{{field.title}}</h1>
			<el-button type="success" v-show="field.field !== 'profile'" v-on:click="add()">添加</el-button>
		</div>
		<div class="content">
			<el-form :label-position="'top'" v-for="(datakey,dataindex) in field.data" v-bind:key="datakey" class="dataItems">
				<el-tooltip class="item" effect="dark" content="移除或清空" placement="left">
          <i class="deleteButton el-icon-delete" v-on:click="remove(field.field,dataindex)"></i>
				</el-tooltip>
        <el-form-item class="inputLabel" v-bind:label="item.cn" v-for="item in field.label" v-bind:key="item.key">
					<el-input  v-bind:value="field.data[dataindex][item.key]" v-on:input="updateForm(field.field,dataindex,item.key,$event)"></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<style lang="less">
.container {
  position: relative;
  padding: 0 16px;
  height: 100%;
  .header {
    h1 {
      line-height: 40px;
    }
    button {
      position: absolute;
      right: 16px;
      top: 0px;
    }
  }
  .content {
		.dataItems {
			position: relative;
      border-bottom: 3px solid #ccc;
      margin-bottom: 8px;
    }
    .deleteButton {
      font-size: 22px;
      cursor: pointer;
      position: absolute;
      top: 12px;
      right: 0;
      color: #808080;
      &:hover {
        color: #a00000;
      }
    }
    label {
      font-size: 16px;
    }
  }
}
</style>

<script>
import store from "../Vuex/store.js";
export default {
  store,
  data() {
    return {
      state: this.$store.state
    };
  },
  //给每一个模板传入的field是一大类的数据，包括其简历条目类别以及内容。
  props: ["field"],
  methods: {
    updateForm(field, dataindex, key, $event) {
      //触发updateForm方法，用于更新input内容到store里面。
      this.$store.commit("updateForm", {
        field,
        dataindex,
        key,
        value: $event
      });
    },
    add() {
      let object = {};
      object.field = this.field.field;
      object.data = {};
      for (let key in this.field.label) {
        let model = {};
        model = this.field.label[key];
        object.data[model.key] = "";
      }
      this.$store.commit("addFieldData", object);
    },
    //删除
    remove(field, dataindex) {
      let object = {};
      object.field = this.field.field;
      object.index = dataindex;
      this.$store.commit("removeFieldData", object);
    }
  },
  computed: {}
};
</script>
