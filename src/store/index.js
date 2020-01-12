/* eslint-disable import/prefer-default-export */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const createStore = () => {
  const store = new Vuex.Store({
    state: { 
      home:'',
      index:'hello' 
    },
    getters: {
    },
    mutations: {
      sethome(state, res) { state.home = res }
    },
    actions: {
      getHome({ commit }) { return axios.get('http://localhost:3003/api').then((res) => { commit('sethome', res.data) })  }
      // async gethome({commit}){
      //  const res = await  this.$http.get('/api')
      //  return await commit('sethome', res.data)
      // }
    }, 
    modules: {
       
    },
  });

  return store;
};

export { createStore };
