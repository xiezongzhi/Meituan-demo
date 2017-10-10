<template>
  <div class="food-list" ref="foodList">
    <div class="food-content">
      <div class="nav" ref="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in names" @click="goTop(index)">
            <span class="nav-title">{{item}}</span><span class="iconfont icon-bottom"></span>
          </li>
        </ul>
      </div>

      <div class="list" v-for="item in goodsList"  @click="_getGoodDetail(item.mer_id)">
        <div class="item">
          <div class="image-wrapper">
            <img v-lazy="goodsListImgUrl+item.img" alt="">
          </div>
          <div class="content">
            <div class="item-name">
              {{item.title}}
            </div>
            <div class="item-desc">
              {{item.district}} [{{item.introduce}}]
            </div>
            <div class="price">
              <span class="new"><i class="yuan">￥</i>{{item.price}}</span><span class="old" v-show="item.oldPrice"><i
              class="yuan1">￥</i>{{item.oldPrice}}</span>
            </div>
            <div class="rang">
              <span class="num">{{item.distance | filterDis }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import BScroll from 'better-scroll';
  import {mapMutations,mapGetters} from 'vuex';
  import listHeader from "base/list-header/list-header.vue";
  import {root} from 'common/js/config';
  import {getGoodsListRound,getDistance,getFoodBanner,getGoodsListLocal} from "common/js/getData";
  export default{
    props: {
      goodsList:{
        type:Array
      }
    },
    computed: {
      ...mapGetters([
        'city'
      ])
    },
    data(){
      return {
        region:'',
        food:{},
        goodsListImgUrl:root+'/Public/uploads/food_merchants/',
        names: ['全部', '附近', '智能排序', '筛选'],
        currentIndex: '',
      }
    },
    watch: {
      names(newValue){
        this.names = newValue;
      }
    },
    filters:{
      filterDis(value){
        let len=value.toString().length;
        let distance=len>3?(value/1000).toFixed(1)+'km':value+'m';
        return distance;
      }
    },
    methods: {
      _getGoodDetail(mer_id){
        if (!mer_id) {
          this.$router.push('/food');
          return
        }
        else{
          this.$router.push({
            path: `/food/goodsDetail/?mer_id=${mer_id}&cate_id= `
          })
        }
      },
      ...mapMutations({
          setGoods:'SET_GOODS'
        }
      ),
      changName(name){
        this.names = name.slice(0, 5);
        this._goTop();
      },
      _goTop(){
        this.$parent.goTop(this.$refs.foodList,this.$refs.nav.clientHeight);
      },
      goTop(index){
        this.$parent.goTop(this.$refs.foodList,this.$refs.nav.clientHeight);
        this.$emit('goTop', index);
      },
    },
    components: {
      listHeader,
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .food-list {
    position: relative;
    padding-bottom: pxToRem(90);
    .nav {
      width: 100%;
      z-index: 999;
      background: #fff;
      .nav-list {
        display: flex;
        position: relative;
        height: 1.06rem;
        justify-content: center;
        align-items: center;
        @include border-1px(1px, 0px, 1px, 0px);
        .nav-item {
          flex: 1px;
          text-align: center;
          font-size: pxToRem(14);
          color: #969696;
          .nav-title {
            display: inline-block;
            max-width: pxToRem(62);
            height: pxToRem(16);
            line-height: pxToRem(16);
            vertical-align: bottom;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: pxToRem(10) 0;
      color: #969696;
      font-size: pxToRem(13);
      .text {
        padding: 0 pxToRem(10);
      }
      img {
        width: pxToRem(30);
      }
    }
    .food-content {
      .list {
        .item {
          display: flex;
          position: relative;
          margin: 0 pxToRem(12);
          padding: pxToRem(12) 0;
          @include border-1px(0px, 0px, 1px, 0px);
          .image-wrapper {
            width: pxToRem(80);
            height: pxToRem(80);
            margin-right: pxToRem(10);
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .content {
            flex: 1;
            position: relative;
            .item-name {
              font-size: pxToRem(16);
              color: #646464;
            }
            .item-desc {
              margin: pxToRem(18) 0;
              font-size: pxToRem(12);
              color: #969696;
            }
            .price {
              font-weight: 700;
              font-size: 0;
              .yuan {
                font-size: pxToRem(16);
                font-style: normal;
                font-weight: normal;
              }
              .yuan1 {
                font-size: pxToRem(12);
                font-style: normal;
                font-weight: normal;
              }
              .new {
                font-size: pxToRem(16);
                vertical-align: sub;
                color: #ff9d00;
              }
              .old {
                font-size: pxToRem(12);
                vertical-align: sub;
                color: #969696;
              }
            }
            .rang {
              position: absolute;
              right: 0;
              top: 0;
              .num {
                font-size: pxToRem(12);
                color: #969696;
              }
            }
          }
        }
      }
    }
  }

  .isSeat {
    height: pxToRem(50);
  }
</style>
