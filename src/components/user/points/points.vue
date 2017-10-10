<template>
  <div class="points">
    <mHeader>我的积分</mHeader>
    <div class="content">
      <div class="module">
        <div class="imgWrapper">
          <img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="" class="responsive">
        </div>
        <div class="con">
          <div class="name">翠安茶餐厅单人套餐</div>
          <div class="point"><span class="text">当前积分：</span><span class="num">150 分</span></div>
        </div>
      </div>
    </div>
    <div class="point-history">
      <div class="title">
        积分记录
      </div>
      <div class="history-list">
        <div class="history-item" v-for="item in pointHis">
          <div class="imgWrapper">
            <img :src="item.img" alt="" class="responsive">
          </div>
          <div class="con">
            <div class="top">
              <span class="name">{{item.name}}</span><span class="time">{{item.time}}</span>
            </div>
            <div class="bottom">
              <span class="seller">{{item.seller}}</span>
              <div class="num">
                <span v-if="item.point.type==='add'">
                  +{{item.point.num}}
                </span>
                <span v-else="item.point.type==='reduce'" style="color: #f58364">
                  -{{item.point.num}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';

  export default {
    data() {
      return {
        pointHis: [
          {
            img: 'http://img1.imgtn.bdimg.com/it/u=1847351322,812891497&fm=27&gp=0.jpg',
            name: "阿拉丁",
            time: '2017-06-29 09:29',
            seller: '小龙虾馆消费',
            point: {
              type: 'add',
              num: 150
            }
          },
          {
            img: 'http://pic.baike.soso.com/p/20131127/20131127112238-128295522.jpg',
            name: "小飞侠",
            time: '2017-06-29 09:29',
            seller: '小龙虾馆消费',
            point: {
              type: 'reduce',
              num: 50
            }
          }
        ]
      }
    },
    components: {
      mHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .points {
    .module {
      display: flex;
      position: relative;
      align-items: center;
      margin: pxToRem(8) 0;
      padding: pxToRem(14) pxToRem(12);
      background: #fff;
      @include border-1px(0, 0, 1px, 0);
      .imgWrapper {
        height: pxToRem(45);
        width: pxToRem(45);
        img {
          border-radius: 50%;
        }
      }
      .con {
        margin-left: pxToRem(9);
        flex: 1;
        .point {
          margin-top: pxToRem(9);
          .text {
            font-size: pxToRem(13);
            color: #777;
          }
          .num {
            font-size: pxToRem(15);
            color: $defaultColor;
          }
        }

        .name {
          font-size: pxToRem(13);
          color: #000;
        }
      }
    }
    .point-history {
      background: #fff;
      .title {
        position: relative;
        height: pxToRem(30);
        line-height: pxToRem(30);
        text-indent: pxToRem(15);
        font-size: pxToRem(13);
        color: #000;
        @include border-1px(0, 0, 1px, 0);
      }
      .history-list {
        .history-item {
          display: flex;
          position: relative;
          justify-content: space-between;
          padding: pxToRem(8) pxToRem(16) pxToRem(12) pxToRem(16);
          @include border-1px(0, 0, 1px, 0);
          .imgWrapper {
            margin-right: pxToRem(10);
            img {
              height: pxToRem(33);
              width: pxToRem(33);
              border-radius: 50%;
            }
          }
          .con {
            flex: 1;
            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: pxToRem(5);
              font-size: pxToRem(13);
              .name {
                color: #666;
              }
              .time {
                color: #aaa;
              }
            }
            .bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: pxToRem(15);
              font-size: pxToRem(13);
              .seller {
                color: #aaa;
              }
              .num {
                font-size: pxToRem(15);
                color: $defaultColor;
              }
            }
          }
        }
      }
    }
  }
</style>
