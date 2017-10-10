<template>
  <div class="teamOrder-detail-index">
      <MHeader>套餐详情</MHeader>
    <div class="content">
      <div class="combo-item">
        <div class="item-info">
          <div class="imgWrapper"><img src="./team-1.jpg" alt="" class="responsive"></div>
          <div class="con">
            <div class="name">精选优质单人套餐</div>
            <div class="price">
              <span class="now">￥18.8</span>
            </div>
          </div>
        </div>
        <span class="iconfont icon-right arrow"></span>
      </div>
      <div class="food-roll">
        <div class="top">
          <div class="name">精选优质单人套餐</div>
          <div class="rang-time">有效期至 : 2017-08-29</div>
          <div class="refunds">申请退款</div>
        </div>
        <div class="bottom">
          <span class="password">密码 : 4458 5677 8894</span><span class="not-consume">未消费</span>
        </div>
      </div>
      <div class="combo-select">
        <div class="big-title">
          套餐
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
        <div class="free-paper">
          <span class="circle"></span>免费提供餐巾纸
        </div>
      </div>
      <div class="order-info">
        <div class="title">订单信息</div>
        <ul class="info-list">
          <li class="info-item"><span class="left">订单号</span> ：<span class="right">3936739548</span></li>
          <li class="info-item"><span class="left">购买手机号</span> ：<span class="right">13543012345 </span></li>
          <li class="info-item"><span class="left">付款时间 </span> ：<span class="right">2017-08-29 </span></li>
          <li class="info-item"><span class="left">数量</span> ：<span class="right">1</span></li>
          <li class="info-item"><span class="left">总价</span> ：<span class="right">￥242</span></li>
          <li class="info-item"><span class="left">实付</span> ：<span class="right">￥242</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

  import MHeader from 'base/m-header/m-header';

  export default {
    components: {
      MHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .teamOrder-detail-index {
    .content {
      .combo-item {
        position: relative;
        padding: pxToRem(9) pxToRem(16);
        background: #fff;
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
              margin-top: pxToRem(5);
              font-size: pxToRem(13);
              color: #000;
            }
            .price {
              margin-top: pxToRem(12);
              font-size: 0;
              .now {
                display: inline-block;
                vertical-align: bottom;
                margin-right: pxToRem(10);
                color: #ff4800;
                font-size: pxToRem(13);
              }
            }
          }
        }
        .arrow {
          position: absolute;
          right: pxToRem(8);
          bottom: pxToRem(40);
          font-size: pxToRem(20);
        }
      }
      .food-roll {
        margin: pxToRem(9) 0;
        background: #fff;
        font-size: pxToRem(12);
        .top {
          position: relative;
          padding: pxToRem(10) pxToRem(15);
          color: #777;
          @include border-1px(0, 0, 1px, 0);
          .rang-time {
            margin-top: pxToRem(6);
          }
          .refunds {
            position: absolute;
            width: pxToRem(75);
            height: pxToRem(23);
            right: pxToRem(15);
            top: pxToRem(10);
            line-height: pxToRem(23);
            text-align: center;
            background: #f36a3f;
            color: #fff;
          }
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: pxToRem(34);
          line-height: pxToRem(34);
          padding: 0 pxToRem(33) 0 pxToRem(16);
          .password {
            color: #777;
          }
          .not-consume {
            color: #bad18f;
          }
        }
      }
      .combo-select {
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
                @include border-1px(0, 0, 1px, 0)
                span {
                  flex: 1;
                  text-align: center;
                }
              }
            }
          }
        }
        .free-paper {
          margin-left: pxToRem(18);
          height: pxToRem(29);
          line-height: pxToRem(29);
          color: #666;
          .circle {
            display: inline-block;
            margin-right: pxToRem(10);
            height: pxToRem(4);
            width: pxToRem(4);
            vertical-align: middle;
            border-radius: pxToRem(4);
            background: #666;
          }
        }
      }
      .order-info {
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
        .info-list {
          .info-item {
            line-height: pxToRem(20);
            font-size: pxToRem(11);
            color: #777;
            .left {
              display: inline-block;
              width: pxToRem(66);
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
