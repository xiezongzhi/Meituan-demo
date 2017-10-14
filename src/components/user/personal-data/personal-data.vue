<template>
  <div class="personal-data">
    <mHeader>个人资料</mHeader>
    <div class="content">
      <div class="spec">
        <div class="spec-item">
          <div class="left">
            胖子的胖子
          </div>
          <div class="right">
            <div class="avatar"><img src="http://img1.2345.com/duoteimg/qqTxImg/11/2012091910313510745.jpg" alt="">
            </div>
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <list :title="item.title" :info="item.info" :url="item.url" v-for="(item,index) in titles" :key="index">
      </list>
    </div>
  </div>
</template>
<script>
  import mHeader from 'base/m-header/m-header';
  import list from 'base/list/list';

  export default {
    data() {
      return {
        titles: [{
          title: '会员名',
          info: '胖子的胖子',
          url:''
        }
          , {
            title: '性别',
            info: '男',
            url:''
          }
        ]
      }
    },
    methods: {},
    components: {
      mHeader,
      list
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/style/base";

  .personal-data {
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 888;
    background:#eee;
    height: 100%;
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
          color: #000;
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
  }
</style>
