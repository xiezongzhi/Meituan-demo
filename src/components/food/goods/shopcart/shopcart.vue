<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper" @click="toggleList">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <span class="iconfont icon-shop" :class="{'highlight':totalCount>0}"></span>
              <div class="num" v-show="totalCount>0">
                {{totalCount}}
              </div>
            </div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">
            ￥{{totalPrice}}元
          </div>
          <div class="desc">
            另需配送费￥{{deliveryPrice}}元
          </div>
        </div>
        <div class="content-right" @click="payMoney">
          <div class="pay" :class="[isEnough ? 'enough' : 'not-enough']">{{payDesc}}</div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="ball in balls">
          <transition name="drop" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="leave">
            <div v-show="ball.show" class="ball">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="foldtransition">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <div class="list-count"></div>
            <h1 class="title">购物车</h1>
            <span class="empty" @click="emptyList">清空</span>
          </div>
          <div class="list-content border-1px" ref="listWrapper">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price * food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" ></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="maskFade">
      <div class="list-mask" v-show="listShow" @click="hideList"></div>
    </transition>
  </div>
</template>

<script>
  import cartcontrol from '../cartcontrol/cartcontrol';
  import BScroll from 'better-scroll';
  import {addOrder} from 'common/js/getData'
  export default {
    props: {
      orderData:{
        type:Object
      },
      selectFoods: {
        type: Array,
        default () {
          return [{
            price: 10,
            count: 4
          }];
        }
      },
      selectFo: {
        type: Array,
        default () {
          return [{
            price: 10,
            count: 4
          }];
        }
      },
      deliveryPrice: {
        type: Number

      },
      minPrice: {
        type: Number
      },
      pay: {
        type: Number
      }
    },
    data() {
      return {
        balls: [{
          show: false
        },
          {
            show: false
          }, {
            show: false
          }, {
            show: false
          }, {
            show: false
          }, {
            show: false
          },
        ],
        dropBalls: [],
        flod: true
      }
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      payDesc() {
          return '去结算'
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      isEnough() {
        if (this.totalPrice > 0) {
          return true;
        } else {
          return false;
        }
      },
      listShow() {
        if (!this.totalCount) {
          this.flod = true;
          return false;
        }
        let show = !this.flod;
        if (show) {
          if (!this.listScoll) {
            this.$nextTick(() => {
              this._initScoll()
            })
          } else {
            this.$nextTick(() => {
              this.listScoll.refresh();
            })
          }
        }
        return show
      }
    },
    methods: {
      drop(el) {
        for (let i = 0, ballsLen = this.balls.length; i < ballsLen; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeEnter(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter(el, done) {
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.display = '';
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
          el.addEventListener('transitionend', done);
        });
      },
      leave(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      },
      toggleList() {
        if (!this.totalCount) {
          return;
        } else {
          this.flod = !this.flod;
        }
      },
      _initScoll() {
        this.listScoll = new BScroll(this.$refs.listWrapper, {
          click: true,
        })
      },
      emptyList() {
        if (window.confirm('确定清空购物车？')) {
          this.selectFoods.forEach((food) => {
            food.count = 0;
          });
          this.selectFo.forEach((fo) => {
            fo.count = 0;
          });
          this.flod = false;
        }
      },
      hideList() {
        this.flod = true;
      },
      payMoney() {
        addOrder(
          this.orderData
        ).then(()=>{
          console.log(this.orderData)
        });
        if (this.totalPrice >= this.minPrice) {
          alert('需支付' + this.totalPrice + '元')
        }
      }
    },
    components: {
      cartcontrol
    }
  }
</script>

<style lang="scss">
  @import '../../../../common/style/base.scss';

  .shopcart {
    position: fixed;
    left: pxToRem(0);
    bottom: pxToRem(0);
    z-index: 50;
    height: pxToRem(48);
    width: 100%;
    box-shadow: 0 0 pxToRem(10) pxToRem(6) #eee;
    .content {
      display: flex;
      height: pxToRem(48);
      font-size: pxToRem(0);
      color: rgba(255, 255, 255, 0.4);
      background: #fff;
      .content-left {
        flex: 1;
        position: relative;
        @include border-1px(1px, 0, 0, 0);
        .logo-wrapper {
          display: inline-block;
          vertical-align: top;
          position: relative;
          top: pxToRem(-10);
          margin: 0px pxToRem(12);
          box-sizing: border-box;
          z-index: 9;
          .logo {
            height: pxToRem(54);
            width: pxToRem(54);
            border-radius: 50%;
            text-align: center;
            background: #2b343c;
            &.highlight {
              background: #ffa71d;
            }
            .icon-shop {
              font-size: pxToRem(26);
              color: #80858a;
              line-height: pxToRem(54);
              &.highlight {
                color: #fff;
              }
            }
            .num {
              position: absolute;
              right: 0px;
              top: 0px;
              height: pxToRem(16);
              width: pxToRem(16);
              line-height: pxToRem(16);
              text-align: center;
              font-size: pxToRem(9);
              font-weight: 700;
              color: #fff;
              border-radius: pxToRem(16);
              background: #ff4734;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
            }
          }
        }
        .price {
          display: inline-block;
          vertical-align: top;
          margin-top: pxToRem(12);
          padding-right: pxToRem(12);
          line-height: pxToRem(24);
          font-size: pxToRem(16);
          font-weight: 700;
          color: #ff6d34;
          border-right: pxToRem(1) solid rgba(255, 255, 255, 0.1);
          box-sizing: border-box;
          &.highlight {
            color: #ff6d34;
          }
        }
        .desc {
          color: #000;
          display: inline-block;
          vertical-align: top;
          margin: pxToRem(12) 0px 0px pxToRem(12);
          line-height: pxToRem(24);
          font-size: pxToRem(12);
        }
      }
      .content-right {
        flex: 0px 0px pxToRem(105);
        width: pxToRem(105);
        .pay {
          height: pxToRem(48);
          line-height: pxToRem(48);
          text-align: center;
          font-size: pxToRem(12);
          font-weight: 700;
          background: #2b343c;
          &.not-enough {
            background: #2b343c;
          }
          &.enough {
            background: #ffa71d;
            color: #fff;
          }
        }
      }
    }
    .ball-container {
      .ball {
        position: fixed;
        left: pxToRem(32);
        bottom: pxToRem(22);
        z-index: 200;
        transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        .inner {
          width: pxToRem(16);
          height: pxToRem(16);
          border-radius: 50%;
          background: #ffa71d;
          transition: all 0.6s linear;
        }
      }
    }
    .shopcart-list {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      width: 100%;
      transform: translate3d(0, -100%, 0);
      &.foldtransition-enter-active,
      &.foldtransition-leave-active {
        transition: transform 0.5s ease;
      }
      &.foldtransition-enter,
      &.foldtransition-leave-active {
        transform: translate3d(0, 0, 0);
      }
      .list-header {
        padding: 0 pxToRem(10);
        height: pxToRem(40);
        line-height: pxToRem(40);
        background: #f3f5f7;
        border-bottom: pxToRem(1) solid rgba(7, 17, 27, 0.1);
        .title {
          float: left;
          font-size: pxToRem(14);
          color: rgb(7, 17, 27);
        }
        .empty {
          float: right;
          font-size: pxToRem(12);
          color: rgb(0, 160, 220);
        }
      }
      .list-content {
        padding: 0 pxToRem(18);
        max-height: pxToRem(217);
        overflow: hidden;
        background: #fff;
        .food {
          position: relative;
          padding: pxToRem(12) 0px;
          box-sizing: border-box;
          @include border-1px(0, 0, 1px, 0);
          .name {
            line-height: pxToRem(24);
            font-size: pxToRem(14);
            color: rgb(7, 17, 27);
          }
          .price {
            position: absolute;
            right: pxToRem(90);
            bottom: pxToRem(12);
            line-height: pxToRem(24);
            font-size: pxToRem(14);
            font-weight: 700;
            color: #ff6d34;
          }
          .cartcontrol-wrapper {
            position: absolute;
            right: 0px;
            bottom: pxToRem(13);
          }
        }
      }
    }
  }

  .list-mask {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 40;
    background: rgba(0, 0, 0, 0.6);
    &.maskFade-enter-active,
    &.maskFade-leave-active {
      transition: opacity 0.5s ease;
    }
    &.maskFade-enter,
    &.maskFade-leave-active {
      opacity: 0;
    }
  }
</style>
