<template>
    <div class="my-share">
      <mHeader>我的分享</mHeader>
      <div class="content">
        <div class="qr-code">
          <div class="imgWrapper">
            <img src="./code.jpg" alt="" class="responsive">
          </div>
        </div>
        <button class="share-btn" @click="toggleShare">分享</button>
        <p class="tips">
          分享邀请注册，被邀人将成为你的永久绑定关系， 该被邀人每次消费你可获得相应的积分奖励
        </p>
        <div class="mask" v-show="shareFlag" @click="maskHide">
        </div>
        <div class="share-con" v-show="shareFlag">
          <div class="share-list">
            <div class="wechat">
              <span class="iconfont icon-wechat"></span>
              <p class="text">微信</p>
            </div>
            <div class="friends">
              <span class="icon-friends"></span>
              <p class="text">朋友圈</p>
            </div>
            <div class="qq">
              <span class="iconfont icon-qq"></span>
              <p class="text">qq</p>
            </div>
          </div>
          <div class="cancel" @click="maskHide">
            取消
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
    export default {
      data(){
        return {
          shareFlag: false,
        }
      },
      methods: {
        toggleShare() {
          this.shareFlag = !this.shareFlag;
        },
        maskHide() {
          this.shareFlag = false;
        }
      },
      components:{
        mHeader
      }
    }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";
  .my-share{
    .content{
      padding: pxToRem(25) pxToRem(70);
      .qr-code{
        padding: pxToRem(44) 0;
        background: #fff;
        box-shadow: 0 0 10px 3px #eee;
       .imgWrapper {
         img {
           margin:0 auto;
           width: pxToRem(162);
           height: pxToRem(162);
           box-shadow: 0 0 5px 3px #eee;
         }
       }
      }
      .share-btn{
        margin: pxToRem(22) auto pxToRem(17) auto;
        height: pxToRem(44);
        width: 100%;
        border-radius: pxToRem(10);
        background: $defaultColor;
        border: none;
        font-size: pxToRem(15);
        color: #fff;
      }
      .tips{
        padding: 0 pxToRem(5);
        line-height: pxToRem(15);
        text-align: center;
        font-size: pxToRem(10);
        color: #666;
      }
      .share-con {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 99;
        .cancel {
          line-height: pxToRem(45);
          text-align: center;
          font-size: pxToRem(13);
          color: #000;
        }
        .share-list {
          display: flex;
          position: relative;
          padding: pxToRem(14);
          align-items: center;
          justify-content: center;
          @include border-1px(0, 0, 1px, 0);
          div {
            margin: 0 pxToRem(29);
            text-align: center;
            font-size: pxToRem(10);
            .text {
              color: #000;
              margin-top: pxToRem(5);
            }
          }
          .wechat {
            .icon-wechat {
              color: #62b900;
              font-size: pxToRem(36);
            }
          }
          .friends {
            .icon-friends {
              display: inline-block;
              height: pxToRem(35);
              width: pxToRem(35);
              background: url("frieds.png") no-repeat center center;
              background-size: pxToRem(35) pxToRem(35);
            }
          }
          .qq {
            .text {
              margin-top: pxToRem(2);
            }
            .icon-qq {
              color: #68bef8;
              font-size: pxToRem(37);
            }
          }
        }
      }
      .mask {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 98;
      }
    }
  }
</style>
