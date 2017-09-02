<template>
  <div class="home-banner">
        <!--<div v-if="test.length" class="slider-wrapper" ref="sliderWrapper">-->
          <!--<slider>-->
            <!--<div v-for="item in test">-->
              <!--<a>-->
                <!--<img class="needsclick"  :src="item.picUrl">-->
              <!--</a>-->
            <!--</div>-->
          <!--</slider>-->
      <!--</div>-->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="./index_banner.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="./index_banner.jpg" alt="">
      </swiper-slide>

      <!-- Optional controls -->
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
