<template>
  <div class="food-rating">
    <div class="header">
      <mHeader :isShareCollect="true"  @collect="collect">美食</mHeader>
    </div>
    <div class="food-rating-img">
      <img src="./food-rating-img.jpg">
    </div>
    <split1></split1>
    <tab :items="tabItem" @changeIndex="changeIndex" :nowIndex="nowIndex"></tab>
    <div class="tab-wrapper" >
      <goods v-show="nowIndex==0"></goods>
      <teamShop  v-show="nowIndex==1"></teamShop>
      <ratingList v-show="nowIndex==2" ref="rating"></ratingList>
    </div>
  </div>
</template>
<script>
  import mHeader from 'base/m-header/m-header'
  import split1 from 'base/split1'
  import tab from './food-rating-tab'
  import ratingList from './rating-list'
  import BScroll from 'better-scroll'
  import goods from '../goods/goods'
  import teamShop from '../teamShop/teamShop-index.vue'

  export default{
    data(){
      return{
        tabItem:['商品','团购','评价'],
        nowIndex:0
      }
    },
    methods:{
      collect(flag){
        console.log(flag)
      },
      changeIndex(index){
        this.nowIndex = index;
        this.$refs.rating.refresh()
      },
    },

    components:{
      mHeader,
      split1,
      tab,
      ratingList,
      BScroll,
      goods,
      teamShop
    }
  }
</script>
<style lang="scss">
  @import '../../../common/style/base.scss';
  .food-rating{
    background: #fff;
    .mask{
      position: fixed;
      top:0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 98;
    }
    .header {
      background: $defaultColor;
    }
    .back{
      .content{
        background:#ffa71d;
        height: pxToRem(45);
        line-height:  pxToRem(45);
      }
    }
    .food-rating-img{
      img{
        width: 100%;
        vertical-align: top;
        height: pxToRem(162);
      }
    }
    .rating{
      overflow: hidden;
      position: fixed;
      top: pxToRem(253);
      bottom: 0;
      left: 0;
      width: 100%;

    }
  }
</style>
