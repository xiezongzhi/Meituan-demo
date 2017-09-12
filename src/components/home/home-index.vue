<template>
  <div style="height: 100%;
    overflow: hidden;">
      <div class="home-index" >
        <homeHeader></homeHeader>
        <Scroll :data="discList" class="Scroll" :isSeat="true">
          <homeBanner></homeBanner>
          <split></split>
          <homeNav></homeNav>
          <split></split>
          <homeNewAct></homeNewAct>
          <split></split>
          <homeActList></homeActList>
          <split></split>
          <homeLike></homeLike>
        </Scroll>
      </div>
      
      
    <transition name="slide">
      <router-view class="routerView"> </router-view>
    </transition>
  </div>


</template>

<script>
  import Vue from 'vue';
  import Scroll from 'base/scroll/scroll';
  import BScroll from 'better-scroll';
  import split from 'base/split/split';
  import homeHeader from "./home-header/home-header.vue";
  import homeBanner from "./home-banner/home-banner.vue";
  import homeNav from "./home-nav/home-nav.vue";
  import homeNewAct from "./home-newAct/home-newAct.vue";
  import homeActList from "./home-actList/home-actList.vue";
  import homeLike from "./home-like/home-like.vue";
  import {mapGetters} from 'vuex'
  import city from 'base/city/city'

  import {locat_city,getHotelList,initCity,getshopList} from 'common/js/getData'
  export default{
    data() {
      return {
        discList:[],
        loadingStatus:{
          showIcon: true,
        },
        city:'',
        
        
        
      }
    },

    created(){
      this.$store.commit('SET_LOADING',true)
      this.setCity()
    },

    methods:{
      setCity(){
          let _this = this
          if(this.$route.query.city){
            this.city = this.$route.query.city 
            this.$store.commit('SET_CITY',_this.city)
          }else{
              initCity().then((res)=>{
              _this.city = res.data.body.replace('市','')
              _this.$store.commit('SET_CITY',_this.city)
            })

          }
          
      },
      
      setShopList(city){
          let _this = this
          getshopList(city).then((res)=>{
            let shopList = res.data.body
            _this.discList = shopList
            this.$store.commit('GET_SHOPLIST_INDEX',shopList)
            this.$store.commit('SET_LOADING',false)
          })
      },

    },
    watch:{
      city(){
        let _this = this
         this.setShopList(_this.city)
      }
    },
    components:{
      homeHeader,
      homeBanner,
      homeNav,
      split,
      homeNewAct,
      homeActList,
      homeLike,
      Scroll,
      city,
    },

  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .home-index{
    width: 100%;
    height: 100%;
    overflow: hidden;

  }

  .Scroll{
    margin-top: pxToRem(45);
    width: 100%;

  }

    
  
  

</style>
