<template>
  <div class="invite-friends">
    <div class="header">
      <span class="iconfont icon-left back" @click="back"></span>
      <div class="search-wrapper">
        <span class="iconfont icon-fangdajing fangdajing"></span>
        <input type="text" class="search" placeholder="请输入用户名或关键字">
      </div>
    </div>
    <div class="content">
      <div class="friends">
        <div class="invite-count">
          我邀请的好友（2）人
        </div>
        <div class="friends-list">
          <div class="friends-item">
              <div class="left">
                <div class="avatar"><img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="">
                </div>
                胖子的胖子
              </div>
              <div class="right">
                <div class="time">2017-06-29</div>
              </div>
          </div>
        </div>
        <div class="friends-list">
          <div class="friends-item">
            <div class="left">
              <div class="avatar"><img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="">
              </div>
              胖子的胖子
            </div>
            <div class="right">
              <div class="time">2017-06-29</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      back(){
        this.$router.back();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";
  .invite-friends{
    .header{
      display: flex;
      align-items: center;
      height: pxToRem(45);
      background: $defaultColor;
      color: #fff;
      .back{
        margin-left: pxToRem(7);
        font-size: pxToRem(20);
        font-weight: 800;
      }
      .search-wrapper{
        position: relative;
        display: flex;
        margin-left: pxToRem(14);
        align-items: center;
        width: pxToRem(294);
        padding: pxToRem(5) 0;
        color: #fff;
        @include border-1px(0,0,1px,0);
        &:after{
          border-color:#fff;
        }
        .fangdajing{
          color: #ffe7ce;
          font-size: pxToRem(13);
        }
        .search{
          margin-left: pxToRem(5);
          background: none;
          font-size: pxToRem(12);
          color: #fefefe;
          &::-webkit-input-placeholder{
            color: #ffe7ce;
          }
        }
      }
    }
    .content {
      margin-top: pxToRem(8);
      background: #fff;
      .friends {
        .invite-count {
          position: relative;
          padding: pxToRem(9) 0;
          text-align: center;
          font-size: pxToRem(12);
          color: #bbb;
          @include border-1px(0,0,1px,0);
        }
        .friends-list {
          .friends-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: pxToRem(46);
            padding: 0 pxToRem(15);
            font-size: pxToRem(13);
            background: #fff;
            @include border-1px(0, 0, 1px, 0);
            .avatar {
              margin-right: pxToRem(10);
              img {
                height: pxToRem(33);
                width: pxToRem(33);
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
              .time {
                color: #bbb;
              }
            }
          }
        }
      }
    }
  }
</style>
