import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import dateFilter from './filtes/date.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
