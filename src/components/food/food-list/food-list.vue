<template>
  <div class="food-list">
    <listHeader :titles="names" :top="6" :isLine="false" @goTop="goTop">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </listHeader>
    <div class="food-content">
      <router-link to="/home/food/goodsDetail">
      <div class="list" v-for="item in foods">
        <div class="item">
          <div class="image-wrapper">
            <img :src="item.image" alt="">
          </div>
          <div class="content">
            <div class="item-name">
              {{item.name}}
            </div>
            <div class="item-desc">
              {{item.desc}}
            </div>
            <div class="price">
              <span class="new"><i class="yuan">￥</i>{{item.newPrice}}</span><span class="old"><i
              class="yuan1">￥</i>{{item.oldPrice}}</span>
            </div>
            <div class="rang">
              <span class="num"><{{item.rang}}</span>
            </div>
          </div>
        </div>
      </div>
      </router-link>
    </div>


  </div>
</template>

<script>
  import listHeader from "base/list-header/list-header.vue";
  export default{
    data(){
      return {
        names: ['全部', '附近', '智能排序', '筛选'],
        foods: [
          {
            image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            name: '奈九居酒屋',
            desc: '[乐士文化区]100元超级代金券,',
            newPrice: 12,
            oldPrice: 10,
            rang: '2.3km'
          }, {
            image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            name: '奈九居酒屋',
            desc: '[乐士文化区]100元超级代金券,',
            newPrice: 12,
            oldPrice: 10,
            rang: '2.3km'
          }, {
            image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            name: '奈九居酒屋',
            desc: '[乐士文化区]100元超级代金券,',
            newPrice: 12,
            oldPrice: 10,
            rang: '2.3km'
          }, {
            image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750",
            name: '奈九居酒屋',
            desc: '[乐士文化区]100元超级代金券,',
            newPrice: 12,
            oldPrice: 10,
            rang: '2.3km'
          }
        ]
      }
    },
    methods: {
      goTop(){
        this.$emit('goTop')
      }
    },
    components: {
      listHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .food-list {
    padding-bottom: pxToRem(90);
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
            width: pxToRem(76);
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
</style>
