import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    resume: {
        config: [
            {field: 'profile'},
            {field: 'education'},
            {field: 'workHistory'},
            {field: 'projects'},
            {field: 'awards'},
            {field: 'contacts'},
            {field: 'others'},
        ]
    }
}

const mutations = {

}

export default new Vuex.Store({
    state,mutations
})