<template>
  <div class="reset-pass">
    <mHeader>修改密码</mHeader>
    <div class="content">
      <div class="form">
        <div class="form-item current-pass">
          <div class="title">请输入当前密码</div>
          <input type="text" v-model="currentPass">
        </div>
        <div class="form-item new-pass">
          <div class="title">请输入新密码<span class="tip">密码由6-20位英文字母、数字或符合组成</span></div>
          <input type="text" v-model="newPass">
        </div>
        <div class="form-item confirm-pass">
          <div class="title">请确认新密码</div>
          <input type="text" v-model="confirmPass">
        </div>
        <div class="sub" @click="_submit">
          <subButton>确认提交</subButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import subButton from 'base/sub-button/sub-button';
  import {trim, _mm} from 'common/js/util';

  export default {
    data() {
      return {
        currentPass: '',
        newPass: '',
        confirmPass: ''
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
          currentPass: trim(this.currentPass),
          newPass: trim(this.newPass),
          confirmPass: parseInt(this.confirmPass)
        };
        let validResult = this.valid(formData);
        if (validResult.status) {
//          this._reset(formData);
        }
        else {
          this.formError = validResult.msg;
          this.alert();
        }
      },
      valid(formData) {
        var result = {
          status: false,
          msg: ''
        };
        if (!_mm.validate(formData.currentPass, 'require')) {
          result.msg = '密码不能为空';
          return result;
        }
        if (!_mm.validate(formData.newPass, 'require')) {
          result.msg = '密码不能为空';
          return result;
        }
        if (!_mm.validate(formData.confirmPass, 'require')) {
          result.msg = '密码不能为空';
          return result;
        }
        if (formData.newPass.length < 6) {
          result.msg = '密码长度不能少于6位';
          return result;
        }
        if (formData.newPass !== formData.confirmPass) {
          result.msg = '两次输入的密码不一致';
          return result;
        }
        result.status = true;
        result.msg = '验证成功';
        return result;
      }
    },
    components: {
      mHeader,
      subButton
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .reset-pass {
    .content {
      padding: pxToRem(21) pxToRem(29);
      .form {
        .form-item {
          margin-bottom: pxToRem(25);
          .title {
            font-size: pxToRem(11);
            color: #666;
            .tip {
              margin-left: pxToRem(9);
              color: #f19a84;
            }
          }
          input {
            margin-top: pxToRem(9);
            height: pxToRem(34);
            width: 100%;
            background: #fff;
            text-indent: pxToRem(10);
          }
        }
        .sub {
          margin-top: pxToRem(46);
        }
      }
    }
  }
</style>
