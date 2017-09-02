<template>
  <div class="food-actList">
    <div class="content">
      <div class="left">
        <a class="food-item " href="#">
          <div class="food-img">
            <img src="./act_1.jpg" alt="" class="responsive">
          </div>
          <div class="food-info">
            <h3 class="title">名店抢购</h3>
            <p class="spec">立即抢购</p>
          </div>
        </a>
      </div>
      <div class="right">
        <a class="food-item " href="#">
          <div class="food-info">
            <h3 class="title">领美食红包</h3>
            <p class="text">六月特惠</p>
            <p class="text">舌尖上的美食</p>
          </div>
          <div class="food-img">
            <img src="./act_2.png" alt="" class="responsive">
          </div>
        </a>
        <a class="food-item " href="#">
          <div class="food-img">
            <img src="./act_3.png" alt="" class="responsive">
          </div>
          <div class="food-info">
            <p class="text">六月特惠</p>
            <p class="text">舌尖上的美食</p>
            <h3 class="title spec">聚会来胡桃里</h3>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .food-actList {
    .content {
      display: flex;
      position: relative;
      padding:pxToRem(4) pxToRem(5);
      @include border-1px(0,0,1px,0);
      .title{
        margin-bottom: pxToRem(9);
        font-size: pxToRem(16);
        color: #ff9d00;
      }
      .text{
        line-height: pxToRem(18);
        font-size: pxToRem(12);
        color: #b4b4b4;
      }
      .left {
        position: relative;
        width: pxToRem(140);
        .food-item{
          text-align: center;
          .food-img{
            width: 100%;
          }
        }
        .spec{
          margin: 0 auto;
          width:pxToRem(100);
          height: pxToRem(25);
          line-height: pxToRem(25);
          border:1px solid #ff9d00;
          font-size: pxToRem(12);
          border-radius:pxToRem(20) ;
          color: #ff9d00;
        }
        @include border-1px(0px,1px,0px,0px);
      }
      .right{
        flex:1;
        .food-item{
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
          padding: pxToRem(12) 0 pxToRem(12) pxToRem(10);
          .spec{
            margin-top: pxToRem(9);
            margin-bottom: 0px;
          }
          &:first-child{
            @include  border-1px(0px,0px,1px,0px)
          }
          .food-img{
            width: pxToRem(100);
          }
        }
      }
    }
  }

</style>
