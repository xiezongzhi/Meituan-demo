<template>
  <div class="login-index">
    <div class="form">
      <div class="form-item ">
        <div class="left"><span class="iconfont icon-phone"></span></div>
        <div class="right"><input type="text" class="phone" placeholder="请输入手机号"></div>
      </div>
      <div class="form-item ">
        <div class="left"><span class="iconfont icon-lock"></span></div>
        <div class="right"><input type="password" class="pass" placeholder="请输入密码"></div>
      </div>
      <div class="other-login">
        <span class="left">其他登陆方式</span>
        <span class="right">注册 | 忘记密码</span>
      </div>
      <div class="sub">
        <subButton>
          登陆
        </subButton>
      </div>
    </div>
    <div class="third-login">
      <div class="title">
        <div class="line left"></div><p class="text">第三方登陆</p><div class="line right"></div>
      </div>
      <div class="third-login-list">
        <span class="third-login-item iconfont icon-wechat" ></span>
        <span class="third-login-item iconfont icon-qq"></span>
        <span class="third-login-item iconfont icon-xinlang"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import subButton from 'base/sub-button/sub-button.vue'
  export default {
    components:{
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .login-index{
    display: flex;
    flex-direction:  column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #9e9e9c;
    .form{
      .form-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:first-child {
          margin-bottom: pxToRem(37);
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
      .other-login{
        display: flex;
        width: pxToRem(273);
        margin-top: pxToRem(15);
        margin-left: pxToRem(26);
        justify-content:space-between ;
        align-items: center;
        font-size: pxToRem(14);
        .left{
          color: $defaultColor;
        }
      }
      .sub{
        margin-top: pxToRem(36);
      }
    }
    .third-login{
      margin-top: pxToRem(60);
      width: 100%;
      .title{
        display: flex;
        height: pxToRem(20);
        justify-content: space-between;
        align-items: center;
        font-size: pxToRem(13);
        overflow: hidden;
        .text{
          text-align: center;
          flex:0 0 pxToRem(100);
        }
        .line{
          height: pxToRem(1);
          background: #ddd;
          flex: 1;
        }
      }
      .third-login-list{
        display: flex;
        margin-top: pxToRem(14);
        justify-content: center;
        align-items: center;
        .third-login-item{
          padding: 0 pxToRem(5);
          font-size: pxToRem(30);
          &.icon-wechat{
            color: #62b900;
          }
          &.icon-qq{
            color: #68bef8;
          }
          &.icon-xinlang{
            color: #ec5641;
          }
        }
      }
    }
  }
</style>
