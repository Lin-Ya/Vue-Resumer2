<template>
	<div class="container">
		<div class="header">
			<h1 id="fieldName">{{field.field}}</h1>
			<el-button>添加</el-button>
		</div>
		<div class="content">
			<el-form :label-position="'top'">
				<el-form-item v-bind:label="item.key" v-for="item in field.label" v-bind:key="item.key">
					<el-input v-bind:value="item.value"></el-input>
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
export default {
  computed: {},
  //给每一个模板传入的field是一大类的数据，包括其简历条目类别以及内容。
  props: ["field"]
};
</script>
