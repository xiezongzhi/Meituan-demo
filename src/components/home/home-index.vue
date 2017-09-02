<template>
  <div style="height: 100%;
    overflow: hidden;">
      <div class="home-index" >
        <homeHeader @showCity="changeShow"></homeHeader>
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
      <transition name="slideY">
        <city v-if="isShow" @showCity="changeShow" ></city>
      </transition>
    <transition name="slide">
      <router-view class="routerView"> </router-view>
    </transition>
  </div>


</template>

<script>

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
  import {locat_city} from 'common/js/getData'

  export default{
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        discList: this.singer,
        loadingStatus:{
          showIcon: true,
        },
        img:'',
        isShow:false,
        changeCity:''
      }
    },
    beforeMount(){
        if(!this.$route.query.city){
            this.setCity()
        }else{
            this.changeCity = this.$route.query.city
        }
    },
    mounted(){
        
        
    },
    methods:{
      changeShow(){
        this.isShow = !this.isShow;
      },
      async setCity(){
          let city = (await locat_city())[1].city.replace('市','')
          this.$store.commit('SET_CITY',city)
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
      city
    }
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
