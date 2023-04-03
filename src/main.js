import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MinderCase from './export'
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(MinderCase);

new Vue({
  el: '#app',
  render: h => h(App)
})
