<template>
  <div class="food-nav">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <ul class="list">
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_1.png" alt="">
              </div>
              <span class="title">西餐</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_2.png" alt="">
              </div>
              <span class="title">小吃快餐</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_3.png" alt="">
              </div>
              <span class="title">火锅</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_4.png" alt="">
              </div>
              <span class="title">海鲜</span>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="list">
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_1.png" alt="">
              </div>
              <span class="title">西餐</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_2.png" alt="">
              </div>
              <span class="title">丽人/小吃快餐</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_3.png" alt="">
              </div>
              <span class="title">火锅</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_4.png" alt="">
              </div>
              <span class="title">海鲜</span>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import slider from 'base/slider/slider';
  export default{
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: false,
          pagination: '.swiper-pagination',
        }
      }
    },
    components:{
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .food-nav{
    .list{
      display: flex;
      flex-wrap: wrap;
      padding:0 0 pxToRem(34) 0;
      .list-item {
        width: 25%;
        margin-top: pxToRem(14);
        text-align: center;
        a {
          display: block;
          .img-wrapper {
            margin-bottom: pxToRem(7);
            img {
              margin: 0 auto;
              width: pxToRem(61);
            }
          }
          .title {
            font-size: pxToRem(13);
          }
        }
      }
    }
  }
</style>
