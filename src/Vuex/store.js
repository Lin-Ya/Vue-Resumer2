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
        profile: [],
        education: [],
        workHistory: [],
        projects: [],
        awards: [],
        contacts: [],
        others: []
    }
}

const mutations = {

}

export default new Vuex.Store({
    state, mutations
})