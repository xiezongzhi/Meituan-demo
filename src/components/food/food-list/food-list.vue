<template>
  <div class="food-list" ref="foodList">
    <div class="food-content">
      <div class="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item,index) in names" @click="goTop(index)">
            <span class="nav-title">{{item}}</span><span class="iconfont icon-bottom"></span>
          </li>
        </ul>
      </div>
      <router-link to="/home/food/goodsDetail">
        <div class="list" v-for="item in goodsList">
          <div class="item">
            <div class="image-wrapper">
              <img v-lazy="rootImg+item.img" alt="">
            </div>
            <div class="content">
              <div class="item-name">
                {{item.title}}
              </div>
              <div class="item-desc">
                {{item.cate_name}}
              </div>
              <div class="price">
                <span class="new"><i class="yuan">￥</i>{{item.price}}</span><span class="old" v-show="item.oldPrice"><i
                class="yuan1">￥</i>{{item.oldPrice}}</span>
              </div>
              <div class="rang">
                <span class="num"><{{item.dis}}</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapMutations} from 'vuex';
  import listHeader from "base/list-header/list-header.vue";
  import {root} from 'common/js/config';
  import {getGoodsList,getDistance} from "common/js/getData";
  export default{
    props: {
      goods: this.foods
    },
    data(){
      return {
        rootImg:root+'/Public/uploads/food_merchants/',
        goodsList:[],
        names: ['全部', '附近', '智能排序', '筛选'],
        currentIndex: '',
      }
    },
    created(){
      getGoodsList(
        {
          geotable_id:172120,
          region:'珠海',
          filter:'audit_status:1|status:1',
          parent_id:1,
          cate_id:2
        }
      ).then((data)=>{
        if(data.status===0){
          this.goodsList=data.contents;
          this._getDistance(this.goodsList);
          this.setGoods(this.goodsList);
        }
      });
    },
    watch: {
      names(newValue){
        this.names = newValue;
      }
    },
    methods: {
      _getDistance(goodsList){
        for(let i=0,len=goodsList.length;i<len;i++){
          getDistance(goodsList[i].location).then((data)=>{
            goodsList[i].dis=data;
          });
        }
      },
      ...mapMutations({
        setGoods: 'SET_GOODS'
      }),
      changName(name){
        this.names = name.slice(0, 5);
      },
      goTop(index){
        this.$parent.goTop(this.$refs.foodList);
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
