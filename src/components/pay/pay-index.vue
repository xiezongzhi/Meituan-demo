<template>
  <div class="pay-index">
    <mHeader class="header">付款</mHeader>
    <div class="content">


    <div class="banner">
      <img src="./pay-banner.jpg" alt="" class="responsive">
    </div>
    <split></split>
    <div class="msg border-1px-bottom">
      <h3 class="title">奈九居酒屋</h3>
      <p class="text phone">电话：0756-633213</p>
      <p class="text adress">地址：岱山路70号乐士文化区4栋D101号D201号商铺</p>
    </div>
    <div class="pay-total">
      <input type="text" placeholder="消费总额：">
    </div>
    <div class="row">
      <a href="#">可抵用卷 (<span class="num">1</span>)</a>
    </div>
    <subButton class="pay">确认支付</subButton>
  </div>
  </div>

</template>

<script>
  import mHeader from "base/m-header/m-header.vue";
  import subButton from "base/sub-button/sub-button.vue";
  import split from 'base/split/split';
  export default{
      components:{
        split,
        mHeader,
        subButton
      }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
    .pay-index{
      position: fixed;
      top:0px;
      left:0px;
      height:100%;
      background: #fff;
      z-index: 999;
      overflow: auto;
      .header{;
          background: #ffa71d;
        }
      .msg{
        position: relative;
        padding: pxToRem(10) pxToRem(14);
        @include border-1px(0px,0px ,1px ,0px);
        .title{
          font-size: pxToRem(12);
          color: #646464;
          margin-bottom: pxToRem(6);
        }
        .text{
          line-height: pxToRem(24);
          font-size: pxToRem(12);
          color: #969696;
        }
      }
      .pay-total{
        padding: pxToRem(15);
        input{
          height: pxToRem(39);
          width: 100%;
          font-size: pxToRem(12);
          color: #646464;
          border: 1px solid #f21a0a;
          text-indent:pxToRem(20);
        }
      }
      .row{
        font-size: pxToRem(12);
        text-indent: pxToRem(29);
        text-decoration: underline;
        .num{
          color: red;
        }
      }
      .pay{
        padding:0 pxToRem(15);
        margin-top: pxToRem(100);
        margin-bottom: pxToRem(10);
        box-sizing: border-box;
      }
    }
</style>
