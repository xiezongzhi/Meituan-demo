<template>
  <div class="home-actList">
    <a class="act-item " href="#">
      <div class="act-info">
        <h3 class="title">新人红包</h3>
        <p class="text">六月特惠</p>
        <p class="text">舌尖上的美食</p>
      </div>
      <div class="act-img">
        <img src="./1.png" alt="">
      </div>
    </a>
    <a class="act-item " href="#">
      <div class="act-info">
        <h3 class="title">新人红包</h3>
        <p class="text">六月特惠</p>
        <p class="text">舌尖上的美食</p>
      </div>
      <div class="act-img">
        <img src="./2.png" alt="">
      </div>
    </a>
    <a class="act-item " href="#">
      <div class="act-info">
        <h3 class="title">新人红包</h3>
        <p class="text">六月特惠</p>
        <p class="text">舌尖上的美食</p>
      </div>
      <div class="act-img">
        <img src="./3.png" alt="">
      </div>
    </a>
    <a class="act-item " href="#">
      <div class="act-info">
        <h3 class="title">新人红包</h3>
        <p class="text">六月特惠</p>
        <p class="text">舌尖上的美食</p>
      </div>
      <div class="act-img">
        <img src="./4.png" alt="">
      </div>
    </a>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .home-actList{
    padding: pxToRem(3);
    overflow: hidden;
    .act-item{
      height: 100%;
      display: flex;
      position: relative;
      float:left;
      padding: pxToRem(9);
      width: 50%;
      box-sizing: border-box;
      justify-content: space-between;
      .title{
        margin-bottom: pxToRem(6);
        font-size: pxToRem(16);
        color: #ff9d00;
      }
      .text{
        line-height: pxToRem(18);
        font-size: pxToRem(11);
        color: #b4b4b4;
      }
      .act-img{
        width: pxToRem(57);
        img{
          display: block;
          width: 100%;
        }
      }
      &:nth-of-type(1){
        &:after{
          position:absolute;
          content: "";
          height:1px;
          background:#d5d5d5;
          width:100%;
          left: 0;
          bottom:0;
          transform:scaleY(.5);
        }
        &:before{
          position:absolute;
          content: "";
          width:1px;
          background:#d5d5d5;
          height:100%;
          bottom:0;
          right:0;
          transform:scaleX(.5);
        }
      }
      &:nth-of-type(4){
        &:after{
          position:absolute;
          content: "";
          height:1px;
          background:#d5d5d5;
          width:100%;
          left: 0;
          top:-1px;
          transform:scaleY(.5);
        }
        &:before{
          position:absolute;
          content: "";
          width:1px;
          background:#d5d5d5;
          height:100%;
          bottom:0;
          left:-1px;
          transform:scaleX(.5);
        }
      }
    }
  }

</style>
