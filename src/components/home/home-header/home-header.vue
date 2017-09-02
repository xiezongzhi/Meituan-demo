<template>
  <div class="home-header">
    <div class="header-city" @click="showCity">{{h_city}} <span class="iconfont icon-bottom"></span></div>
    <div class="header-search"><a href="#" class="rect"><span class="iconfont icon-fangdajing"></span>输入商户名，地名或菜名</a></div>
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
        showCity(){
            this.$emit('showCity')
        }
      },
      computed:{
        ...mapState({
            city: state => state.city?state.city:'定位中',

        }),
        h_city(){
            let h_city = '';
            if(!this.$route.query.city){
                h_city = this.city
            }else{
                h_city = this.$route.query.city
            }
            return h_city
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
      width: pxToRem(85);
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
      width: pxToRem(68);
    }
  }
</style>
