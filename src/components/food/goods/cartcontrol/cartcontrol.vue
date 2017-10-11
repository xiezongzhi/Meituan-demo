<template>
  <div class="cartcontrol">
    <transition name="fad-slide">
      <div class="cart-decrease  square" v-show="food.count" @click.stop.prevent="decreaseCart($event)"><span
        class="iconfont icon-decrease"></span></div>

    </transition>
    <div class="cart-content" v-show="food.count">{{food.count}}</div>
    <div class="cart-add  square" @click.stop.prevent="addCart($event)"><span
      class="iconfont icon-add"></span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {getGoodsDetail, getShopCart} from "common/js/getData";

  let arr = [];
  let flag = false;
  let flag1 = false;
  export default {
    data() {
      return {
        cartData: [],
        foodsArr: [],
        count: this.food.count
      }
    },
    props: {
      food: {
        type: Object
      }
    },
    watch: {
      count() {
        console.log('chang')
      }
    },
    created() {
      this._getCartList();
    },
    methods: {
      addCart() {
        this._setShopCart(1);
      },
      decreaseCart(event) {
        this.$emit('decrease', event.target);
        this._setShopCart(0);
      },
      _setShopCart(type) {
        if (!flag1) {
          flag1 = true;
          getShopCart({
            mer_id: this.$route.query.mer_id,
            goods_id: this.food.goods_id,
            operating: type,
          }).then((res) => {
            Vue.set(this.food, 'count', 0);
            for (var i in res) {
              if (this.$route.query.mer_id == res[i].mer_id) {
                if (res[i].goods_id == this.food.goods_id) {
                  Vue.set(this.food, 'count', res[i].goods_num);
                }
              }
            }
            flag1 = false;
          });
        }
      },
      _getCartList() {
        arr.push(this.food);
        if (!flag) {
          flag = true;
          getShopCart().then((res) => {
            for (var t in res) {
              for (var i = 0, len = arr.length; i < len; i++) {
                if (this.$route.query.mer_id == res[t].mer_id) {
                  if (t === arr[i].goods_id) {
                    Vue.set(arr[i], 'count', res[t].goods_num);
                  }
                }
              }
            }
            flag = false;
          });
        }
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../../common/style/base.scss';

  .cartcontrol {
    font-size: 0px;
    .cart-decrease,
    .cart-add {
      display: inline-block;
      width: pxToRem(20);
      height: pxToRem(20);
      line-height: pxToRem(23);
      text-align: center;
      font-size: pxToRem(16);
      border-radius: pxToRem(4);
      background: #ffa71d;
    }
    .cart-add {
      background: #ffa71d;
      border: pxToRem(1) solid #ffa71d;
      color: #946111;
    }
    .cart-decrease {
      background: #fff;
      border: pxToRem(1) solid #ddd;
    }
    .cart-decrease {
      &.fad-slide-enter-active,
      &.fad-slide-leave-active {
        transition: all .3s linear;
      }
      &.fad-slide-enter,
      &.fad-slide-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
      }
    }
    .cart-content {
      display: inline-block;
      vertical-align: top;
      width: pxToRem(20);
      height: pxToRem(20);
      line-height: pxToRem(22);
      text-align: center;
      font-size: pxToRem(12);
      color: rgb(147, 153, 159);
    }
    .cart-add {
      z-index: 999;
    }
    .cart-decrease {
      z-index: 9;
    }
  }
</style>
