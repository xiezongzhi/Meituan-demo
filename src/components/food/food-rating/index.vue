<template>
  <div class="food-rating">
    <mHeader>美食</mHeader>
    <div class="food-rating-img">
      <img src="./food-rating-img.jpg">
    </div>
    <split1></split1>
    <tab :items="tabItem" @changeIndex="changeIndex" :nowIndex="nowIndex"></tab>
    <div class="tab-wrapper" >
      <goods v-show="nowIndex==0"></goods>

      <ratingList v-show="nowIndex==1" ref="rating"></ratingList>

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

  export default{
    data(){
      return{
        tabItem:['商品','评价'],
        nowIndex:0
      }
    },
    methods:{
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
      goods
    }
  }
</script>
<style lang="scss">
  @import '../../../common/style/base.scss';
  .food-rating{
    background: #fff;
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
