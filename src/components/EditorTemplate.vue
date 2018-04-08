<template>
	<div class="container">
		<div class="header">
			<h1 id="fieldName">{{field.field}}</h1>
			<el-button>添加</el-button>
		</div>
		<div class="content">
			<el-form :label-position="'top'" v-for="(datakey,dataindex) in field.data" v-bind:key="datakey">
				<el-form-item v-bind:label="item.key" v-for="item in field.label" v-bind:key="item.key">
					<el-input  v-on:input="updateForm(field.field,dataindex,item.key,$event)"></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<style lang="less">
.container {
	padding: 0 16px;
	height: 100%;
	.content {
		
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
		}
	}
};
</script>
