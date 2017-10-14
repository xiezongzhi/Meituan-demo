<template>
  <div id="app" >
    <keep-alive>
        <transition name="fade">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
    </keep-alive>
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
      <transition name="fade">
        <div class="loading" v-if="load">
          <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        </div>
      </transition>

  </div>


</template>
<script>

import listHeader from "base/list-header/list-header.vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import {mapGetters} from 'vuex'
import {initCity,getuserId} from 'common/js/getData'


  export default{
    data(){
        return{
          loading:true,
          color:'#ff9d00',
          size:'15px',
        }
    },
    created(){
      this.setCity();
      this.islogin();
    
    },
    methods:{
      setCity(){
           initCity().then((res)=>{
              this.$store.commit('SET_CURRENT_CITY',res.data.body.replace('市',''))
            })
          
      },
      islogin(){
        getuserId().then((res)=>{
          console.log(res)
          this.$store.commit('SET_LOGIN',res.data.flag)
        })
      }
    },
    computed:{
      ...mapGetters([
            'load',
            'loginStatus'

        ]),

    

    },
    components:{
      // subOrder,
      // payType,
      // scrollDemo,
      // listHeader,
      // food,
      // goods,
      PulseLoader
    }
  }
</script>
<style lang="scss" scoped>
  @import 'common/style/base.scss';
  body{
    #app{
      font-size: pxToRem(16);
      height: 100%;

    }
    .slide-enter-active,.slide-leave-active{
      transition: all 0.3s
    }
    .slide-enter,.slide-leave-to{
      transform: translate3d(100%, 0, 0)
    }
  }

</style>

