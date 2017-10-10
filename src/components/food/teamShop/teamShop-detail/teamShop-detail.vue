<template>
  <div class="teamShop-detail">
      <mHeader :isShareCollect="true">套餐详情</mHeader>
    <div class="content">
      <div class="ad">
        <div class="imgWrapper">
          <img src="./index-1.jpg" alt="" class="responsive">
        </div>
      </div>
      <div class="module">
        <div class="name">精选优质单人套餐</div>
        <div class="price-sell">
          <span class="price">￥18.8</span><span class="sell-count">已售221</span>
        </div>
        <div class="flash-sale">立即抢购</div>
      </div>
      <div class="combo-select">
        <div class="big-title">
          套餐内容
        </div>
        <ul class="combo-select-list">
          <li class="combo-select-item">
            <div class="small-title">
              主食五选一
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="combo-select-list">
          <li class="combo-select-item">
            <div class="small-title">
              主食五选一
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
            <div class="combo-info-list">
              <div class="combo-info-item">
                <span class="name">芝士肉酱意粉</span><span class="count">1份</span><span class="price">￥13</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="shop-know">
        <div class="title">购买须知</div>
        <dl class="know-item">
          <dt>有效期：</dt>
          <dd>2017.2.26 至 2017.9.29</dd>
        </dl>
        <dl class="know-item">
          <dt>不可用日期：</dt>
          <dd>周六至周日，法定节假日</dd>
        </dl>
        <dl class="know-item">
          <dt>预约提醒：</dt>
          <dd>本单无需预约</dd>
        </dl>
        <dl class="know-item last">
          <dt>温馨提示：</dt>
          <dd class="spec"><span class=" iconfont icon-circle"></span><span class="text">每桌不限美团券使用张数，不限就餐人数。</span></dd>
          <dd class="spec"><span class=" iconfont icon-circle"></span><span class="text">本单2张美团券起用，如单人用餐需加收锅底费。</span>
          </dd>
          <dd class="spec"><span class=" iconfont icon-circle"></span><span class="text">每超过1小时加收美团价的50%。</span></dd>
          <dd class="spec"><span class=" iconfont icon-circle"></span><span class="text">每桌用餐前收取20元/桌押金。</span></dd>
        </dl>
      </div>
    </div>

  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';

  export default {
    components: {
      mHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .teamShop-detail {
    .content {
      .ad {
        .imgWrapper {
          width: 100%;
          height: pxToRem(175);
          img {
            width: pxToRem(375);
            height: pxToRem(175);
          }
        }
      }
      .module {
        position: relative;
        background: #fff;
        padding: pxToRem(12) pxToRem(15);
        .name {
          font-size: pxToRem(15);
          color: #333;
        }
        .price-sell {
          display: flex;
          align-items: center;
          margin-top: pxToRem(10);
          .price {
            margin-right: pxToRem(16);
            font-size: pxToRem(15);
            color: #ff4800;
          }
          .sell-count {
            font-size: pxToRem(12);
            color: #777;
          }
        }
        .flash-sale {
          position: absolute;
          bottom: pxToRem(15);
          right: pxToRem(15);
          height: pxToRem(34);
          width: pxToRem(89);
          line-height: pxToRem(34);
          text-align: center;
          background: $defaultColor;
          color: #fff;
          font-size: pxToRem(15);
        }
      }
      .combo-select {
        margin-top: pxToRem(9);
        background: #fff;
        font-size: pxToRem(12);
        .big-title {
          height: pxToRem(33);
          line-height: pxToRem(34);
          color: #777;
          text-indent: pxToRem(16);
        }
        .combo-select-list {
          .combo-select-item {
            .small-title {
              height: pxToRem(31);
              line-height: pxToRem(32);
              background: #fdf2e0;
              text-align: center;
              color: #666;
            }
            .combo-info-list {
              .combo-info-item {
                display: flex;
                position: relative;
                align-items: center;
                height: pxToRem(29);
                color: #777;
                @include border-1px(0, 0, 1px, 0);
                span {
                  flex: 1;
                  text-align: center;
                }
              }
            }
          }
        }
      }
      .shop-know {
        padding-bottom: pxToRem(12);
        margin-top: pxToRem(9);
        background: #fff;
        .title {
          position: relative;
          padding: pxToRem(10) 0 pxToRem(8) 0;
          line-height: pxToRem(12);
          font-size: pxToRem(13);
          color: #666;
          text-indent: pxToRem(17);
          @include border-1px(0, 0, 1px, 0)
        }
        .know-item {
          padding: 0 pxToRem(16);
          margin-bottom: pxToRem(17);
          font-size: pxToRem(10);
          &:nth-of-type(1) {
            margin-top: pxToRem(8);
          }
          dt {
            color: $defaultColor;
          }
          dd {
            margin-top: pxToRem(8);
            text-indent: pxToRem(10);
            color: #777;
            &.spec {
              display: flex;
              align-items: center;
              .text {
                display: inline-block;
                vertical-align: middle;
                text-indent: pxToRem(8);
              }
            }
          }
        }
      }
    }

  }
</style>
