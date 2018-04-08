import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  navselected: "profile",
  resume: {
    profile: {
      field: 'profile',
      label: [{
					key: 'name'
        },
        {
					key: 'breath'
        },
        {
					key: 'city'
				}
      ],
      data: [{
        name: '',
        breath: '',
        city: ''
      }]
    },
    education: {
      field: 'education',

    },
    workHistory: {
      field: 'workHistory',

    },
    projects: {
      field: 'projects',

    },
    awards: {
      field: 'awards',

    },
    contacts: {
      field: 'contacts',

    },
    others: {
      field: 'others',

    },
  }
}

const mutations = {
  switchTab(state, target) {
    this.state.navselected = target;
	},
	updateForm(state,key,value) {
		console.log(key)
		console.log(value)
	}
}

export default new Vuex.Store({
  state,
  mutations
})

