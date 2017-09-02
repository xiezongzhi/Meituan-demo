<template>
  <div class="pay-type">
    <mHeader class="header">希尔顿假日主题酒店</mHeader>
    <advert :imgUrl="src" :linkUrl="link"></advert>
    <div class="content">
      <div class="surplus-time">
        <p class="text">支付剩余时间</p>
        <p class="time">25：30</p>
      </div>
      <div class="type-msg">
        <div class="top">
          <h3 class="title">
            限量抢购商务大床房
          </h3>
          <div class="check">
            <div class="checkInOut">
              <span class="checkIn-time ">入住：6月29日（周五）</span>
              <span class="checkOut-time ">离店：6月29日（周六）</span>
            </div>
          </div>
          <div class="price-total">
            总计：<span class="price">￥528</span>
          </div>
        </div>
        <div class="bottom">
          <div class="type">
              <h3 class="type-title">支付方式</h3>
            <div class="pay-list">
              <p class="pay-item" @click="toggle($event)" type="ali"><span class="left" ><img src="./ali.png" alt=""><span class="name ">支付宝支付</span></span><span class="iconfont icon-selectfill right active" ></span></p>
              <p class="pay-item" @click="toggle($event)" type="chart" ><span class="left"><img src="./chart.png" alt=""><span class="name">微信支付</span></span><span class="iconfont icon-selectfill right"></span></p>
              <p class="pay-item" @click="toggle($event)" type="bank"><span class="left" ><img src="./bank.png" alt=""><span class="name">银行支付</span></span><span class="iconfont icon-selectfill right"></span></p>
              <p class="pay-item" @click="bankSelect($event)"><span class="left" ><span class="name spec">交通银行信用卡</span></span><span class=" right r" >></span></p>
            </div>
          </div>
        </div>


      </div>

      <div class="img-wrapper">
        <img src="./wave1.png" alt="" class="responsive">
      </div>

    </div>
    <div class="sub" @click="_submit">
      <subButton >确认支付￥888</subButton>
    </div>
    <listHeader :titles="names" :top="50" ref="listHeader">
      <div @click="hide">sdfsdf</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </listHeader>
  </div>
</template>

<script>
  import mHeader from "base/m-header/m-header.vue";
  import listHeader from "base/list-header/list-header.vue";
  import subButton from "base/sub-button/sub-button.vue";
  import advert from "base/advert/advert.vue";
  import $ from 'jquery';
  export default{
    data(){
      return {
        src: require('common/image/1.jpg'),
        link: 'https://www.baidu.com',
        payType:'ali',
        names:[1,2,3,4]
      }
    },
       methods:{
        hide(){
            this.$refs.listHeader._hide();
        },
        toggle(e){
            let obj=e.currentTarget;
           this.removeClass();
           this.payType=$(obj).attr('type');
           $(obj).find('.right').eq(0).addClass('active');
        },
         bankSelect(){
            this.bankNum=123123;
         },
         removeClass(){
             $('.right').removeClass('active');
         },
           _submit(){
             if(this.payType=='bank'){
                 console.log(this.bankNum);
             }
             console.log(this.payType);
         }
      },
    components:{
      mHeader,
      subButton,
      advert,
      listHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base';
  .pay-type{
    height:100%;
    background: #fff;
    .header{
      background: #ffa71d;
    }
    .content{
      padding: 0 pxToRem(15);
      .surplus-time{
        margin-bottom: pxToRem(8);
        text-align: center;
        line-height:pxToRem(28);
        .text{
          font-size:pxToRem(12);
          color: #505050;
        }
        .time{
          font-size:pxToRem(16);
          color: #505050;
        }
      }
      .type-msg{
        position: relative;
        padding: pxToRem(13) pxToRem(7);
        box-shadow: 0 0 9px #eee;
        @include border-1px(1px,1px,0px,1px);
        .top {
          padding: 0 pxToRem(9);
          padding-bottom: pxToRem(18);

          .title{
            font-size: pxToRem(15);
            color: #505050;
          }
          position: relative;
          @include border-1px(0px, 0px, 1px, 0);
          .check {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: baseline;
            margin-top: pxToRem(13);
            .checkInOut {
              color: #505050;
              font-size: pxToRem(12);
            }
          }
          .price-total {
            margin-top: pxToRem(23);
            text-align: right;
            font-size: pxToRem(12);
            color: #9b9b9b;
            .price {
              font-size: pxToRem(16);
              color: #ff4800;
            }

          }
        }
        .bottom{
          padding: pxToRem(10) pxToRem(9);
          .type{
            font:pxToRem(12);
            color: #505050;
            .type-title{
            }
            .pay-list{
              padding-top: pxToRem(10);
              .pay-item{
                display: flex;
                padding: pxToRem(12) 0;
                justify-content: space-between;
                align-items: center;
                .left{
                  img{
                    margin-right: pxToRem(19);
                    width: pxToRem(22);
                    height:pxToRem(20);
                    vertical-align: middle;
                  }
                  .spec{
                    margin-left: pxToRem(41);
                  }
                }
                .right{
                  font-size:pxToRem(20);
                  color: #d2d2d2;
                  &.r{
                    margin-right: pxToRem(4);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .img-wrapper{
    margin-top:pxToRem(-7);
  }
  .pay{
    margin-top:pxToRem(60);
    margin-bottom: pxToRem(10);
    box-sizing: border-box;
    padding:0 pxToRem(15);
    left:0;
  }
  .active{
    color: #ffa71d !important;
  }
</style>
