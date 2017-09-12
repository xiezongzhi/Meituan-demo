<template>
  <div class="home-header">
    <router-link to="/city">
      <div class="header-city">{{h_city}}<span class="iconfont icon-bottom"></span></div>
    </router-link>
    <div class="header-search"><router-link to="/search" class="rect"><span class="iconfont icon-fangdajing"></span> 输入商户名称 </router-link></div>
    <div class="header-user">消息</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default{
      data(){
          return{
            
          }
      },
      beforeMount(){
        
      },
      mounted(){

      },
      methods:{
      },
      computed:{
        ...mapState({
            city: state => state.city?state.city:'定位中'

        }),
        h_city(){
            let h_city = '';
            if(!this.$route.query.city){
                h_city = this.city
            }else{
                h_city = this.$route.query.city
            }
            return h_city.substr(0,4)
        }
      }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .home-header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: pxToRem(30);
    line-height: pxToRem(30);
    padding: pxToRem(10) 0;
    width:100%;
    text-indent: pxToRem(10);
    z-index: 99;
    position: fixed;
    background: #0f121f;
    .header-city{
      margin-right: pxToRem(8);
      color: #d7d7d7;
      font-size: pxToRem(14);
      text-align: center;
    }
    .header-search{
      flex:1;
      height: 100%;
      .rect{
        display: block;
        height: 100%;

        font-size: pxToRem(12);
        border-radius: pxToRem(30);
        background: #fff;
        color:#aaa;
        .iconfont{
          color: #ffa71d;
          margin-right: pxToRem(4);
        }
      }
    }
    .header-user{
      width: pxToRem(50);
      font-size: pxToRem(14)
    }
  }
</style>
