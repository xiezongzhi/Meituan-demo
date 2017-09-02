<template>
  <div class="home-footer">
    <div class="nav-content">
      <ul class="list">
        <router-link  to="/home" class="item">
          <p class="iconfont icon-home icon"></p>
          <span class="text">首页</span>
        </router-link>
        <router-link to="shop" class="item">
          <p class="iconfont icon-shop icon"></p>
          <span class="text">商城</span>
        </router-link>
        <router-link to="pay" class="item spec">
          <p class="iconfont icon-scan icon"></p>
          <span class="text">付款</span>
        </router-link>
        <router-link to="order" class="item">
          <p class="iconfont icon-order icon"></p>
          <span class="text">订单</span>
        </router-link>
        <router-link to="user" class="item">
          <p class="iconfont icon-user icon"></p>
          <span class="text">我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .home-footer{
    position: fixed;
    z-index: 99;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: #fff;
    color: #646464;
    .list{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: pxToRem(10);
      border-top:0.5px solid #eee;
      .item{
        flex:1;
        text-align: center;
        .icon{
          font-size: pxToRem(35);
        }
        .text{
          margin-top: pxToRem(10);
          font-size: pxToRem(10);
        }
      }
      .spec{
        margin-top: pxToRem(-50);
        padding-top: pxToRem(12);
        box-sizing: border-box;
        height: pxToRem(70);
        border-radius: 50%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        color: #fff;
        background: #ff9d00;
      }
    }

  }
  .active{
      color: #ff9d00 ;
  }
</style>
