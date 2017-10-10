<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img,index) in bannerList"  :key="index">
        <img :src="bannerUrl+img.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
import {root} from 'common/js/config';
import {getBanner} from 'common/js/getData'
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          autoplayDisableOnInteraction : false,
          pagination: '.swiper-pagination',
        },
        bannerUrl:[root+'/Public/uploads/banner/'],
        bannerList:[]
      }
    },
    created() {
      
      this.setBanner()
    },
    methods: {
      
       setBanner(){
          let _this = this
          getBanner().then((res)=>{
            _this.bannerList = res.data.body
            this.$store.commit('SET_LOADING',false)
             // _this.banner +=  res.data.body.img
          })
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .home-banner{
    height:pxToRem(155); 
    img{
      display: block;
      width: 100%;
      height:pxToRem(155);
    }
  }
</style>
