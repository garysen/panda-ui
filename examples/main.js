import Vue from 'vue'
import App from './App.vue'
import PandaUI from '../packages/index';

Vue.config.productionTip = false
Vue.use(PandaUI);

new Vue({
  render: h => h(App)
}).$mount('#app')
