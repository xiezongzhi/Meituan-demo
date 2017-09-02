<template>
  <div class="food-header">
    <div class="food-city" @click="back"><span class="iconfont icon-left"></span></div>
    <div class="food-search"><a href="#" class="rect"><span class="iconfont icon-fangdajing"></span>输入商户名，地名或菜名</a></div>
    <div class="food-user">消息</div>
  </div>
</template>

<script>
  export default{
      methods:{
          back(){
              this.$router.back();
          }
      }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .food-header{
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
    .food-city{
      width: pxToRem(50);
      font-size: pxToRem(20);
      font-weight: 900;
    }
    .food-search{
      /*width: pxToRem(255);*/
      flex: 1;
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
    .food-user{
      width: pxToRem(60);
    }
  }
</style>
