import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta'
import 'firebase/auth';
import 'firebase/database'
import App from './App.vue';
import router from './router/index';
import currencyFilter from './filtes/currency.filter';
import localizeFilter from './filtes/localize.filter';
import tooltipDirective from './directives/tooltip.directive';
import store from './store';
import dateFilter from './filtes/date.filter';
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import Loader from './components/app/Loader.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyA8f5o8Z842EZSFjaIyDJ5X-r-34j0g628',
  authDomain: 'virtualpurse-e0e4e.firebaseapp.com',
  databaseURL: 'https://virtualpurse-e0e4e.firebaseio.com',
  projectId: 'virtualpurse-e0e4e',
  storageBucket: 'virtualpurse-e0e4e.appspot.com',
  messagingSenderId: '238178934107',
  appId: '1:238178934107:web:852fe504143046ce66ce7e',
  measurementId: 'G-0DCR45GLGB'
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
})
