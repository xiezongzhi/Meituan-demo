<template>
  <div class="home-newAct">
    <div class="left">
      <p class="title">最新<br>活动</p>
    </div>
    <div class="right">
      <p class="desc">
        <swiper :options="swiperOption" ref="mySwiper" class="swiperWrapper">
          <swiper-slide class="swiperSlider">
            <span>美食六月特惠，口碑报表等你来试！</span>
          </swiper-slide>
          <swiper-slide class="swiperSlider">
            <span>美食六月特惠，口碑报表等你来试！</span>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: false,
          autoplay: 3500,
          autoHeight: true,
          loop: true,
          direction: 'vertical',
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .home-newAct {
    display: flex;
    align-items: center;
    .left {
      width: pxToRem(53);
      padding: pxToRem(8) pxToRem(12) pxToRem(8) pxToRem(20);
      box-sizing: border-box;
      border-right: 1px solid #eee;
      font-size: 0px;
      .title {
        line-height: pxToRem(18);
        font-size: pxToRem(12);
        font-weight: bolder;
        white-space: nowrap;
        color: #ff9d00;
      }
    }
    .right {
      flex: 1;
      margin-left: pxToRem(14);
      font-size: pxToRem(12);
      color: #969696;
      .desc {
        span {
          display: inline-block;
          width: pxToRem(250);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }

  .swiperWrapper {
    height: pxToRem(48);
  }

  .swiperSlider {
    line-height: pxToRem(48);
  }
</style>
