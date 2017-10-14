<template>
  <router-link :to="url" class="component-list">
    <div class="component-item">
      <div class="left">{{title}}</div><div class="right"><div class="spec"><div v-html="info"></div></div><span class="iconfont icon-right"></span></div>
    </div>
  </router-link>
</template>

<script>
    export default {
      props:{
        title:{
          type:String
        },
        info:{
          type:String
        },
        url:{
          type:String
        },
      },
    }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";
  .component-list{
    position: relative;
    display: block;
    @include border-1px(0,0,1px,0);
    background: #fff;
    .component-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: pxToRem(50);
      padding: 0 pxToRem(15);
      font-size: pxToRem(13);
      .left{
        color: #000;
      }
      .right{
        display: flex;
        align-items: center;
        font-size: pxToRem(13);
        color: #777;
        .iconfont{
          font-weight: 800;
          font-size: pxToRem(20);
          color: #ddd;
        }
      }
    }
  }
</style>
