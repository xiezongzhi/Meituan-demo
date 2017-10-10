<template>
  <div class="register-index">
    <Mheader class="header">注册</Mheader>
    <div class="form">
      <div class="form-wrapper">
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-phone"></span></div>
          <div class="right"><input type="text" id="phone" placeholder="请输入手机号码" v-model="phone" >
          </div>
        </div>
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-lock"></span></div>
          <div class="right"><input type="password" id="password" placeholder="请设置密码" v-model="password"
                                   ></div>
        </div>
        <div class="form-item ">
          <div class="left"><span class="iconfont icon-wecode"></span></div>
          <div class="right"><input type="text" class="wecode" placeholder="请输入邀请码（手机号）" v-model="inviteCode"
                                    ></div>
        </div>
        <div class="form-item valiCodeWrapper">
          <div class="left"><span class="iconfont icon-valicode"></span></div>
          <div class="right"><input type="number" class="vali" placeholder="请输入验证码"> <span class="tips"
                                                                                          >点击获取验证码</span>
          </div>
        </div>
      </div>
      <div class="sub" @click.stop.prevent="_submit">
        <subButton>
          注册
        </subButton>
      </div>
    </div>
  </div>
</template>

<script>
  import Mheader from "base/m-header/m-header";
  import subButton from 'base/sub-button/sub-button.vue';
  import {trim, _mm} from 'common/js/util';
  import {register} from 'common/js/getData'

  export default {
    data() {
      return {
        phone: '',
        password: '',
        formError: '',
        inviteCode: ''
      }
    },
    methods: {
      alert() {
        this.$vux.alert.show({
          content: this.formError,
        });
      },
      _submit() {
        let formData = {
          phone: trim(this.phone),
          password: trim(this.password),
          inviteCode: parseInt(this.inviteCode)
        };
        let validResult = this.valid(formData);
        if (validResult.status) {
          this._register(formData);
        }
        else {
          this.formError=validResult.msg;
          this.alert();
        }
      },
      valid(formData) {
        var result = {
          status: false,
          msg: ''
        };
        if (!_mm.validate(formData.phone, 'phone')) {
          result.msg = '手机号格式不正确';
          return result;
        }
        if (!_mm.validate(formData.password, 'require')) {
          result.msg = '密码不能为空';
          return result;
        }
        if (formData.password.length < 6) {
          result.msg = '密码长度不能少于6位';
          return result;
        }
        if (!_mm.validate(formData.inviteCode, 'inviteCode')) {
          result.msg = '邀请码格式不正确';
          return result;
        }
        result.status = true;
        result.msg = '验证成功';
        return result;
      },
      _register(param) {
        register(param).then((res) => {
          if (res.flag === 2) {
            if (res.msg === 'e_100006') {
              this.formError = res.body;
              this.alert();
            }
          }else{
            this.formError = '注册成功'
            this.alert();
          }
        })
      }
    },
    components: {
      Mheader,
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .register-index {
    height: 100%;
    background: #e7e7e7;
    color: #9e9e9c;
    .header {
      background: #ffac29;
    }
    .form-wrapper {
      display: flex;
      margin-top: pxToRem(20);
      padding: pxToRem(14) 0;
      flex-direction: column;
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
              top: 0;
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
          &::-webkit-input-placeholder {
            color: #9e9e9c;
            opacity: 1;
          }
        }
      }
    }
    .sub {
      width: pxToRem(300);
      margin: pxToRem(38) auto 0 auto;
    }
  }
</style>
