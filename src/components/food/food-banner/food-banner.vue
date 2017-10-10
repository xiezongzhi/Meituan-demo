<template>
  <div class="food-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in foodBanners" :key="item.id">
        <img src="./index_banner.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {getFoodBanner} from 'common/js/getData'
  export default {
    data() {
      return {
        foodBanners:[],
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          preloadImages:true,
          pagination: '.swiper-pagination',
        }
      }
    },
    created() {
      this._getFoodBanner();
    },
    methods: {
      _getFoodBanner() {
        getFoodBanner(2).then((data) => {
          this.foodBanners = data;
        })
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .food-banner{
    height: pxToRem(155);
    img{
      display: block;
      width: 100%;
      height: pxToRem(155);
    }
  }
</style>
