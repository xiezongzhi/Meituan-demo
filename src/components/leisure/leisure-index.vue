<template>
  <div class="leisure-index">
    <div class="header">
      <span class="iconfont icon-left left"></span><div class="right"><input type="text" class="search" placeholder="输入商家、分类或商圈" disabled><span class="iconfont icon-fangdajing"></span></div>
    </div>
    <Scroll :data="[]" class="scroll" :listenScroll="true" >
      <div class="wrapper">
        <div class="leisure-nav">
          <ul class="list">
            <li class="list-item" v-for="item in leisureIcon">
              <router-link to="/home/food">
                <div class="img-wrapper">
                  <img :src="item.imgUrl" alt="">
                </div>
                <span class="title">{{item.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="split">
        </div>
        <div class="odds">
          <div class="title">特惠推荐</div>
          <div class="content">
            <div class="list">
              <div class="item" v-for="item in oddsList">
                <div class="imgWrapper">
                  <img :src="item.imgUrl" alt="" class="responsive">
                </div>
                <div class="info">
                  <p class="desc">{{item.desc}}</p>
                  <p class="oddDetail">{{item.odd}}</p>
                  <p class="price">￥{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="more">
            查看全部特惠
          </div>
        </div>
        <div class="split">
        </div>
        <div class="leisure-content">
          <div class="leisure-list" v-for="item in leisureList">
            <div class="list-item">
              <div class="top">
                <div class="image-wrapper" >
                  <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%">
                </div>
                <div class="content">
                  <div class="item-name">
                    {{item.title}}
                  </div>
                  <div class="item-star">
                    <star :score="item.score"></star>
                  </div>
                  <div class="price">
                    <span class="new"><i class="yuan">￥</i>12 </span><span class="old"><i
                    class="yuan1">￥</i>12</span>
                  </div>
                  <div class="rang">
                    <span class="num"><{{item.distance}}km</span>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="team">
                  <div class="team-list">
                    <div class="team-item">
                      <div class="team-price">￥{{item.teamPrice}}</div>
                      <div class="team-desc">{{item.teamDesc}}</div>
                    </div>
                  </div>
                  <div class="more">
                    查看其他项目
                  </div>
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
  import Scroll from 'base/scroll/scroll'
  import star from 'base/star/star'
  export default {
    data(){
      return {
        leisureIcon:[
          {
            imgUrl:require('./leisure-1.png'),
            title:'足疗按摩'
          },
          {
            imgUrl:require('./leisure-2.png'),
            title:'洗浴汗蒸'
          },
          {
            imgUrl:require('./leisure-3.png'),
            title:'密室逃脱'
          },
          {
            imgUrl:require('./leisure-4.png'),
            title:'ktv'
          },
          {
            imgUrl:require('./leisure-5.png'),
            title:'运动健身'
          },
          {
            imgUrl:require('./leisure-6.png'),
            title:'迷失逃脱'
          },
          {
            imgUrl:require('./leisure-7.png'),
            title:'真人css'
          },
          {
            imgUrl:require('./leisure-8.png'),
            title:'农家乐'
          },
        ],
        leisureList:[
          {
            imgUrl:require('./list-1.jpg'),
            title:'xx推拿（香洲店）',
            score:4,
            price:44,
            distance:3,
            teamPrice:23,
            teamDesc:'扶阳去湿艾灸'
          }
        ],
        oddsList:[
          {
            imgUrl:require('./odd-1.jpg'),
            desc:'推拿',
            odd:'单人优惠',
            price:93
          },
          {
            imgUrl:require('./odd-1.jpg'),
            desc:'推拿',
            odd:'单人优惠',
            price:93
          },
          {
            imgUrl:require('./odd-1.jpg'),
            desc:'推拿',
            odd:'单人优惠',
            price:93
          }
        ]
      }
    },
    components:{
      Scroll,
      star
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .leisure-index{
    .split{
      background: #e7e7e7;
      height: pxToRem(13);
    }
    .header{
      display: flex;
      padding: 0 0 0 pxToRem(10);
      height: pxToRem(45);
      background:#ffa71d ;
      align-items: center;
      .left{
        flex: 1;
        color: #fff;
        font-size: pxToRem(20);
      }
      .right{
        position: relative;
        flex: 14;
        .search{
          width: pxToRem(310);
          height: pxToRem(22);
          margin-left: pxToRem(5);
          font-size: pxToRem(14);
          -webkit-appearance: inherit;
          outline: none;
          background: none;
          border-bottom: 1px solid #fefefe;
          color: #fff;
          text-indent: pxToRem(20);
          &::-webkit-input-placeholder{
            color: #fefefe;opacity:1;
          }
        }
        .icon-fangdajing{
          position: absolute;
          left: 0;
          line-height: pxToRem(23);
          font-size: pxToRem(16);
          color: #fff;
        }
      }
    }
    .wrapper{
      .leisure-nav{
        .list{
          display: flex;
          flex-wrap: wrap;
          padding:0 0 pxToRem(14) 0;
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
      .odds{
        .title{
          padding: 0 pxToRem(15);
          height: pxToRem(28);
          line-height: pxToRem(28);
          font-size: pxToRem(15);
          color:$defaultColor;
        }
        .list{
          display: flex;
          position: relative;
          padding: 0 pxToRem(12);
          align-items: center;
          @include border-1px(0,0,1px,0);
          .item{
            width: 33.9999%;
            padding:0 pxToRem(3);
            .imgWrapper{
              box-sizing: border-box;
            }
            .info{
              padding: pxToRem(7) 0;
              line-height: pxToRem(17);
              .desc{
                font-size: pxToRem(15);
                color: #050505;
              }
              .oddDetail{
                font-size: pxToRem(12);
                color: #b5b4b4;
              }
              .price{
                font-size: pxToRem(13);
                color: $defaultColor;
              }
            }
          }
        }
        .more{
          padding-top: pxToRem(16);
          padding-bottom: pxToRem(16);
          font-size: pxToRem(15);
          text-align: center;
          color: #ff5513;
        }
      }
      .leisure-list{
        .list-item {
          .top {
            display: flex;
            position: relative;
            margin: 0 pxToRem(12);
            padding: pxToRem(12) 0;
            @include border-1px(0px, 0px, 1px, 0px);
            .image-wrapper {
              width: pxToRem(80);
              height: pxToRem(80);
              margin-right: pxToRem(10);
              img {
                display: block;
                width: 100%;
              }
            }
            .content {
              flex: 1;
              position: relative;
              .item-name {
                font-size: pxToRem(16);
                color: #646464;
              }
              .item-star {
                margin: pxToRem(18) 0;
                font-size: pxToRem(12);
                color: #969696;
              }
              .price {
                font-weight: 700;
                font-size: 0;
                .yuan {
                  font-size: pxToRem(16);
                  font-style: normal;
                  font-weight: normal;
                }
                .yuan1 {
                  font-size: pxToRem(12);
                  font-style: normal;
                  font-weight: normal;
                }
                .new {
                  font-size: pxToRem(16);
                  vertical-align: sub;
                  color: #ff9d00;
                }
                .old {
                  font-size: pxToRem(12);
                  vertical-align: sub;
                  color: #969696;
                }
              }
              .rang {
                position: absolute;
                right: 0;
                top: 0;
                .num {
                  font-size: pxToRem(12);
                  color: #969696;
                }
              }
            }
          }
          .bottom{
            .team{
              .team-list{
                .team-item{
                  display: flex;
                  position: relative;
                  margin:0 pxToRem(15);
                  padding: pxToRem(15) 0;
                  align-items: center;
                  font-size: pxToRem(15);
                  @include border-1px(0,0,1px,0);
                  .team-price{
                      color: $defaultColor;
                  }
                  .team-desc{
                    margin-left: pxToRem(10);
                    color: #646464;
                  }
                }
              }
              .more{
                position: relative;
                padding-top: pxToRem(16);
                padding-bottom: pxToRem(16);
                font-size: pxToRem(15);
                text-align: center;
                color: #ff5513;
                @include border-1px(0,0,1px,0);
              }
            }
          }
        }
      }
    }
  }
  .scroll{
    margin-top: pxToRem(45);
  }
</style>
