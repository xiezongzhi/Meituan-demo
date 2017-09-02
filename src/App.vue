<template>
  <div id="app" >

    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
<mainFooter></mainFooter>
    <!--<subOrder></subOrder>-->
    <!--<payType></payType>-->
    <!--<listHeader></listHeader>-->
    <!--<scrollDemo></scrollDemo>-->
    <!--<food></food>-->
    <!--<goods></goods>-->
    <!--<hotel></hotel>-->
  </div>

</template>
<script>
//  import {mapMutations} from 'vuex'
import mainFooter from "components/main-footer/main-footer.vue";
import subOrder from "components/order/sub-order/sub-order.vue"
import payType from "components/pay/pay-type/pay-type.vue";
import food from "components/food/food-index.vue";
import goods from "components/food/goods/goods.vue";
import scrollDemo from "components/scroll-demo/scroll-demo.vue";
import listHeader from "base/list-header/list-header.vue";
//import hotel from "components/hotel/hotel-booking-index/index.vue";
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
      goods
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
