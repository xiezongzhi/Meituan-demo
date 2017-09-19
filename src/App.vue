<template>
  <div id="app" >
    <!--<keep-alive>-->
      <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
    <!--</keep-alive>-->
    <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
<!--<mainFooter></mainFooter>-->
    <!--<subOrder></subOrder>-->
    <!--<payType></payType>-->
    <!--<listHeader></listHeader>-->
    <!--<scrollDemo></scrollDemo>-->
    <!--<food></food>-->
    <!--<goods></goods>-->
    <!--<hotel></hotel>-->
          <!--<login></login>-->
    <register></register>
    <!--<user></user>-->
    <!--<leisure></leisure>-->
    <!--<leisureClass></leisureClass>-->
    <!--<order></order>-->
  </div>

</template>
<script>
//  import {mapMutations} from 'vuex'
import mainFooter from "components/main-footer/main-footer.vue";
import subOrder from "components/order/sub-order/sub-order.vue"
import payType from "components/pay/pay-type/pay-type.vue";
import food from "components/food/food-index.vue";
//import goods from "components/food/goods/goods.vue";
import scrollDemo from "components/scroll-demo/scroll-demo.vue";
import listHeader from "base/list-header/list-header.vue";
import login from "components/login/login-index.vue";
import register from "components/register/register-index.vue"
import user from "components/user/user-index.vue"
import leisure from "components/leisure/leisure-index.vue"
import leisureClass from "components/leisure/leisureFilter/leisureFilter-index.vue"
import hotel from "components/hotel/hotel-booking-index/index.vue";
import goods from "components/leisure/detail/detail-index.vue";
import order from "components/order/order-index.vue";
  export default{
    data(){
        return{

        }
    },
    created(){

    },
    components:{
      mainFooter,
      subOrder,
      payType,
      scrollDemo,
      listHeader,
      food,
      goods,
      login,
      register,
      user,
      leisure,
      leisureClass,
      order
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
