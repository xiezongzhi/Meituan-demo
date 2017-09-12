<template>
  <div class="home-like">
    <h3 class="title" >
      <span><img src="./line.png" alt=""></span >   <span class="text">猜你喜欢  </span> <span><img src="./line.png" alt=""></span>
    </h3>
    <div class="like-content" v-if="shopList.length!==0">

      <div class="like-list" v-for="shop in shopList" @click="">
        <div class="list-item">
          <div class="image-wrapper">
            <img :src="imgUrl+shop.img" alt="" >
          </div>
          <div class="content">
            <div class="item-name">
              {{shop.title}}
            </div>
            <div class="item-desc">
              [{{shop.district}}]{{shop.introduce}}
            </div>
            <div class="price">
              <span class="new"><i class="yuan">￥</i>{{shop.price}} </span><span class="old"><i
              class="yuan1">￥</i>12</span>
            </div>
            <div class="rang">
              <span class="num">{{shop.distance}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="zanwu" v-else>暂无数据</div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import { mapGetters } from 'vuex'
  import {root} from 'common/js/config';
  export default{
    data(){
        return {
           imgUrl:root+'/Public/uploads/food_merchants/',
           
           
           
        }
    },
    created(){
      
    },
    methods:{
     
       
      
    },
    computed:{
      ...mapGetters([
            'shopList'

        ]),

    

    },


   
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .home-like{
    /*padding-bottom: pxToRem(150);*/
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: pxToRem(10) 0;
      color: #969696;
      font-size: pxToRem(13);
      .text{
        padding: 0 pxToRem(10);
      }
      img{
        width: pxToRem(30);
      }
    }
    .like-content{
      .like-list{
        .list-item{
          display: flex;
          position: relative;
          margin: 0 pxToRem(12);
          padding: pxToRem(12) 0;
          @include border-1px(0px,0px,1px,0px);
          .image-wrapper{
            width:pxToRem(80);
            height: pxToRem(80);
            margin-right: pxToRem(10);
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .content{
            flex:1;
            position: relative;
            .item-name{
              font-size: pxToRem(16);
              color: #646464;
            }
            .item-desc{
              margin: pxToRem(18) 0;
              font-size: pxToRem(12);
              color: #969696;
            }
            .price{
              font-weight: 700;
              font-size: 0;
              .yuan {
                font-size: pxToRem(16);
                font-style: normal;
                font-weight: normal;
              }
              .yuan1{
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
            .rang{
              position: absolute;
              right: 0;
              top: 0;
              .num{
                font-size: pxToRem(12);
                color: #969696;
              }
            }
          }
        }
      }
    }
    .zanwu{
      text-align: center
    }
  }
</style>
