import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  navselected: "profile",
  resume: {
    config: [{
        field: "profile"
      },
      {
        field: "education"
      },
      {
        field: "workHistory"
      },
      {
        field: "projects"
      },
      {
        field: "awards"
      },
      {
        field: "contacts"
      },
      {
        field: "others"
      }
    ],
    profile: [1],
    education: [2],
    workHistory: [3],
    projects: [4],
    awards: [5],
    contacts: [6],
    others: [7]
  }
}

const mutations = {
	switchTab(state,target){
		console.log('set')
		this.state.navselected = target;
	}
}

export default new Vuex.Store({
  state,
  mutations
})
