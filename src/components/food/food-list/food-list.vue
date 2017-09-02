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
  import BScroll from 'better-scroll';
  import {mapMutations} from 'vuex';
  import listHeader from "base/list-header/list-header.vue";
  export default{
    props: {
      goods: this.foods
    },
    data(){
      return {
        names: ['全部', '附近', '智能排序', '筛选'],
        currentIndex: '',
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
        ],
      }
    },
    created(){
      this.setFoods(this.foods);
    },
    watch: {
      names(newValue){
        this.names = newValue;
      }
    },
    methods: {
      ...mapMutations({
        setFoods: 'SET_FOODS'
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

  .isSeat {
    height: pxToRem(50);
  }
</style>
