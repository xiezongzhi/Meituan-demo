<template>
  <div class="teamShop-index">
    <split1></split1>
    <div class="content">
      <div class="for-here" v-show="currentIndex===0">堂食</div>
      <div class="team-shop" v-show="currentIndex===1">
        <div class="seller-info">
          <div class="address">
            <span class="iconfont icon-locationa"></span>香洲区安富街45号
          </div>
          <div class="phone">
            <span class="iconfont icon-3-copy"></span>0756 - 5561234
          </div>
        </div>
        <div class="title"><span class="team-icon"></span><span class="text">堂食套餐</span></div>
        <Scroll :data="[]" class="scroll">
          <div class="team-shop-list">
            <div class="team-shop-item">
              <div class="item-info">
                <div class="imgWrapper"><img src="./team-1.jpg" alt=""></div>
                <div class="con">
                  <div class="name">精选优质单人套餐</div>
                  <div class="rang-time">周一至周五</div>
                  <div class="price">
                    <span class="now">￥18.8</span>
                    <span class="market">门市价￥28</span>
                  </div>
                </div>
              </div>
              <span class="iconfont icon-right arrow"></span>
            </div>
            <div class="team-shop-item">
              <div class="item-info">
                <div class="imgWrapper"><img src="./team-1.jpg" alt=""></div>
                <div class="con">
                  <div class="name">精选优质单人套餐</div>
                  <div class="rang-time">周一至周五</div>
                  <div class="price">
                    <span class="now">￥18.8</span>
                    <span class="market">门市价￥28</span>
                  </div>
                </div>
              </div>
              <span class="iconfont icon-right arrow"></span>
            </div>
          </div>
        </Scroll>
      </div>
      <div class="rating" v-show="currentIndex===2">评价</div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import Scroll from 'base/scroll/scroll';
  import split1 from 'base/split1';

  export default {
    data() {
      return {
        collectFlag: false,
        shareFlag: false,
        currentIndex: 1,
        collect: 'icon-collect',
        collected: 'icon-collect1',
        tabTitle: ['堂食', '团购', '评价']
      }
    },
    created() {
      this._getForHere();
    },
    methods: {
      _getForHere() {
        console.log('tangshi');
      },
      _getTeamShop() {
        console.log('tuangou');
      },
      _getRating() {
        console.log('pingjia');
      },
      toggleCollect() {
        this.collectFlag = !this.collectFlag;
      },
      toggleShare() {
        this.shareFlag = !this.shareFlag;
      },
      toggleTab(index) {
        this.currentIndex = index;
        switch (index) {
          case 0:
            this._getForHere();
            break;
          case 1:
            this._getTeamShop();
            break;
          case 2:
            this._getRating();
            break;
        }
      }
    },
    components: {
      mHeader,
      Scroll,
      split1
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .teamShop-index {
    height: 100%;;
    background: #eee;
    .content {
      .team-shop {
        .scroll {
          top: pxToRem(353);
          height: auto;
        }
        .seller-info {
          padding: pxToRem(10) pxToRem(20);
          margin-bottom: pxToRem(7);
          font-size: pxToRem(12);
          color: #000;
          background: #fff;
          .iconfont {
            margin-right: pxToRem(9);
            color: #bbb;
            font-size: pxToRem(13);
          }
          .phone {
            margin-top: pxToRem(11);
          }
        }
        .title {
          display: flex;
          padding-left: pxToRem(16);
          align-items: center;
          height: pxToRem(34);
          background: #fff;
          .text {
            font-size: pxToRem(14);
            color: #000;
          }
          .team-icon {
            display: block;
            width: pxToRem(20);
            height: pxToRem(20);
            margin-right: pxToRem(9);
            background: url("team-icon.png") no-repeat center center;
            background-size: pxToRem(19) pxToRem(19);
          }
        }
        .team-shop-list {
          padding: pxToRem(0) pxToRem(16);
          background: #fff;
          .team-shop-item {
            position: relative;
            padding: pxToRem(5) 0;
            .item-info {
              display: flex;
              .imgWrapper {
                margin-right: pxToRem(10);
                img {
                  height: pxToRem(52);
                  width: pxToRem(84);
                }
              }
              .con {
                flex: 1;
                .name {
                  font-size: pxToRem(13);
                  color: #000;
                }
                .rang-time {
                  margin: pxToRem(8) 0;
                  font-size: pxToRem(10);
                  color: #cacaca;
                }
                .price {
                  font-size: 0;
                  .now {
                    display: inline-block;
                    vertical-align: bottom;
                    margin-right: pxToRem(10);
                    color: #ff4800;
                    font-size: pxToRem(13);
                  }
                  .market {
                    font-size: pxToRem(10);
                    color: #cacaca;
                  }
                }
              }
            }
            .arrow {
              position: absolute;
              right: pxToRem(0);
              bottom: pxToRem(40);
              font-size: pxToRem(20);
            }
          }
        }
      }
    }
  }
</style>
