import Vue from 'vue';
import 'babel-polyfill';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import store from './store';
import 'common/style/index.scss';
import 'common/js/htmlFont';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import jsonp from 'jsonp';
require('promise.prototype.finally').shim();
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = axios;
Vue.prototype.Jsonp=jsonp;

fastclick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
