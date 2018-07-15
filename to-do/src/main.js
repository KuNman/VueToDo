import Vue from 'vue'
import App from './App.vue'
import VueLodash from 'vue-lodash'

import { store } from './store/store.js';
const options = { name: 'lodash' }
Vue.use(VueLodash, options)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
