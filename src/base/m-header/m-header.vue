<template>
  <div class="back">
    <div class="content">
      <div class="icon"@click="back">
        <span class="iconfont icon-left"></span>
      </div>
      <div class="title">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      back() {
        this.$router.back()
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .content{
    position: relative;
    height:pxToRem(45 );
    line-height: pxToRem(45);
    text-align: center;
    .icon{
      position: absolute;
      left:0;
      padding:0 pxToRem(15);
      .iconfont{
        margin-left: pxToRem(-4);
        font-size: pxToRem(20);
        font-weight: bolder;
        color: #fff;
      }
    }
    .title{
      font-size: pxToRem(16);
      color: #835814;
    }
  }
</style>
