import Vue from 'vue';
import Router from 'vue-router';
import Shop from 'components/shop/shop-index.vue';
import Home from 'components/home/home-index.vue';
import Pay from 'components/pay/pay-index.vue';
import Order from 'components/order/order-index.vue';
import User from 'components/user/user-index.vue';
import Food from 'components/food/food-index.vue';
import Hotel from 'components/hotel/hotel-booking-index/index.vue';
import HotelList from 'components/hotel/hotel-list/index.vue';
import HotelDetails from 'components/hotel/hotel-details/index.vue';
import GoodsDetail from 'components/food/food-rating/index.vue';
import City from 'base/city/city';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path:'/home/food',
          component: Food,
          children:[
            {
              path:'/home/food/goodsDetail',
              component:GoodsDetail
            }
          ]
        },
        {
          path:'/home/hotel',
          component: Hotel,
          children:[
            {
              path:'/home/hotel/hotelList',
              component:HotelList,
              children:[
                {
                  path:'/home/hotel/hotelList/hotelDetails',
                  component:HotelDetails
                }
              ]
            }
          ]
        },
        
      ]
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/user',
      component: User
    },
    {
        path: '/city',
        component: City,
        meta: { keepAlive: true }
     }
   
  ],
  base:'meituan',
  linkActiveClass: 'active'
})
