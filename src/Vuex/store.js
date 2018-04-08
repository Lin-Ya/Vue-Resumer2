import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	navselected: "profile",
	resume: {
		profile: {
			field: 'profile',
			title: '个人信息',
			label: [
				{ key: 'name', cn: '姓名' },
				{ key: 'breath', cn: '出生年月' },
				{ key: 'genter', cn: '性别' },
				{ key: 'city', cn: '所在城市' },
				{ key: 'workTimes', cn: '工作时间' },
				{ key: 'status', cn: '目前状态' },
				{ key: 'wishCity', cn: '期望城市' },
				{ key: 'wishPosition', cn: '期望职位' },
			],
			data: [{
				name: '',
				breath: '',
				city: '',
				workTimes: '',
				status: '',
				wishCity: '',
				wishPosition: '',
			}
			]
		},
		education: {
			field: 'education',
			title: '学习经历',
			label: [
				{ key: 'school', cn: '学校' },
				{ key: 'time', cn: '时间' },
				{ key: 'major', cn: '专业' }
			],
			data: [{
				school: '',
				time: '',
				major: ''
			},
			{
				school: '',
				time: '',
				major: ''
			}
			]
		},
		workHistory: {
			field: 'workHistory',
			title: '工作经历',
			label: [
				{ key: 'company', cn: '公司名称' },
				{ key: 'time', cn: '任职时间' },
				{ key: 'position', cn: '职位' },
				{ key: 'content', cn: '职责简介' }
			],
			data: [{
				company: '',
				time: '',
				position: '',
				content: ''
			}
			]
		},
		projects: {
			field: 'projects',
			title: '项目经验',
			label: [
				{ key: 'name', cn: '项目名称' },
				{ key: 'skill', cn: '所需技能' },
				{ key: 'content', cn: '项目简介' }
			],
			data: [{
				name: '',
				skill: '',
				content: ''
			}
			]
		},
		awards: {
			field: 'awards',
			title: '获奖经历',
			label: [
				{ key: 'name', cn: '奖项' },
				{ key: 'content', cn: '简介' }
			],
			data: [{
				name: '',
				content: ''
			}
			]
		},
		contacts: {
			field: 'contacts',
			title: '联络方式',
			label: [
				{ key: 'type', cn: '联络方式' },
				{ key: 'address', cn: '联络地址' }
			],
			data: [{
				type: '',
				address: ''
			}
			]
		},
		others: {
			field: 'others',
			title: '其他',
			label: [
				{ key: 'name', cn: '条目' },
				{ key: 'content', cn: '内容' }
			],
			data: [{
				name: '',
				content: ''
			}
			]
		},
	}
}

const mutations = {
	switchTab(state, target) {
		this.state.navselected = target;
	},
	updateForm(state, {
		field,
		dataindex,
		key,
		value
	}) {
		this.state.resume[field].data[dataindex][key] = value
	},
	addFieldData(state, object) {
		let field = object.field;
		this.state.resume[field].data.push(object.data)
	},
	removeFieldData(state, object) {
		let data = this.state.resume[object.field].data
		//用于remove子信息里面的data。object是一个来自按钮处理的一个对象。有field和index
		//根据对象查找到对应的data并从数组中去除。
		if (data.length > 1) {
			data.splice(object.index, 1)
		} else {
			for (let key in data[0]) {
				data[0][key] = "";
			}
		}
	}
}

export default new Vuex.Store({
	state,
	mutations
})
