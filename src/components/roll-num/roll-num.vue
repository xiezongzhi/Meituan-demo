<template>
    <div class="roll-num">
      <mHeader>美食卷</mHeader>
      <div class="content">
          <div class="module">
            <div class="imgWrapper">
              <img src="./order-1.jpg" alt="" class="responsive">
            </div>
            <div class="con">
              <div class="name">翠安茶餐厅单人套餐</div>
              <div class="time">有效期至：2017-09-27</div>
            </div>
            <div class="link">
              <span class="iconfont icon-right"></span>
            </div>
          </div>
        <div class="msg">
          <div class="password"><span class="text">密码：</span><span class="num">0362 3264 7519</span></div>
          <div class="qr-code">
            <img src="./code.jpg" alt="">
          </div>
          <div class="wave-img">
            <img src="./wave.png" alt="" class="responsive">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  export default {
    components:{
      mHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";
    .roll-num{
      .content{
        padding: pxToRem(14) pxToRem(15);
      .module{
        display: flex;
        position: relative;
        align-items: center;
        padding: pxToRem(14) pxToRem(12);
        background: #fff;
        @include border-1px(0,0,1px,0);
        .link{
          position: absolute;
          right: pxToRem(25);
          bottom: pxToRem(25);
          font-size: pxToRem(20);
        }
        .imgWrapper{
          height: pxToRem(42);
          width: pxToRem(42);
          img{
            border-radius: pxToRem(21);
          }
        }
        .con{
          margin-left: pxToRem(9);
          flex: 1;
          .time{
            margin-top: pxToRem(9);
            font-size: pxToRem(12);
            color:#777;
          }
          .name{
            font-size: pxToRem(15);
            color: #000;
          }
        }
      }
      .msg{
        position: relative;
        background: #fff;
        .password{
          padding: pxToRem(16) 0;
          text-align: center;
          .text{
            display: inline-block;
            vertical-align: middle;
            font-size: pxToRem(12);
            color: #777;
          }
          .num{
            display: inline-block;
            vertical-align: middle;
            font-size: pxToRem(16);
            color: #000;
          }
        }
        .qr-code{
          padding-top: pxToRem(9);
          padding-bottom: pxToRem(23);
          text-align: center;
          img{
            width: pxToRem(86);
            height: pxToRem(86);
            box-shadow: 0 0  10px 3px #ddd;
          }
        }
        .wave-img{
          position: absolute;
          width: 100%;
          bottom: pxToRem(-22);
        }
      }
      }
    }
</style>
