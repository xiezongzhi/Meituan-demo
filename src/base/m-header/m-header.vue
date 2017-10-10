<template>
  <div class="header">
    <div class="content">
      <div class="icon" @click="back">
        <span class="iconfont icon-left"></span>
      </div>
      <div class="title">
        <slot></slot>
      </div>
    </div>
    <div class="share-collect" v-if="isShareCollect">
      <span class="collect iconfont" :class="[collectFlag?collected:collect]" @click="toggleCollect"></span>
      <span class="share iconfont icon-share" :class="{'active':shareFlag}" @click="toggleShare"></span>
    </div>
    <div class="deal" v-if="isDeal" @click="deal">
      <span class="">{{name}}</span>
    </div>
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
</template>

<script>
  export default {
    props: {
      isShareCollect: {
        type: Boolean,
        default: false
      },
      isDeal: {
        type: Boolean,
        default: false
      },
      name:{
        type:String
      }
    },
    data() {
      return {
        collectFlag: false,
        shareFlag: false,
        collect: 'icon-collect',
        collected: 'icon-collect1',
        menus1: {
          menu1: 'Share to friends',
          menu2: 'Share to timeline'
        },
      }
    },
    methods: {
      toggleCollect() {
        this.collectFlag = !this.collectFlag;
        this.$emit('collect', this.collectFlag);
      },
      toggleShare() {
        this.shareFlag = !this.shareFlag;
      },
      maskHide() {
        this.shareFlag = false;
      },
      back() {
        this.$router.back()
      },
      deal(){
        this.$emit('deal')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .header {
    height: pxToRem(45);
    line-height: pxToRem(45);
    .content {
      position: fixed;
      width: 100%;
      top: 0;
      text-align: center;
      background: $defaultColor;
      z-index:99;
      .icon {
        position: absolute;
        left: 0;
        padding: 0 pxToRem(15);
        font-weight: 400;
        .iconfont {
          margin-left: pxToRem(-4);
          font-size: pxToRem(20);
          font-weight: bolder;
          color: #fff;
        }
      }
      .title {
        font-size: pxToRem(16);
        color: #835814;
      }
    }
    .share-con {
      position: fixed;
      bottom: 0;
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
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 98;
    }
    .share-collect {
      position: absolute;
      top: 0;
      line-height: pxToRem(45);
      right: pxToRem(19);
      font-size: pxToRem(20);
      .collect {
        margin-right: pxToRem(10);
        &.icon-collect1 {
          color: #b17618;
        }
        &.icon-collect {
          color: #fff;
        }
      }
      .share {
        color: #fff;
        &.active {
          color: #b17618;
        }
      }
    }
    .deal {
      position: absolute;
      z-index: 999;
      right: pxToRem(18);
      color: #fff;
    }
  }

</style>
