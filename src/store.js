import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'home',
        userid: 1,
        userInfo: [],
        seria: 0
    },
    mutations: {
        userLoinin (state, data) {
            let len = state.userInfo.length+1;
            state.userInfo.push({
                uName: data.name,
                upsw: data.psw,
                uid: len
            })
        },
        userCheck (state, id) {
            state.userid = id;
        }
    },
    actions: {

    }
})