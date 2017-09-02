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
  export default{
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
