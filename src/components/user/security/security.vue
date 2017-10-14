<template>
  <div class="security">
    <mHeader>账户与安全</mHeader>
    <div class="content">
      <list :title="item.title" :url="item.url" :info="item.info" v-for="(item,index) in titles" :key="index"></list>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import list from 'base/list/list';

  export default {
    data() {
      return {
        titles: [
          {
            title: '会员名',
            url:'/asdasd',
            info:'奥术大师'
          },
          {
            title: '性别',
            url:'/asdasd',
            info:'男'
          },
          {
            title: '修改手机号码',
            url:'/asdasd',
            info:'110'
          },
          {
            title: '修改登录密码',
            url:'/asdasd'
          },
          {
            title: '第三方账号绑定',
            url:'/asdasd'
          },
        ]
      }
    },
    components: {
      mHeader,
      list
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .security {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 888;
    height: 100%;
    background:#eee;
    .content {
      .spec {
        .spec-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: pxToRem(50);
          padding: 0 pxToRem(15);
          font-size: pxToRem(13);
          background: #fff;
          @include border-1px(0, 0, 1px, 0);
          .avatar {
            margin-right: pxToRem(10);
            img {
              height: 1.06rem;
              width: 1.06rem;
              border-radius: 50%
            }
          }
          .left {
            display: flex;
            color: #000;
            align-items: center;
            justify-content: center;
          }
          .right {
            display: flex;
            align-items: center;
            font-size: pxToRem(13);
            color: #777;
            .iconfont {
              font-weight: 800;
              font-size: pxToRem(20);
              color: #ddd;
            }
          }
        }
      }
      .receive {
        margin: pxToRem(9) 0;
      }
    }
    .out-btn {
      position: absolute;
      bottom: pxToRem(21);
      width: 100%;
      text-align: center;
      button {
        width: pxToRem(289);
        height:pxToRem(44) ;
        background: #adadad;
        color: #FFF;
      }
    }
  }
</style>
