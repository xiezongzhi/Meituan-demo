<template>
  <div class="user-index">
    <div class="top">
      <div class="header">
        <span class="back iconfont icon-left"></span>
        <span class="msg iconfont icon-msg"></span>
      </div>
      <div class="user-info">
        <div class="avatar">
          <img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="">
        </div>
        <div class="name">
          瘦子的瘦子
        </div>
        <div class="balance-points">
          <span class="balance text">余额：21313</span>
          <span class="points text">积分：23424</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="function-wrapper">
        <div class="function-list">
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./order.png" alt="" class="responsive">
            </div>
            <p class="text">
              商场订单
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./cart.png" alt="" class="responsive">
            </div>
            <p class="text">
              购物车
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./collect.png" alt="" class="responsive">
            </div>
            <p class="text">
              我的收藏
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./ach.png" alt="" class="responsive">
            </div>
            <p class="text">
              自我评价
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./share.png" alt="" class="responsive">
            </div>
            <p class="text">
              我的分享
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./setting.png" alt="" class="responsive">
            </div>
            <p class="text">
              设置
            </p>
          </div>
          <div class="function-item">
            <div class="imgWrapper">
              <img src="./friends.png" alt="" class="responsive">
            </div>
            <p class="text">
              我邀请的好友
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .user-index {
    height: 100%;
    background: #e7e7e7;
    .top {
      background: #ffac29;
      color: #fefefe;
      .header {
        display: flex;
        padding: 0 pxToRem(15);
        justify-content: space-between;
        align-items: center;
        height: pxToRem(45);
        font-size: pxToRem(20);
        font-weight: bolder;

      }
      .user-info {
        display: flex;
        padding-bottom: pxToRem(13);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 3px 5px #ccc;
        .avatar {
          img {
            height: pxToRem(60);
            width: pxToRem(60);
            border-radius: 50%;
          }
        }
        .name {
          font-size: pxToRem(14);
          margin: pxToRem(7) 0 pxToRem(12) 0;
        }
        .balance-points {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: pxToRem(13);
          .text {
            margin: 0 pxToRem(18);
          }
        }
      }
    }
    .bottom{
      margin-top: pxToRem(16);
      background: #fff;
      .function-wrapper{
        .function-list{
          display: flex;
          padding: pxToRem(30) 0;
          flex-wrap: wrap;
          box-shadow: 0 3px 5px #ccc;
          .function-item{
            margin-bottom: pxToRem(30);
            width: 32.99999%;
            text-align: center;
            &:last-child{
              margin: 0;
            }
            .imgWrapper{
              margin: 0 auto;
              width: pxToRem(60);
            }
            .text{
              font-size: pxToRem(14);
              color: #646464;
            }
          }
        }
      }
    }
  }
</style>
