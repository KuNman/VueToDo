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
      },
      tasks: {
          completed: [
              {
                  "id" : 1,
                  "name" : "Wynieść śmieci"
              },
              {
                  "id" : 2,
                  "name" : "Wynieść psa"
              },
              {
                  "id" : 3,
                  "name" : "Wynieść rower"
              }
          ],
          todo: [
              {
                  "id" : 1,
                  "name" : "Umyć śmieci"
              },
              {
                  "id" : 2,
                  "name" : "Umyć psa"
              },
              {
                  "id" : 3,
                  "name" : "Umyć rower"
              }
          ],
      }
  },
  getters: {
      day: state => state.today.day,
      dayno: state => state.today.dayno,
      month: state => state.today.month,
      year: state => state.today.year,
      completed: state => state.tasks.completed,
      todo: state => state.tasks.todo,
      completed: state => state.tasks.completed,
      todo: state => state.tasks.todo
  },
  mutations: {
      GET_DATE: (state) => {
          state.today.day = moment().format('dddd').toUpperCase()
          state.today.dayno = moment().format('DD')
          state.today.month = moment().format('MMMM').toUpperCase()
          state.today.year = moment().format('YYYY')
      },
      UPDATE_LIST: (state, payload) => {
          state.tasks.todo = payload
      }
  },
  actions: {
  },
  modules: {
  }
})

