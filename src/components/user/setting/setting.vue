<template>
  <div class="setting">
    <mHeader>设置</mHeader>
    <div class="content">
      <div class="spec">
        <router-link to="personalData">
          <div class="spec-item">
            <div class="left">
              <div class="avatar"><img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="">
              </div>
              胖子的胖子
            </div>
            <div class="right">
              <div class="spec"><span class="iconfont icon-right"></span></div>
            </div>
          </div>
        </router-link>
      </div>
      <list :title="'我的收货地址'" class="receive"></list>
      <list :title="item.title" v-for="(item,index) in titles" :key="index"></list>
    </div>
    <div class="out-btn">
      <button>退出当前账户</button>
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
            title: '账户安全'
          },
          {
            title: '关于我们'
          },
          {
            title: '意见反馈'
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

  .setting {
    position: relative;
    height: 100%;
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
