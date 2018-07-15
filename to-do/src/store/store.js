import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';


Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
      today: {
          dayno: 10,
          day: 'monday',
          month: 'january',
          year: 2018
      }
  },
  getters: {
      day: state => state.today.day,
      dayno: state => state.today.dayno,
      month: state => state.today.month,
      year: state => state.today.year,
  },
  mutations: {
      GET_DATE: (state) => {
          state.today.day = moment().format('dddd').toUpperCase()
          state.today.dayno = moment().format('DD')
          state.today.month = moment().format('MMMM').toUpperCase()
          state.today.year = moment().format('YYYY')
      }
  },
  actions: {
  },
  modules: {
  }
})

