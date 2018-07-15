import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
      increment: ({commit}) => {
          console.log(1);
      },
  },
  modules: {
  }
})
