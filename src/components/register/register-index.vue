<template>
  <div class="register-index">
    <Mheader class="header">注册</Mheader>
    <div class="form">
      <div class="form-wrapper">
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-phone"></span></div>
          <div class="right"><input type="text" class="phone" placeholder="请输入手机号码"></div>
        </div>
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-lock"></span></div>
          <div class="right"><input type="password" class="pass" placeholder="请设置密码"></div>
        </div>
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-wecode"></span></div>
          <div class="right"><input type="text" class="wecode" placeholder="请输入邀请码（手机号）"></div>
        </div>
        <div class="form-item valiCodeWrapper">
          <div class="left"><span class="iconfont icon-valicode"></span></div>
          <div class="right"><input type="text" class="vali" placeholder="请输入验证码"> <span class="tips">点击获取验证码</span></div>
        </div>
      </div>
      <div class="sub">
        <subButton>
          注册
        </subButton>
      </div>
    </div>
  </div>
</template>

<script>
  import Mheader from "base/m-header/m-header";
  import subButton from 'base/sub-button/sub-button.vue'
  export default {
    components:{
      Mheader,
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .register-index{
    height: 100%;
    background: #e7e7e7;
    color: #9e9e9c;
    .header{
      background: #ffac29;
    }
    .form-wrapper{
      display: flex;
      margin-top: pxToRem(20);
      padding: pxToRem(14) 0;
      flex-direction:  column;
      justify-content: center;
      align-items: center;
      background: #fff;
      .form-item {
        display: flex;
        margin-bottom: pxToRem(20);
        justify-content: flex-start;
        align-items: center;
        &.valiCodeWrapper {
          margin-bottom: pxToRem(8);
          .right {
            position: relative;
            .tips {
              position: absolute;
              top:0;
              left: pxToRem(150);
              line-height: pxToRem(23);
              font-size: pxToRem(12);
              color: $defaultColor;
            }
          }
        }
        .iconfont {
          font-size: pxToRem(22);
        }
        input {
          width: pxToRem(273);
          height: pxToRem(22);
          margin-left: pxToRem(5);
          font-size: pxToRem(14);
          -webkit-appearance: inherit;
          outline: none;
          border-bottom: 1px solid #ddd;
          color: #9e9e9c;
          &::-webkit-input-placeholder{
            color: #9e9e9c;opacity:1;
          }
        }
      }
    }
    .sub{
      width: pxToRem(300);
      margin: pxToRem(38) auto 0 auto;

    }
  }
</style>
