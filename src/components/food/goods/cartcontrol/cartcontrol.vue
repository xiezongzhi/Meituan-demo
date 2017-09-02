<template>
    <div class="cartcontrol">
        <transition name="fad-slide">
            <div class="cart-decrease  square" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)"><span class="iconfont icon-decrease"></span></div>
        </transition>
        <div class="cart-content" v-show="food.count">{{food.count}}</div>
        <div class="cart-add  square" @click.stop.prevent="addCart($event)"><span class="iconfont icon-add"></span></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        props: {
            food: {
                type: Object
            },
            fo:{
              type: Object
            }
        },

        methods: {
            addCart(event) {
              if (!this.fo.count) {
                Vue.set(this.fo, 'count', 1);
              }
              else {
                this.fo.count++;
              }

              if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
                this.$emit('add', event.target);
            },
            decreaseCart(event) {
                if (this.food.count > 0) {
                    this.food.count--;
                }
                if (this.fo.count > 0) {
                     this.fo.count--;
              }
            }
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
          height:pxToRem(20);
          line-height:pxToRem(23);
          text-align: center;
          font-size: pxToRem(16);
          border-radius:pxToRem(4);
          background: #ffa71d;
        }
      .cart-add {
        background: #ffa71d;
        border:pxToRem(1) solid #ffa71d;
        color:#946111;
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
            height:pxToRem(20);
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
