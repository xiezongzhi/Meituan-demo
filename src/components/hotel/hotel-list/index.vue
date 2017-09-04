<template>
  <div>
    <div class="hotel-list">
      <hotelHead></hotelHead>
      <hotelFilter></hotelFilter>
      <hotelListCon></hotelListCon>
    </div>
    <transition name="slide">
    <router-view class="routerView">
    </router-view>
    </transition>
  </div>
</template>

<script>
  import hotelHead from './hotel-head'
  import hotelFilter from './hotel-filter'
  import hotelListCon from './hotel-list-con'
  import {getHotelList} from 'common/js/getData'
  export default{
    created(){
      getHotelList(
        {
          geotable_id:172120,
          region:'珠海',
          filter:'mer_id:[53,54,55]'
        }
      ).then((data)=>{
        console.log(data)
      })
    },
    components:{
      hotelHead,
      hotelFilter,
      hotelListCon
    }
  }
</script>
<style lang="scss" scoped>
  .hotel-list{
    background: #fff;
    height:100%;
  }
</style>
