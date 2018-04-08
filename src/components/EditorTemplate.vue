<template>
	<div class="container">
		<div class="header">
			<h1 id="fieldName">{{field.title}}</h1>
			<!-- {{dataindex}} -->
			<el-button type="success" v-show="field.field !== 'profile'" v-on:click="add()">添加</el-button>
		</div>
		<div class="content">
			<el-form :label-position="'top'" v-for="(datakey,dataindex) in field.data" v-bind:key="datakey" class="dataItems">
				<el-button class="deleteButton" type="danger" icon="el-icon-delete" circle v-on:click="remove(field.field,dataindex)"></el-button>
				<el-form-item v-bind:label="item.cn" v-for="item in field.label" v-bind:key="item.key">
					<el-input  v-on:input="updateForm(field.field,dataindex,item.key,$event)"></el-input>
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
			border-bottom: 3px solid #ccc;
		}
	}
}
</style>

<script>
import store from "../Vuex/store.js";
export default {
	store,
  data(){
		return {
			state: this.$store.state
		}
	},
  //给每一个模板传入的field是一大类的数据，包括其简历条目类别以及内容。
	props: ["field"],
	methods: {
		updateForm(field,dataindex,key,$event){
			//触发updateForm方法，用于更新input内容到store里面。
			this.$store.commit('updateForm',{field,dataindex,key,value:$event})
		},
		add(){
			let object = {};
			object.field = this.field.field;
			object.data = {}
			for(let key in this.field.label){
				let model = {}
				model = this.field.label[key];
				object.data[model.key] = ''
			}
			this.$store.commit('addFieldData',object)
		},
		//删除
		remove(field,dataindex){
			let object = {};
			object.field = this.field.field;
			object.index = dataindex;
			this.$store.commit('removeFieldData',object)
		}
	},
	computed: {
	}
};
</script>
