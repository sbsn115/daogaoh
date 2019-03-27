// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*==========引入elementUI的组件==========*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*==========使用elementUI的组件==========*/

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件

Vue.use(ElementUI);


import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
