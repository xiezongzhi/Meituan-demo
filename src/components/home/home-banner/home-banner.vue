<template>
  <div class="home-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="./index_banner.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="./index_banner.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          autoplayDisableOnInteraction : false,
          pagination: '.swiper-pagination',
        }
      }
    },
    created() {
      this._test();
    },
    methods: {
      _test() {
        this.test=[
          {
            picUrl: "http://localhost/images/index_banner.jpg"
          }, {
            picUrl: "http://localhost/images/index_banner.jpg"
          }
        ]
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .home-banner{

    img{
      display: block;
      width: 100%;
    }
  }
</style>
