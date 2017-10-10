<template>
  <div class="order-index">
    <MHeader>我的订单</MHeader>
    <div class="order-nav">
      <ul class="list" ref="listWrapper">
        <li class="item" v-for="(item,index) in titles" @click="toggle(index)"
            ref="itemWrapper" :class="{'active':index===currentIndex}">
          <span class="title">{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="order-content">
        <div class="order-list">
          <div class="order-item hotel" v-for="item in normalOrderList">
            <div class="imgWrapper">
              <img src="./like_1.jpg" alt="">
            </div>
            <div class="con">
              <div class="name">翠安茶餐厅单人套餐</div>
              <div class="time common">
                有效期至：2017-12-31
              </div>
              <div class="count common">
                数量：1
              </div>
              <div class="totalPrice common">
                总价：￥138
              </div>
            </div>
            <div class="deal">
              <span class="fin" v-if="item.type==1">
                  未支付
              </span>
              <span class="fin" v-if="item.type==3">
                  已完成
              </span>
              <span class="fin" v-if="item.type==2">
                  待消费
              </span>
              <span class="fin" v-if="item.type==4">
                  已退款
              </span>
            </div>
            <template v-if="item.type===1">
              <div class="cancel-pay text">
                <span class="cancel-order">取消订单</span><span class="pay">付款</span>
              </div>
            </template>
            <template v-if="item.type===2">
              <div class="check-roll-wrapper text">
                <span class="check-roll">查看卷码</span>
              </div>
            </template>
            <template v-else-if="item.type===3 && item.rating===1">
              <div class="ratingWrapper text">
                <span class="rating">评价</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from "base/m-header/m-header";
  import {getOrder} from "common/js/getData"

  export default {
    data() {
      return {
        normalOrderList: [],
        orderList: [
          {
            type: 3,
            rating: 1
          }, {
            type: 2,
            rating: 2
          }, {
            type: 3,
            rating: 2
          }, {
            type: 1,
            rating: 2
          }, {
            type: 4,
            rating: 2
          }, {
            type: 4,
            rating: 2
          }, {
            type: 4,
            rating: 2
          }, {
            type: 4,
            rating: 2
          }, {
            type: 4,
            rating: 2
          }
        ],
        currentIndex: 0,
        titles: ['全部', '待付款', '待使用', '待评价', '退款/售后']
      }
    },
    created() {
      getOrder.then((res) => {
        console.log(res);
      });
      this.normalOrderList = this.orderList;
    },
    methods: {
      toggle(index) {
        this.currentIndex = index;
        this.normalOrderList = this.orderList;
        if (index === 1) {
          this.normalOrderList = this.orderList.filter((item) => {
            return item.type === 1;
          })
        }
        else if (index === 2) {
          this.normalOrderList = this.orderList.filter((item) => {
            return item.type === 2;
          })
        }
        else if (index === 3) {
          this.normalOrderList = this.orderList.filter((item) => {
            return item.rating === 1;
          })
        }
        else if (index === 4) {
          this.normalOrderList = this.orderList.filter((item) => {
            return item.type === 4;
          })
        }
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .order-index {
    .order-nav {
      width: 100%;
      height: pxToRem(36);
      .list {
        position: fixed;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: #fff;
        @include border-1px(1px, 0px, 1px, 0px);
        .item {
          flex: 1;
          text-align: center;
          font-size: pxToRem(14);
          color: #969696;
          box-sizing: border-box;
          .title {
            display: inline-block;
            position: relative;
            padding: pxToRem(10) 0;
            width: 100%;
            vertical-align: bottom;
          }
          &.active {
            .title {
              color: #000;
              &:after {
                display: block;
                position: absolute;
                height: pxToRem(3);
                width: pxToRem(55);
                bottom: pxToRem(0);
                left: pxToRem(10);
                content: '';
                background: $defaultColor;
                z-index: 99;
              }
            }
          }
        }
      }
    }
    .content {
      margin-top: pxToRem(8);
      .order-content {
        background: #fff;
        .order-list {
          .order-item {
            display: flex;
            position: relative;
            padding: pxToRem(10) pxToRem(14);
            @include border-1px(0, 0, 1px, 0);
            .imgWrapper {
              margin-right: pxToRem(9);
              height: pxToRem(47);
              width: pxToRem(47);
              img {
                display: block;
                height: 100%;
                width: 100%;
              }
            }
            .con {
              flex: 1;
              .common {
                margin-top: pxToRem(8);
                font-size: pxToRem(11);
                color: #777;
              }
              .name {
                font-size: pxToRem(13);
                color: #000;
              }
            }
            .text {
              position: absolute;
              right: pxToRem(15);
              bottom: pxToRem(13);
              font-size: pxToRem(11);
              color: $defaultColor;
            }
            .cancel-pay {
              .cancel-order {
                margin-right: pxToRem(10);
              }
              span {
                display: inline-block;
                height: pxToRem(20);
                line-height: pxToRem(20);
                padding: 0 pxToRem(7);
                border-radius: pxToRem(20);
                box-sizing: border-box;
                border: 1px solid $defaultColor;
              }
            }
            .check-roll-wrapper {
              .check-roll {
                display: inline-block;
                width: pxToRem(58);
                height: pxToRem(22);
                line-height: pxToRem(22);
                text-align: center;
                border: 1px solid #ff4800;
                font-size: pxToRem(11);
                color: #ff4800;
              }
            }
            .ratingWrapper {
              span {
                display: inline-block;
                height: pxToRem(20);
                line-height: pxToRem(20);
                padding: 0 pxToRem(7);
                border-radius: pxToRem(20);
                box-sizing: border-box;
                border: 1px solid $defaultColor;
              }
            }
            .deal {
              position: absolute;
              right: pxToRem(15);
              top: pxToRem(10);
              font-size: pxToRem(12);
              color: $defaultColor;
            }
          }
        }
      }
    }
  }
</style>
