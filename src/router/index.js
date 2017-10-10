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
import MyRating from 'components/user/my-rating/my-rating.vue';
import MyShare from 'components/user/my-share/my-share.vue';
import Setting from 'components/user/setting/setting.vue';
import PersonalData from 'components/user/personal-data/personal-data.vue';
import Invite from 'components/user/invite-friends/invite-friends.vue';
import Login from 'components/login/login-index.vue';

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
                  path:'/home/hotel/hotelList/hotelDetails:id',
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
     },
    {
      path: '/myRating',
      component: MyRating,
    },
    {
      path: '/myShare',
      component: MyShare,
    },
    {
      path: '/Setting',
      component:Setting,
    },
    {
      path: '/personalData',
      component:PersonalData,
    },
    {
      path: '/invite',
      component:Invite,
    },
    {
      path: '/login',
      component:Login,
    }
  ],
  base:'meituan',
  linkActiveClass: 'active'
})
