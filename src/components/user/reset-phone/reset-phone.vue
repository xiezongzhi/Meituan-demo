<template>
  <div class="reset-phone">
    <mHeader>修改密码</mHeader>
    <div class="content">
      <div class="form">
        <div class="form-item new-phone">
          <div class="title">请输入手机号码</div>
          <div class="spec"><input type="text" v-model="phone" class="phone"><span class="valid"
                                                                                   @click="getCode">{{flag === false ? "获取验证码" : codeText + "s"}}</span>
          </div>
        </div>
        <div class="form-item identifying-code">
          <div class="title">请输入验证码</div>
          <input type="text" v-model="code" class="code">
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

  let TIMECOUNT = 60;
  export default {
    data() {
      return {
        phone: '',
        code: '',
        timeCount: TIMECOUNT,
        flag: false,
        timer: ''
      }
    },
    computed: {
      codeText() {
        if (this.timeCount <= 0) {
          clearInterval(this.timer);
          this.timeCount = TIMECOUNT;
          this.flag = false;
        }
        else {
          return this.timeCount
        }
      }
    },
    methods: {
      alert() {
        this.$vux.alert.show({
          content: this.formError,
        });
      },
      getCode() {
        if (this.flag === false && _mm.validate(this.phone, 'phone')) {
          this.timer = setInterval(() => {
            this.timeCount--;
          }, 1000);
          this.flag = true;
        }
        else if (!_mm.validate(this.phone, 'phone')) {
          this.formError = '手机号码格式不正确';
          this.alert()
        }
      },
      _submit() {
        let formData = {
          phone: trim(this.phone),
          code: trim(this.code)
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
        if (!_mm.validate(formData.phone, 'phone')) {
          result.msg = '手机号码格式不正确';
          return result;
        }
        if (!_mm.validate(formData.code, 'require')) {
          result.msg = '验证码不能为空';
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

  .reset-phone {
    .content {
      padding: pxToRem(21) pxToRem(29);
      .form {
        .form-item {
          margin-bottom: pxToRem(25);
          .title {
            font-size: pxToRem(11);
            color: #666;
          }
          .spec {
            display: flex;
            align-items: center;
            margin-top: pxToRem(9);
            .phone {
              height: pxToRem(34);
              width: pxToRem(232);
              background: #fff;
              text-indent: pxToRem(10);
            }
            .valid {
              display: inline-block;
              margin-left: pxToRem(9);
              width: pxToRem(72);
              height: pxToRem(29);
              text-align: center;
              line-height: pxToRem(29);
              font-size: pxToRem(11);
              border-radius: pxToRem(10);
              border: 1px solid #f19a84;
              color: #f19a84;
            }
          }
          .code {
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
