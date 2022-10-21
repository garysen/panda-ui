import Vue from 'vue'
import App from './App.vue'
import KingdomUI from '../packages/index';

Vue.config.productionTip = false
Vue.use(KingdomUI);

new Vue({
  render: h => h(App)
}).$mount('#app')
