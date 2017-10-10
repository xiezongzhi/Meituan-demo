import Vue from 'vue';
import Router from 'vue-router';
// import Shop from 'components/shop/shop-index.vue';
// import Home from 'components/home/home-index.vue';
// import Pay from 'components/pay/pay-index.vue';
// import Order from 'components/order/order-index.vue';
// import User from 'components/user/user-index.vue';
// import Food from 'components/food/food-index.vue';
// import Hotel from 'components/hotel/hotel-booking-index/index.vue';
// import HotelList from 'components/hotel/hotel-list/index.vue';
// import HotelDetails from 'components/hotel/hotel-details/index.vue';
// import GoodsDetail from 'components/food/food-rating/index.vue';
// import Leisure from 'components/leisure/leisure-index';
// import City from 'base/city/city';
// import Search from 'base/search/search';
// import MyRating from 'components/user/my-rating/my-rating.vue';
// import MyShare from 'components/user/my-share/my-share.vue';
// import Setting from 'components/user/setting/setting.vue';
// import PersonalData from 'components/user/personal-data/personal-data.vue';
// import Invite from 'components/user/invite-friends/invite-friends.vue';
// import Login from 'components/login/login-index.vue';


const Shop = r => require.ensure([], () => r(require('components/shop/shop-index.vue')), 'Shop')
const Home = r => require.ensure([], () => r(require('components/home/home-index.vue')), 'Home')
const Pay = r => require.ensure([], () => r(require('components/pay/pay-index.vue')), 'Pay')
const Order = r => require.ensure([], () => r(require('components/order/order-index.vue')), 'Order')
const User = r => require.ensure([], () => r(require('components/user/user-index.vue')), 'User')
const Food = r => require.ensure([], () => r(require('components/food/food-index.vue')), 'Food')
const Hotel = r => require.ensure([], () => r(require('components/hotel/hotel-booking-index/index.vue')), 'Hotel')
const HotelList = r => require.ensure([], () => r(require('components/hotel/hotel-list/index.vue')), 'HotelList')
const HotelDetails = r => require.ensure([], () => r(require('components/hotel/hotel-details/index.vue')), 'HotelDetails')
const GoodsDetail = r => require.ensure([], () => r(require('components/food/food-rating/index.vue')), 'GoodsDetail')
const Leisure = r => require.ensure([], () => r(require('components/leisure/leisure-index')), 'Leisure')
const City = r => require.ensure([], () => r(require('base/city/city')), 'City')
const Search = r => require.ensure([], () => r(require('base/search/search')), 'Search')
const Login = r => require.ensure([], () => r(require('components/login/login-index')), 'Login')
const Register = r => require.ensure([], () => r(require('components/register/register-index')), 'Register')

const Refund = r => require.ensure([], () => r(require('components/order/refund/refund-index')), 'Refund')
const RefundDetails = r => require.ensure([], () => r(require('components/order/refund/refund-details')), 'RefundDetails')
const Collection = r => require.ensure([], () => r(require('components/user/collection/index')), 'Collection')
const myRating = r => require.ensure([], () => r(require('components/user/my-rating/my-rating')), 'myRating')
const myShare = r => require.ensure([], () => r(require('components/user/my-share/my-share')), 'myShare')
const invite = r => require.ensure([], () => r(require('components/user/invite-friends/invite-friends')), 'invite')
const setting  = r => require.ensure([], () => r(require('components/user/setting/setting')), 'setting')



Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
    {
      path: '/home',
      component: Home,
      meta: { keepAlive: true },
      children: [
        
        
        {
          path:'/home/leisure',
          component: Leisure,
          // children:[
          //   {
          //     path:'/home/leisure/goodsDetail',
          //     component:Leisure
          //   }
          // ]
        },

      ]
    },
    {
      path:'/food',
      component: Food,
      children:[
        {
          path:'/food/goodsDetail',
          component:GoodsDetail
        }
      ]
    },
    {
      path:'/hotel',
      component: Hotel,
      children:[
        {
          path:'/hotel/hotelList',
          component:HotelList,
          children:[
            {
              path:'/hotel/hotelDetails',
              component:HotelDetails
            }
          ]
        }
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
      component: User,
    },
    {
      path:'/collection',
      component:Collection,
    },
    {
      path: '/city',
      component: City,
      meta: { keepAlive: true },
    },
    {
      path: '/search',
      component: Search,
    },
    {
       path:'/login',
       component: Login,
    },
    {
       path:'/register',
       component: Register,
    },
    {
       path:'/refund',
       component: Refund,
    },
    {
      
      path:'/refundDetails',
      component: RefundDetails,
      
    },
    {
      path:'/myRating',
      component:myRating
    },
    {
      path:'/myShare',
      component:myShare
    },
    {
      path:'/invite',
      component:invite
    },
    {
      path:'/setting',
      component:setting
    },

  ],
  base:'meituan',
  linkActiveClass: 'active'
})
