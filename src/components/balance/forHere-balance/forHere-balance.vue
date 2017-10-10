<template>
  <div class="forHere-balance">
      <mHeader>速食快餐</mHeader>
    <div class="content">
      <div class="selected-cart">
        <div class="cart-list">
          <div class="cart-item">
            <div class="imgWrapper">
              <img src="./order-1.jpg" alt="" class="responsive">
            </div>
            <div class="con">
              <div class="name-price-wrapper">
                <span class="name">大份黄焖鸡</span>
                <span class="price">￥123</span>
              </div>
              <div class="count-wrapper">
                <span class="text">数量</span><span class="count">x2</span>
              </div>
            </div>
          </div>
          <div class="cart-item">
            <div class="imgWrapper">
              <img src="./order-1.jpg" alt="" class="responsive">
            </div>
            <div class="con">
              <div class="name-price-wrapper">
                <span class="name">大份黄焖鸡</span>
                <span class="price">￥123</span>
              </div>
              <div class="count-wrapper">
                <span class="text">数量</span><span class="count">x2</span>
              </div>
            </div>
          </div>
          <div class="cart-item">
            <div class="imgWrapper">
              <img src="./order-1.jpg" alt="" class="responsive">
            </div>
            <div class="con">
              <div class="name-price-wrapper">
                <span class="name">大份黄焖鸡</span>
                <span class="price">￥123</span>
              </div>
              <div class="count-wrapper">
                <span class="text">数量</span><span class="count">x2</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="total-price">
        <span class="text">总计</span><span class="total">￥72</span>
      </div>
      <div class="pay-content">
        <div class="pay-title">支付方式</div>
        <div class="pay-type-list">
          <div class="pay-type-item bank" @click="selectToggle($event)" type="bank">
            <div class="type ">
              <div class="left"><span class="bank-icon icon"> </span><span class="text">银行卡支付<span class="tips">随机立减(最高20元)</span></span>
              </div>
              <div class="right"><span class="iconfont icon-selectfill" :class="{'active':selectedIndex===0}"></span>
              </div>
            </div>
            <div class="info">信用卡储蓄卡付款，无需开通网银</div>
          </div>
          <div class="pay-type-item wechat" @click="selectToggle($event)" type="wechat">
            <div class="type">
              <div class="left"><span class="wechat-icon icon"> </span><span class="text">微信支付<span
                class="tips">抽小米手环</span></span></div>
              <div class="right"><span class="iconfont icon-selectfill" :class="{'active':selectedIndex===1}"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="other-type">
          查看更多支付方式 <span class="iconfont icon-bottom"></span>
        </div>
      </div>
      <div class="sub">
        <subButton>确认支付￥300</subButton>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import subButton from 'base/sub-button/sub-button';

  export default {
    data() {
      return {
        selectedIndex: 0,
        payType: ''
      }
    },
    methods: {
      selectToggle(event) {
        let currentDom = event.currentTarget;
        if (currentDom.getAttribute('type') === 'bank') {
          this.selectedIndex = 0;
        }
        else if (currentDom.getAttribute('type') === 'wechat') {
          this.selectedIndex = 1;
        }
        this.payType = currentDom.getAttribute('type');
        console.log(this.payType);
      }
    },
    components: {
      mHeader,
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .forHere-balance {
    .content {
      .selected-cart {
        background: #fff;
        .cart-list {
          .cart-item {
            position: relative;
            display: flex;
            padding: pxToRem(12) pxToRem(20);
            @include border-1px(0, 0, 1px, 0);
            .imgWrapper {
              height: pxToRem(78);
              width: pxToRem(78);
            }
            .con {
              flex: 1;
              margin-left: pxToRem(13);
              .name-price-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .name {
                  font-size: pxToRem(15);
                  line-height: pxToRem(16);
                  color: #000;
                }
                .price {
                  font-size: pxToRem(14);
                  color: #777;
                }
              }
              .count-wrapper {
                display: flex;
                margin-top: pxToRem(14);
                align-items: center;
                justify-content: space-between;
                font-size: pxToRem(13);
                color: #777;
              }
            }
          }
        }
      }
      .total-price {
        display: flex;
        height: pxToRem(45);
        padding: 0 pxToRem(19);
        margin: pxToRem(12) 0;
        line-height: pxToRem(45);
        align-items: center;
        justify-content: space-between;
        background: #fff;
        .text {
          font-size: pxToRem(14);
          color: #777;
        }
        .total {
          font-size: pxToRem(15);
          color: #ff5a26;
        }
      }
      .pay-content {
        background: #fff;
        .pay-title {
          position: relative;
          padding-top: pxToRem(3);
          height: pxToRem(30);
          line-height: pxToRem(30);
          text-indent: pxToRem(19);
          font-size: pxToRem(13);
          color: #777;
          @include border-1px(0, 0, 1px, 0);
        }
        .pay-type-list {
          position: relative;
          padding: 0 pxToRem(19);
          @include border-1px(0, 0, 1px, 0);
          .active {
            color: $defaultColor;
          }
          .type {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
              display: flex;
              align-items: center;
            }
            .right {
              font-size: pxToRem(20);
            }
          }
          .tips {
            display: inline-block;
            height: pxToRem(14);
            padding: 0 pxToRem(4);
            margin-left: pxToRem(5);
            border-radius: pxToRem(8);
            font-size: pxToRem(10);
            line-height: pxToRem(16);
          }
          .text {
            font-size: pxToRem(12);
            color: #585858;
          }
          .pay-type-item.bank {
            position: relative;
            padding: pxToRem(10) 0;
            @include border-1px(0, 0, 1px, 0);
            .type {
              .bank-icon {
                display: inline-block;
                height: pxToRem(15);
                width: pxToRem(24);
                margin-right: pxToRem(10);
                background: url("bank-icon.png") no-repeat center center;
                background-size: pxToRem(24) pxToRem(15);
              }
              .text {
                .tips {
                  color: #ff9a83;
                  border: 1px solid #ff7958;
                }
              }
            }
            .info {
              margin-top: pxToRem(6);
              margin-left: pxToRem(35);
              font-size: pxToRem(10);
              color: #777;
            }

          }
          .pay-type-item.wechat {
            padding: pxToRem(10) 0;
            .type {
              .wechat-icon {
                display: inline-block;
                height: pxToRem(19);
                width: pxToRem(24);
                margin-right: pxToRem(10);
                background: url("wechat-icon.png") no-repeat center center;
                background-size: pxToRem(21) pxToRem(19);
              }
              .text {
                .tips {
                  border: 1px solid $defaultColor;
                  color: $defaultColor;
                }
              }
            }
          }

        }
        .other-type {
          height: pxToRem(44);
          line-height: pxToRem(44);
          text-align: center;
          font-size: pxToRem(13);
          color: #777;
        }
      }
      .sub {
        width: pxToRem(345);
        padding: pxToRem(90) 0 pxToRem(70) 0;
        margin: 0 auto;
      }
    }
  }
</style>
