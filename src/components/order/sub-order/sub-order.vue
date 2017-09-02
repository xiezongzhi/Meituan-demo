<template>
  <div class="sub-order">
    <mHeader>希尔顿假日主题酒店</mHeader>
    <div class="content">
    <div class="order-msg">
      <div class="content">
        <h3 class="title">
          限量抢购商务大床房
        </h3>
        <div class="desc">
          <div class="desc-list">
            大床 | 有窗 | 不含早
          </div>
          <div class="detail">
            <a href="">
              房间详情 >
            </a>
          </div>
        </div>
        <div class="check">
          <div class="checkInOut">
            <span class="checkIn-time ">入住：6月29日（周五）</span>
            <span class="checkOut-time ">离店：6月29日（周六）</span>
          </div>
          <a class="revise" href="#" >修改></a>
        </div>
        <div class="people-msg">
          <p class="house-num"><span class="left">房间数</span> <span class="right">1间</span></p>
          <p class="checkIn-people"><span class="left">入住人</span> <span class="right">陈先生</span></p>
          <p class="phone"><span class="left">联系电话</span> <span class="right"> 12344556</span></p>
          <p class="arrive-time"><span class="left">预计到店</span> <span class="right">18:00 之前</span></p>
        </div>
        <div class="cancel-fee">
          <p class="cancel-content"><span class="left">去消费</span> <span class="num">￥7</span><span class="cancel">（取消最高付90%房费）</span>
            <input type="checkbox"></p>
        </div>
        <div class="price-total">
          总计：<span class="price">￥528</span>
        </div>
      </div>

    </div>
    <div class="img-wrapper">
      <img src="./wave.png" alt="" class="responsive">
    </div>

  </div>
    <subButton class="sub">提交订单</subButton>
  </div>
</template>

<script>
  import mHeader from "base/m-header/m-header.vue";
  import subButton from "base/sub-button/sub-button.vue";
  export default{
    components:{
      mHeader,
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .sub-order{
    height: 100%;
    background-image: url(./pay-1.jpg);
    background-attachment:fixed;
    background-repeat:repeat-x;
    background-position:center center;
    background-size:100% ;
    .content{
      padding:0  pxToRem(15);
    }
    .order-msg{
      background: #fff;
      .content{
        padding: pxToRem(17) pxToRem(5);
        margin: 0 pxToRem(10);
        .title{
          font-size: pxToRem(15);
          color: #505050;
        }
      }
      .desc{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: pxToRem(12);
        color: #505050;
        .desc-list{
          font-size: pxToRem(12);
        }
        .detail{
          font-size: pxToRem(11);
          color: #9b9b9b;
        }
      }
      .check {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: baseline;
        margin-top: pxToRem(13);
        padding-bottom: pxToRem(15);
        @include border-1px(0px ,0px,1px,0);
        .checkInOut {
          color: #505050;
          font-size: pxToRem(12);
        }
        .revise{
          font-size: pxToRem(11);
          color: #9b9b9b;
        }
      }
      .people-msg{
        position: relative;
        padding: pxToRem(12) 0;
        @include border-1px(0px ,0px,1px,0);
        p{
          margin-top: pxToRem(18);
          font-size: pxToRem(12);
          color: #505050;
          .left{
            display: inline-block;
            width: pxToRem(50);
          }
          .right{
            color: #9b9b9b;
            margin-left: pxToRem(10);
          }
          &:first-child{
            margin-top: 0;
          }
        }
      }
      .cancel-fee{
        position: relative;
        @include  border-1px(0px,0px,1px,0px);
        p{
          padding: pxToRem(18) 0;
          font-size: pxToRem(12);
          color: #505050;
          .left{
            display: inline-block;
            width:pxToRem(50);
          }
          .num{
            margin-left: pxToRem(10);
            color:#ffac29 ;
          }
          .cancel{
            color: #9b9b9b;
          }
          input{
            float: right;
          }
        }
      }
      .price-total{
        margin-top:pxToRem(18) ;
        text-align: right;
        font-size: pxToRem(12);
        color: #9b9b9b;
        .price{
          font-size: pxToRem(16);
          color: #ff4800;
        }
      }
    }
    .img-wrapper{
      margin-top:pxToRem(-2);
    }
  }
  .sub{

    padding:0 pxToRem(15);
    margin-top: pxToRem(120);
    margin-bottom: pxToRem(20);
    box-sizing: border-box;
  }
</style>
