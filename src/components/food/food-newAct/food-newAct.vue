<template>
    <div class="home-newAct">
      <div class="left">
        <p class="title">最新<br>活动</p>
      </div>
      <div class="right">
        <p class="desc">
          美食六月特惠，口碑报表等你来试！
        </p>
      </div>
    </div>
</template>

<script>
    export default{}
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
    .home-newAct{
      display: flex;
      align-items: center;
      .left{
        width:pxToRem(53) ;
        padding: pxToRem(8) pxToRem(12) pxToRem(8) pxToRem(20);
        box-sizing: border-box;
        border-right: 1px solid #eee;
        font-size: 0px;
        .title{
          line-height:pxToRem(18);
          font-size: pxToRem(12);
          font-weight: bolder;
          white-space: nowrap;
          color: #ff9d00;
        }
      }
      .right{
        flex:1;
        margin-left: pxToRem(14);
        font-size: pxToRem(12);
        color: #969696;
      }
    }
</style>
