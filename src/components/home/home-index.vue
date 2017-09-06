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
  import {locat_city,getHotelList,initCity} from 'common/js/getData'
  import {getDistance } from 'common/js/getData'
  export default{
    data() {
      return {
        discList:[],
        loadingStatus:{
          showIcon: true,
        },
        img:'',
        isShow:false,
        currentCity:''
      }
    },

    created(){
      if(!this.$route.query.city){
            this.currentCity = '珠海'
        }else{
            this.currentCity = this.$route.query.city
        }
      

    },
    beforeMount(){

        this.setCity()
    },
    mounted(){


    },
    methods:{
       setCity(){
          initCity().then((res)=>{
            let city = res.data.body.replace('市','')
            this.$store.commit('SET_CITY',city)
          })
         
      },
      // async baiduGetData(){
      //   let param = {geotable_id:172120,region:this.currentCity,filter:'audit_status:1|status:1'}

      //     getHotelList(param).then(data=>{
      //       this.discList = data.contents;

      //       for(let i=0;i<this.discList.length;i++){
      //         getDistance(this.discList[i].location).then((data)=>{
                
      //           Vue.set(this.discList[i],'dis',data)
      //         })
      //       }
      //        this.$store.dispatch('setShopList', this.discList)

      //     })


        
       
   
      // }

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
      city
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
