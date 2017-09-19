<template>
  <div class="order-index">
    <div class="header">
      <MHeader>团购订单</MHeader>
    </div>
    <div class="order-nav">
      <ul class="list" ref="listWrapper">
        <li class="item" v-for="(item,index) in titles" @click="toggle(index)"
            ref="itemWrapper" :class="{'active':index===currentIndex}">
          <span class="title">{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="order-content">
      <div class="order-list">
        <div class="order-item hotel" v-for="item in normalOrderList">
          <div class="imgWrapper">
            <img src="./like_1.jpg" alt="">
          </div>
          <div class="con">
            <div class="name">XX快捷酒店</div>
            <div class="param common">
              <span class="num">一间</span>
              <span class="type">商务大床</span>
            </div>
            <div class="time common">
              06月27日-06月28日
            </div>
            <div class="totalPrice">
              总价：138
            </div>
          </div>
          <div class="deal" >
              <span class="fin" v-if="item.type==1">
                  未支付
              </span>
            <span class="fin" v-if="item.type==3">
                  已完成
              </span>
            <span class="fin" v-if="item.type==2">
                  待试用
              </span>
          </div>
          <template v-if="item.type===1">
            <div class="cancel-pay text">
              <span class="cancel-order">取消订单</span><span class="pay">付款</span>
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
</template>

<script>
  import MHeader from "base/m-header/m-header";
  export default{
    data(){
      return {
        normalOrderList:[],
        orderList:[
          {
            type:3,
            rating:1
          },{
            type:2,
            rating:2
          },{
            type:3,
            rating:2
          },{
            type:1,
            rating:2
          }
        ],
        currentIndex:0,
        titles:['全部','待付款','待使用','待评价']
      }
    },
    created(){
      this.normalOrderList=this.orderList;
    },
    methods:{
      toggle(index){
        this.currentIndex=index;
        this.normalOrderList=this.orderList;
        if(index===1){
          this.normalOrderList=this.orderList.filter((item)=>{
            return item.type===1;
          })
        }
        else if(index===2){
          this.normalOrderList=this.orderList.filter((item)=>{
            return item.type===2;
          })
        }
        else if(index===3){
          this.normalOrderList=this.orderList.filter((item)=>{
            return item.rating===1;
          })
        }
      }
    },
    components:{
      MHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .order-index{
    .header{
      background: #ffac29;
    }
    .order-nav{
      .list {
        position: relative;
        display: flex;
        height: 1.06rem;
        justify-content: center;
        align-items: center;
        @include border-1px(1px, 0px, 1px, 0px);
        .item {
          flex: 1;
          position: relative;
          text-align: center;
          font-size: pxToRem(14);
          color: #969696;
          @include border-1px(0px, 1px, 0px, 0px);
          &:last-child {
            @include border-none();
          }
          .title {
            display: inline-block;
            height: pxToRem(16);
            max-width: pxToRem(62);
            vertical-align:bottom;
            line-height: pxToRem(16);
          }
          &.active {
            .title{
              position: relative;
              color: $defaultColor;
              &:after{
                position: absolute;
                bottom: pxToRem(-5);
                left: 0;
                display: inline-block;
                height: pxToRem(1);
                width: 100%;
                background: $defaultColor;
                content: '';
                z-index: 99;
              }
            }
          }
        }
      }
    }
    .order-content{
      .order-list{
        .order-item{
          display: flex;
          position: relative;
          padding: pxToRem(11) pxToRem(15);
          @include border-1px(0,0,1px,0);
          .imgWrapper{
            margin-right: pxToRem(9);
            height: pxToRem(80);
            width: pxToRem(80);
            img{
              display: block;
              height: 100%;
              width: 100%;
            }
          }
          .con{
            flex:1;
            .common{
              line-height: pxToRem(18);
              font-size: pxToRem(11);
              color: #737373;
            }
            .name{
              font-size: pxToRem(15);
              color: #000;
              margin-bottom: pxToRem(4);
            }
            .totalPrice{
              margin-top: pxToRem(8);
              font-size: pxToRem(15);
              color: #737373;
            }
          }
          .text{
            position: absolute;
            right: pxToRem(15);
            bottom: pxToRem(13);
            font-size: pxToRem(9);
            color: $defaultColor;
          }
          .cancel-pay{
            .cancel-order{
              margin-right:pxToRem(10) ;
            }
            span{
              display: inline-block;
              height: pxToRem(20);
              line-height: pxToRem(20);
              padding: 0 pxToRem(7);
              border-radius: pxToRem(20);
              box-sizing: border-box;
              border: 1px solid $defaultColor;
            }
          }
          .ratingWrapper{
            span{
              display: inline-block;
              height: pxToRem(20);
              line-height: pxToRem(20);
              padding: 0 pxToRem(7);
              border-radius: pxToRem(20);
              box-sizing: border-box;
              border: 1px solid $defaultColor;
            }
          }
          .deal{
            position: absolute;
            right: pxToRem(15);
            top: pxToRem(13);
            font-size: pxToRem(12);
            color: #ff4800;
          }
        }
      }
    }
  }
</style>
