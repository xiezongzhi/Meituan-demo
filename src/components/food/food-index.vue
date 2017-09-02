<template>
  <div>
  <div class="food-index" >
    <foodHeader></foodHeader>
    <Scroll :data="discList" ref="scroll" class="Scroll" :pulldownUI="true" :pulldown="true" :pullupUI="true" :pullup="true">
    <foodBanner></foodBanner>
    <split></split>
    <foodNav></foodNav>
    <split></split>
    <foodActList></foodActList>
    <foodList @goTop="goTop"></foodList>
    </Scroll>
  </div>
    <transition name="slide">
      <router-view class="routerView"></router-view>
    </transition>

  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll';
  import split from 'base/split/split';
  import foodHeader from "./food-header/food-header.vue";
  import foodBanner from "./food-banner/food-banner.vue";
  import foodNewAct from "./food-newAct/food-newAct.vue";
  import foodActList from "./food-actList/food-actList.vue";
  import foodNav from "./food-nav/food-nav.vue";
  import foodList from "./food-list/food-list.vue";
  import {mapGetters} from 'vuex'

    export default{
      computed: {
        ...mapGetters([
          'singer'
        ])
      },
      data() {
        return {
          discList: this.singer,
        }
      },
      created(){
          this.discList=[1,2,3];
      },
      methods:{
        goTop(){
          this.$refs.scroll.goTop();

        }
      },
      components:{
        foodHeader,
        foodBanner,
        foodList,
        split,
        foodNewAct,
        foodActList,
        foodNav,
        Scroll
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .Scroll{
    padding-top:pxToRem(45);
  }
</style>
