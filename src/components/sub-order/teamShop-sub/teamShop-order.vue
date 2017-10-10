<template>
  <div class="teamShop-sub">
    <mHeader>翠安茶餐厅</mHeader>
    <div class="content">
      <div class="order-list">
        <div class="order-item" v-for="(item,index) in list" :class="{'remove':item.count===0}" ref="order">
          <div class="imgWrapper">
            <img :src="item.imgUrl" alt="" class="responsive">
          </div>
          <div class="con">
            <div class="top">
              <span class="name">{{item.name}}</span><span class="price">￥{{item.price}}</span>
            </div>
            <div class="bottom">
              <span class="count">数量</span>
              <div class="num">
                <button class="reduce" @click="reduce(item,index)">-</button>
                <input type="text" disabled="disabled" v-model="item.count">
                <button class="add" @click="add(item)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import {removeClass, hasClass, addClass} from 'common/js/dom'

  export default {
    data() {
      return {
        list: [
          {
            imgUrl: require('./team-1.jpg'),
            name: '精选优质单人套餐',
            price: 18.8,
            count: 1
          },
          {
            imgUrl: require('./team-1.jpg'),
            name: '精选优质单人套餐',
            price: 18.8,
            count: 1
          }
        ]
      }
    },
    methods: {
      add(item) {
        item.count++
      },
      reduce(item, index) {
        item.count--;
        item.count = Math.max(0, item.count);
        if (item.count === 0) {
          setTimeout(() => {
            addClass(this.$refs.order[index], 'hide');
            this.delete(index);
          }, 500)
        }
      },
      delete(index) {
        let _this = this;
        setTimeout(()=>{
          _this.list.splice(index, 1)
        },0)
      }
    },
    components: {
      mHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .teamShop-sub {
    .content {
      .order-list {
        background: #fff;
        .order-item {
          display: flex;
          padding: pxToRem(10) pxToRem(10) pxToRem(10) pxToRem(19);
          transition: all ease .5s;
          &.remove {
            transform: translate3d(100%, 0, 0);
          }
          .imgWrapper {
            img {
              height: pxToRem(65);
              width: pxToRem(90);
            }
          }
          .con {
            flex: 1;
            .top {
              margin-top: pxToRem(3);
              margin-left: pxToRem(9);
              display: flex;
              align-items: center;
              justify-content: space-between;
              .name {
                font-size: pxToRem(14);
                color: #000;
              }
              .price {
                color: #c6c6c6;
              }
            }
            .bottom {
              display: flex;
              margin-top: pxToRem(25);
              margin-left: pxToRem(9);
              align-items: center;
              justify-content: space-between;
              .count {
                font-size: pxToRem(14);
                color: #c6c6c6;
              }
              .num {
                display: flex;
                align-items: center;
                border: 1px solid #e5e5e5;
                button {
                  height: pxToRem(19);
                  width: pxToRem(23);
                  background: #eee;
                }
                input {
                  width: pxToRem(27);
                  text-align: center;
                  font-size: pxToRem(12);
                  color: #777;
                  background: none;
                }
              }
            }
          }
        }
      }
    }
  }

  .hide {
    display: none !important;
  }
</style>
