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
import  { AlertPlugin ,Actionsheet } from 'vux';

Vue.use(AlertPlugin);
Vue.use(Actionsheet );
require('promise.prototype.finally').shim();
Vue.use(VueAwesomeSwiper);
Vue.prototype.$http = axios;
Vue.prototype.Jsonp=jsonp;

fastclick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.loginStatus==1) {  // 通过vuex state获取当前的loginStatus
            next();
        }
        else {
            Vue.$vux.alert.show({
              content: '请先登录',
               onHide(){
                  next({
                      path: '/login',
                      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                  })
               }
            });
        }
    }
    else {
      next();
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


  