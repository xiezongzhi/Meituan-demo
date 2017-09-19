<template>
  <div class="home-nav">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <ul class="list">
          <li class="list-item">
            <router-link to="/food">
              <div class="img-wrapper">
                <img src="./index_1.png" alt="">
              </div>
              <span class="title">美食</span>
            </router-link>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_2.png" alt="">
              </div>
              <span class="title">电影</span>
            </a>
          </li>
          <li class="list-item">
            <router-link to="/hotel">
              <div class="img-wrapper">
                <img src="./index_3.png" alt="">
              </div>
              <span class="title">酒店住宿</span>
            </router-link >
          </li>
          <li class="list-item">
            <router-link to="/home/leisure">
              <div class="img-wrapper">
                <img src="./index_4.png" alt="">
              </div>
              <span class="title">休闲娱乐</span>
             </router-link >
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_5.png" alt="">
              </div>
              <span class="title">ktv</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_6.png" alt="">
              </div>
              <span class="title">丽人/美发</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_7.png" alt="">
              </div>
              <span class="title">运动健身</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_8.png" alt="">
              </div>
              <span class="title">学习培训</span>
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
              <span class="title">美食</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_2.png" alt="">
              </div>
              <span class="title">电影</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_3.png" alt="">
              </div>
              <span class="title">酒店住宿</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_4.png" alt="">
              </div>
              <span class="title">休闲娱乐</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_5.png" alt="">
              </div>
              <span class="title">ktv</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_6.png" alt="">
              </div>
              <span class="title">丽人/美发</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_7.png" alt="">
              </div>
              <span class="title">运动健身</span>
            </a>
          </li>
          <li class="list-item">
            <a href="#">
              <div class="img-wrapper">
                <img src="./index_8.png" alt="">
              </div>
              <span class="title">学习培训</span>
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
    methods:{
//      selectNav() {
//        this.$router.push({
//          path: `/home/food`
//        });
//      },
    },
    components:{
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .home-nav{
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
