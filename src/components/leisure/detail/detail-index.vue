<template>
  <div class="detail-index">
    <Scroll :data="[]"  >
    <div class="header">
      <MHeader>团购详情</MHeader>
    </div>
    <div class="ad">
          <div class="imgWrapper">
            <img src="./ad.jpg" alt="" class=" responsive">
          </div>
    </div>
      <div class="info">
        <div class="title">
          扶阳去湿艾灸
        </div>
        <div class="detail">
          仅售88元，免费wifi，免费停车位，男女通用！
          仅售88元，免费wifi，免费停车位，男女通用！
        </div>
        <div class="addOrder">
          <div class="button">
            加入订单
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="seller-info">
          <div class="title">
              商家信息
          </div>
        <div class="content">
          <div class="name-star">
            <div class="name">扶阳去湿艾灸（香洲店）</div><div class="star">
            <star></star><span class="score">5分</span>
          </div>
          </div>
          <div class="address">
            银花路XX号铺
          </div>
          <div class="distance">
            12km
          </div>
          <div class="phoneIcon">
          <span class="iconfont icon-phone1"></span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="rating">
        <div class="rating-count">

        </div>
        <div class="content">
            <div class="rating-list">
              <div class="rating-list-item" v-for="food in foods">
                <div class="avater">
                  <img :src="food.avater">
                </div>
                <div class="item-con">
                  <h3 class="username">{{food.username}}</h3>
                  <p class="score">评分：<star :score="food.score"></star></p>
                  <p class="rating-text">评价：{{food.rating}}</p>
                  <div class="img-list-wrapper" ref="wrapper">
                    <ul class="img-list" ref="imgList">
                      <li v-for="(img,index) in food.imgList">
                        <img :src="img">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import star from 'base/star/star'
  import MHeader from "base/m-header/m-header";
  import Scroll from 'base/scroll/scroll';
  export default {
    data(){
      return {
        foods:[
          {
            avater:require('./avater.jpg'),
            username:'刘德华',
            score:4,
            rating:'一般般吧，太贵了',
            imgList:[
              require('./food-img.jpg'),
              require('./food-img.jpg'),
              require('./food-img.jpg'),
              require('./food-img.jpg'),
              require('./food-img.jpg'),
              require('./food-img.jpg'),
            ]

          },
          {
            avater:require('./avater.jpg'),
            username:'刘德华',
            score:2,
            rating:'一般般吧，太贵了',
            imgList:[
              require('./food-img.jpg'),
              require('./food-img.jpg'),
              require('./food-img.jpg'),

            ]

          },
          {
            avater:require('./avater.jpg'),
            username:'刘德华',
            score:5,
            rating:'一般般吧，太贵了',
            imgList:[
              require('./food-img.jpg'),
              require('./food-img.jpg'),
            ]

          },
          {
            avater:require('./avater.jpg'),
            username:'刘德华',
            score:4.5,
            rating:'一般般吧，太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了',
            imgList:[
              require('./food-img.jpg'),
            ]

          }
        ]
      }

    },
    components:{
      MHeader,
      Scroll,
      star
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .detail-index{
    .split{
      background: #e7e7e7;
      height: pxToRem(13);
    }
    .header{
      background: #ffac29;
    }
    .ad{
      .imgWrapper{

      }
    }
    .info{
      position: relative;
      padding:pxToRem(18) pxToRem(15);
      @include border-1px(1px,0,0,0);
      .title{
        color: #000;
      }
      .detail{
        margin-top: pxToRem(4);
        width: pxToRem(224);
        line-height: pxToRem(16);
        font-size: pxToRem(12);
        color: #646464;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
      }
      .addOrder{
        position: absolute;
        right: pxToRem(15);
        bottom: pxToRem(15);
        color: #fff;
        .button{
          height:pxToRem(25);
          width: pxToRem(70);
          text-align: center;
          line-height: pxToRem(25);
          background: #ffac29;
          border-radius: pxToRem(25);
          font-size: pxToRem(12);
        }
      }
    }
    .seller-info{
      position: relative;
      .title{
        position: relative;
        height: pxToRem(27);
        line-height: pxToRem(27);
        text-indent: pxToRem(13);
        font-size: pxToRem(15);
        color: #ffa71d;
        @include border-1px(0,0,1px,0);
      }
      .content{
        padding: pxToRem(8) pxToRem(13);
        .name-star{
          display: flex;
          justify-content: flex-start;
          .name{
            font-size: pxToRem(14);
            color: #000;
          }
          .star{
            display: flex;
            align-items: center;
            margin-left: pxToRem(6);
            .score{
              margin-left: pxToRem(5);
              font-size: pxToRem(15);
              color: #FFDB3A;
            }
          }
        }
        .address{
          margin-top: pxToRem(3);
          font-size: pxToRem(12);
          color: #646464;
        }
        .distance{
          margin-top: pxToRem(3);
          font-size: pxToRem(12);
          color: #646464;
        }
        .phoneIcon{
          position: absolute;
          right: pxToRem(25);
          bottom: pxToRem(17);
          font-size: pxToRem(24);
          color: #646464;
        }
        .rating{
          .content{
            .rating-list{
              padding: 0 pxToRem(7);
              overflow: hidden;
              .rating-list-item{
                display: flex;
                @include border-1px(0,0,1px,0);
                position: relative;
                padding: pxToRem(11);
                .avater{
                  flex: 0 0 pxToRem(50);
                  width: pxToRem(50);
                  margin-right: pxToRem(7);
                  img{
                    width: pxToRem(39);
                    height: pxToRem(39);
                    border-radius: 50%;
                  }
                }
                .item-con{
                  flex:1;
                  overflow: hidden;
                  .username{
                    color: #646464;
                    font-size: pxToRem(14);
                    font-weight: normal;
                  }
                  .score{
                    font-size: pxToRem(12);
                    color: #969696;
                    margin: pxToRem(9) 0;
                    .star{
                      display: inline-block;
                      vertical-align: middle;
                    }
                  }
                  .rating-text{
                    font-size: pxToRem(12);
                    color: #969696;
                    line-height: pxToRem(14);
                  }
                  .img-list-wrapper{
                    overflow-x: auto;
                    width: 100%;
                    margin-top: pxToRem(10);
                    .img-list{
                      li{
                        margin-right: pxToRem(6);
                        display: inline-block;
                        img{
                          width:pxToRem(70);
                          height: pxToRem(70);
                          border-radius: pxToRem(3);
                          vertical-align: top;
                        }
                      }
                    }
                  }


                }
              }
            }
          }
        }
      }
    }
  }
</style>
