<template>
  <div id="app" >
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
      <transition name="fade">
        <div class="loading" v-if="load">
          <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        </div>
      </transition>

  </div>


</template>
<script>
//  import {mapMutations} from 'vuex'

// import subOrder from "components/order/sub-order/sub-order.vue"
// import payType from "components/pay/pay-type/pay-type.vue";
// import food from "components/food/food-index.vue";
// import goods from "components/food/goods/goods.vue";
// import scrollDemo from "components/scroll-demo/scroll-demo.vue";
import listHeader from "base/list-header/list-header.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import {mapGetters} from 'vuex'
import {initCity} from 'common/js/getData'
//import hotel from "components/hotel/hotel-booking-index/index.vue";
// import teamShop from "components/food/teamShop/teamShop-index.vue";
// import foodOrder from "components/balance/forHere-balance/forHere-balance.vue";
// import orderDetail from "components/order-detail/teamOrder-detail/teamOrder-detail.vue";
// import teamShopDetail from "components/food/teamShop/teamShop-detail/teamShop-detail.vue";
// import teamBalance from "components/balance/teamShop-balance/teamShop-balance.vue"
// import forHereBalance from "components/balance/forHere-balance/forHere-balance.vue"
// import rollNum from "components/roll-num/roll-num.vue"
// import personalData from "components/user/personal-data/personal-data.vue"
// import setting from "components/user/setting/setting.vue"
// import points from "components/user/points/points.vue"
// import otherLogin from "components/user/other-login/other-login.vue"
// import myShare from "components/user/my-share/my-share.vue"
// import resetPass from "components/user/reset-pass/reset-pass.vue"
// import resetPhone from "components/user/reset-phone/reset-phone.vue"
// import myRating from "components/user/my-rating/my-rating.vue"
// import invite from "components/user/invite-friends/invite-friends.vue"
// import teamShopSub from "components/sub-order/teamShop-sub/teamShop-order.vue"
  export default{
    data(){
        return{
          loading:true,
          color:'#ff9d00',
          size:'15px',
        }
    },
    created(){
      this.setCity()
    },
    methods:{
      setCity(){
           initCity().then((res)=>{
              this.$store.commit('SET_CURRENT_CITY',res.data.body.replace('市',''))
            })
          
      },
    },
    computed:{
      ...mapGetters([
            'load'

        ]),

    

    },
    components:{
      // subOrder,
      // payType,
      // scrollDemo,
      // listHeader,
      // food,
      // goods,
      PulseLoader
    }
  }
</script>
<style lang="scss" scoped>
  @import 'common/style/base.scss';
  body{
    #app{
      font-size: pxToRem(16);
      height: 100%;

    }
    .slide-enter-active,.slide-leave-active{
      transition: all 0.3s
    }
    .slide-enter,.slide-leave-to{
      transform: translate3d(100%, 0, 0)
    }
  }

</style>

