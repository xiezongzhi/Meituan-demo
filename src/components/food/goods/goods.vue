<template>
  <div>
    <div class="goods" flex="true">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="menu-item  "
              :class="[{'current': cur==index},{'prev':cur1==index},{'next':cur2==index}]"
              @click="currentSelect(index,$event)">
            <span class="text ">{{item.name}}</span>
            <span class="num" v-show="item.count">{{item.count}}</span>
          </li>
        </ul>
        <div class="fill">
        </div>
      </div>

      <div class="foods-wrapper" ref="foodsWrapper" flex="1">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item " flex="true">
                <div class="icon">
                  <img v-lazy="imgUrl+food.img" alt="">
                </div>
                <div class="content" flex="1">
                  <h2 class="name">{{food.name}}</h2>
                  <div class="extra">
                    <span class="month-sell">月售{{food.sellCount}}份</span>
                  </div>
                  <div class="price">
                    <span class="new"><i class="yuan">￥</i>{{food.price}} </span><span class="old"
                                                                                       v-show="food.oldPrice"><i
                    class="yuan">￥</i>{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-Wrapper">
                    <cartcontrol :food="food" :id="food.goods_id" :goods="goods" @add="addFood"
                                 @decreaseCart="decreaseFood" :fo="item"
                                 :cartObj="cartObj"></cartcontrol>
                  </div>
                </div>
              </li>
              <div class="fill"></div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :pay="seller.pay"
              :selectFoods="selectFoods" ref="shopcart" :selectFo="selectFo" :orderData="orderData"></shopcart>
  </div>


</template>

<script>
  import BScroll from 'better-scroll';
  import shopcart from './shopcart/shopcart';
  import {getGoodsDetail, getShopCart} from "common/js/getData";
  import cartcontrol from './cartcontrol/cartcontrol';
  import {root} from 'common/js/config';
  import {mapMutations} from 'vuex';

  let FLAG = true;
  export default {
    data() {
      return {
        imgUrl: root + '/Public/uploads/food_goods/',
        merchants: {},
        arr: [],
        orderData: {},
        goods: [],
        goodsArr: [],
        good: [],
        listHeight: [],
        scrollY: 0,
        cartObj: '',
        seller: '',
        flag: true,
        cur: 0,
        cur1: -1,
        cur2: 1,
        num: ''
      }
    },
    watch: {
      scrollY(newValue) {
        for (let i = 0, listHeightLen = this.listHeight.length; i < listHeightLen; i++) {
          let height_1 = this.listHeight[i];
          let height_2 = this.listHeight[i + 1];
          if (((newValue >= height_1 && newValue < height_2) || !height_2) && (i < 2)) {
            if (FLAG) {
              this.cur = i;
              this.cur1 = i - 1;
              this.cur2 = i + 1
            }
          }
        }
      }
    },
    computed: {
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food, index) => {
            if (food.count) {
              food.parent = good;
              foods.push(food);
            }
          });
        });
        return foods;
      },
      selectFo() {
        let fo = [];
        this.goods.forEach((good) => {
          if (good.count > 0) {
            fo.push(good);
          }
        });
        return fo;
      }
    },
    created() {
      let _this = this;
      getGoodsDetail(this.$route.query).then((data) => {
        var arr = data.goods;
        var map = {};
        this.goodsArr = arr;
        var dest = [];
        for (var i = 0; i < arr.length; i++) {
          var ai = arr[i];
          if (!map[ai.cate_name]) {
            dest.push({
              name: ai.cate_name,
              foods: [ai],
              mer_id: this.$route.query.mer_id
            });
            map[ai.cate_name] = ai;
          } else {
            for (var j = 0; j < dest.length; j++) {
              var dj = dest[j];
              if (dj.name == ai.cate_name) {
                dj.foods.push(ai);
                break;
              }
            }
          }
        }
        this.goods = dest;
        console.log(data.goods)
        this.setGoodList(data.goods);
        this.$nextTick(() => {
          this._initScroll();
          this.calculateHeight();
        })
      });

    },
    methods: {
      ...mapMutations({
        setGoodList:'SET_GOODLIST'
      }),
      _initScroll(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3,
          click: true
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
        this.foodsScroll.on('scrollEnd', () => {
          FLAG = true;
        });
      },
      calculateHeight() {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0, foodListLen = foodList.length; i < foodListLen; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      currentSelect(index) {
        FLAG = false;
        this.cur = index;
        this.cur1 = index - 1;
        this.cur2 = index + 1;
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      addFood(target, obj) {
        this._drop(target);
//        if (this.arr.indexOf(obj) > -1) {
//          this.arr = this.arr.splice(1, 1)
//        }
//        this.arr.push(obj);
//        this.selectFoods = this.arr;
        this._getCartList()
      },
      decreaseFood() {

      },
      _drop(target) {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        })

      }
    },
    components: {
      shopcart,
      cartcontrol
    },

  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .goods {
    position: fixed;
    top: pxToRem(253);
    bottom: pxToRem(45);
    z-index: 2;
    width: 100%;
    overflow: hidden;

    .menu-wrapper {
      flex: 0 0 pxToRem(90);
      width: pxToRem(90);
      .fill {
        flex: 0 0 pxToRem(90);
        width: pxToRem(90);
        background: #f3f5f7;
        height: 100%;
      }
      .menu-item {
        display: table;
        position: relative;
        height: pxToRem(54);
        width: pxToRem(90);
        background: #f3f5f7;
        line-height: pxToRem(14);
        text-align: center;
        color: #646464;
        @include border-1px(0, 0, 1px, 0);
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
          box-shadow: 0 pxToRem(4) pxToRem(8) 0 rgba(0, 0, 0, 0.4);
        }
        &.current {
          position: relative;
          z-index: 10;
          margin-top: pxToRem(-1);
          background: #fff;
          font-weight: 700;
          @include border-none();
        }
        &.prev {
          border-radius: 0 0 pxToRem(15) 0;
        }
        &.next {
          border-radius: 0 pxToRem(15) 0 0;
        }
        .icon {
          display: inline-block;
          margin-right: pxToRem(2);
          vertical-align: top;
          width: pxToRem(12);
          height: pxToRem(12);
          background-size: pxToRem(12) pxToRem(12);
          background-repeat: no-repeat;
        }
        .text {
          position: relative;
          display: table-cell;
          vertical-align: middle;
          font-size: pxToRem(12);
        }
      }
    }
    .foods-wrapper {
      .fill {
        height: pxToRem(10);
      }
      .title {
        padding-left: pxToRem(14);
        height: pxToRem(26);
        line-height: pxToRem(26);
        border-left: pxToRem(2) solid #ffa71d;
        font-size: pxToRem(12);
        color: #646464;
        background: #f3f5f7;
      }
      .food-item {
        position: relative;
        margin: pxToRem(10);
        padding-bottom: pxToRem(18);
        &:last-child {
          margin-bottom: pxToRem(0);
        }
        img {
          width: pxToRem(57);
          height: pxToRem(64);
        }
      }
      .icon {
        flex: 0 0 pxToRem(57);
        margin-right: pxToRem(10);
      }
      .content {
        position: relative;

        .name {
          margin: pxToRem(2) 0 pxToRem(8) 0;
          padding-right: pxToRem(10);
          height: pxToRem(14);
          line-height: pxToRem(14);
          font-size: pxToRem(14);
          color: #505050;
        }
        .desc,
        .extra {
          margin-bottom: pxToRem(8);
          line-height: pxToRem(10);
          font-size: pxToRem(10);
          color: rgb(147, 153, 159);
        }
        .extra {
          .month-sell {
            margin-right: pxToRem(12);
            font-size: pxToRem(10);
          }
          .good-rating {
            font-size: pxToRem(10);
          }
        }
        .price {
          line-height: pxToRem(24);
          font-weight: 700;
          .yuan {
            font-size: pxToRem(10);
            font-style: normal;
            font-weight: normal;
          }
          .new {
            margin-right: pxToRem(8);
            vertical-align: text-bottom;
            font-size: pxToRem(16);
            color: #ff6d34;
          }
          .old {
            vertical-align: text-bottom;
            font-size: pxToRem(10);
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-Wrapper {
          position: absolute;
          right: 0px;
          bottom: pxToRem(3);
        }
      }
    }
  }
</style>
