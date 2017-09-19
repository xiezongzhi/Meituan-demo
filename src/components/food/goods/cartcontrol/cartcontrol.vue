<template>
  <div class="cartcontrol">
    <transition name="fad-slide">
      <div class="cart-decrease  square" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)"><span
        class="iconfont icon-decrease"></span></div>
    </transition>
    <div class="cart-content" v-show="food.count">{{food.count}}</div>
    <div class="cart-add  square" @click.stop.prevent="addCart($event)"><span class="iconfont icon-add"></span></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {getGoodsDetail, getShopCart} from "common/js/getData";

  export default {
    data() {
      return {
        cartData: [],
        foodsArr:[]
      }
    },
    props: {
      id:{
      },
      goods:{},
      food: {
        type: Object
      },
      goodsArr:{
        type:Array
      },
      fo: {
        type: Object
      }
    },
    created(){
      this._getCartList();
    },
    methods: {
      foodsList(){

        console.log(this.foodsArr);
//        return foodsArr;
      },
      addCart(event) {
        this.$emit('add', event.target);
        this._setShopCart(1,this.id);
      },
      decreaseCart(event) {
        this.$emit('decrease', event.target);
        this._setShopCart(0);
      },
      _setShopCart(type) {
        getShopCart({
          mer_id: this.$route.query.mer_id,
          goods_id: this.food.goods_id,
          operating: type,
        }).then((res) => {
          for (var i in res) {
            if (this.$route.query.mer_id == res[i].mer_id) {
              if (res[i].goods_id === this.food.goods_id) {
                Vue.set(this.food, 'count', res[i].goods_num);
              }
            }
          }
        });
      },
      _getCartList(){
        getShopCart({
        }).then((res) => {
           for(var i=0,len=this.goodsArr.length;i<len;i++){
             for(var t in res){
               if(res[t].goods_id==this.goodsArr[i].goods_id){
//                 Vue.set(this.goodsArr[i], 'count', parseInt(res[t].goods_num));
                 for(var k=0,len=this.goods.length;k<len;k++){
                   for(var y=0,len=this.goods[k].foods.length;y<len;y++){
                     this.foodsArr.push(this.goods[k].foods[y])
                        console.log(res[i].goods_id)
                   }
                 }
               }
             }

           }
        });
      }
    },

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
