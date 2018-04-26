// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from "iview"
import iviewArea from 'iview-area'
import 'iview/dist/styles/iview.css'
import axios from 'axios';
Vue.use(iView);
Vue.use(iviewArea)
Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
