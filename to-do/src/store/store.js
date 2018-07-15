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
                  "name" : "1"
              },
              {
                  "id" : 2,
                  "name" : "2"
              },
              {
                  "id" : 3,
                  "name" : "3"
              }
          ],
          todo: [
              {
                  "id" : 4,
                  "name" : "4"
              },
              {
                  "id" : 5,
                  "name" : "5"
              },
              {
                  "id" : 6,
                  "name" : "6"
              }
          ],
      },
  },
  getters: {
      day: state => state.today.day,
      dayno: state => state.today.dayno,
      month: state => state.today.month,
      year: state => state.today.year,
      completed: state => state.tasks.completed,
      todo: state => state.tasks.todo,
  },
  mutations: {
      GET_DATE: (state) => {
          state.today.day = moment().format('dddd').toUpperCase()
          state.today.dayno = moment().format('DD')
          state.today.month = moment().format('MMMM').toUpperCase()
          state.today.year = moment().format('YYYY')
      },
      UPDATE_ORDER: (state, payload) => {
          state.tasks.todo = payload
      },
      UPDATE_LIST: (state, payload) => {
          if(payload.array === 'todo') {
              state.tasks.todo.push(payload.item);
              state.tasks.completed.splice(state.tasks.completed.indexOf(payload.item),1);

          }
          if(payload.array === 'completed') {
              state.tasks.completed.push(payload.item)
              state.tasks.todo.splice(state.tasks.todo.indexOf(payload.item),1);
          }
      },
      ADD_NEW: (state, payload) => {
          let xMax = Math.max(...Array.from(state.tasks.todo, o => o.id));
          let maxId = state.tasks.todo.find(o => o.id === xMax);
          let newTask = {
                "id": maxId + 1,
                "name": payload
          }
          state.tasks.todo.push(newTask);
      }
  },
})

