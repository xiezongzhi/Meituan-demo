<template>
  <div class="hotel-head">
    <div class="head-top">
      <a class="icon-left iconfont" @click="back"></a>
      <span>珠海 <i class="iconfont icon-bottom"></i></span>
    </div>
    <div class="hotel-search">
      <a href="javascript:;" class="hotel-date" @click="openByDialog(calendar4)" :value="calendar4.display">
        <span>06-28住</span>
        <span>06-29退</span>
      </a>
      <span class="search-icon">
 				<i class="iconfont icon-fangdajing"></i>
 			</span>
      <div class="search-input">
        <input type="text" placeholder="商圈/酒店/地址">
      </div>
    </div>
    <transition name="fade">
      <div class="calendar-dialog" v-if="calendar4.show">
        <div class="calendar-dialog-mask"></div>
        <div class="calendar-dialog-body">
          <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"
                    :begin="calendar4.begin" @select="calendar4.select"></calendar>
          <div class="button" @click="closeByDialog(calendar4)">完成</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import calendar from 'base/calendar/calendar.vue'
  export default{
    data(){
      return {
        calendar4: {
          display: [],
          show: false,
          range: true,
          zero: true,
          begin: [2017, 8, 5],
          value: [[2017, 8, 17], [2017, 8, 18]], //默认日期
          lunar: false, //显示农历
          select: (begin, end) => {
            // this.calendar4.show=false;
            this.calendar4.value = [begin, end];
            this.calendar4.display = [this.formatDate(begin), this.formatDate(end)];

          }
        },
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      openByDialog(calendar){

        calendar.show = true;

      },
      closeByDialog(calendar){
        calendar.show = false;
      },
      haszero(str){//月份去0
        if (str.substr(0, 1) == 0) {
          return str.substr(1)
        } else {
          return str
        }
      },
      formatDate(date){//格式化日期6月06日
        let result = `${this.haszero(date[1].toString())}月${date[2].toString()}日`
        return result
      },
    },
    components: {
      calendar
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .hotel-head {
    position: fixed;
    width: 100%;
    background: #ffa71a;
    padding: 1px;
    z-index: 99;
    .head-top {
      height: pxToRem(40);
      line-height: pxToRem(40);
      text-align: center;
      position: relative;
      color: #83560d;
      .icon-left {
        font-size: pxToRem(20);
        color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 pxToRem(15);
      }
      .icon-bottom {
        font-size: pxToRem(16);
      }
    }
    .hotel-search {
      height: pxToRem(35);
      margin: 0 pxToRem(15) pxToRem(10) pxToRem(15);
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding: pxToRem(5) pxToRem(17);
      box-sizing: border-box;
      .hotel-date {
        border-right: pxToRem(0.5) solid #d2d2d2;
        flex: 0 0 pxToRem(50);
        span {
          display: block;
          font-size: pxToRem(10);
          margin-bottom: pxToRem(3);
          &:last-of-type {
            margin-bottom: 0
          }
        }
      }
      .search-icon {
        flex: 0 0 pxToRem(37);
        text-align: center;
        font-size: pxToRem(20);
        color: #ffa71a;
      }
      .search-input {
        flex: 1;
        font-size: pxToRem(13);
        input {
          padding: pxToRem(5);
          color: #b4b4b4;
          outline: none;
          line-height: 1.5em;
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all .5s ease-in-out;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
      transform: translateY(-10px);

    }
    .calendar-dialog {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }

    .calendar-dialog-mask {
      background: rgba(0, 0, 0, .7);
      width: 100%;
      height: 100%;
    }

    .calendar-dialog-body {
      background: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 2px;
      .button {
        display: inline-block;
        padding: pxToRem(7) pxToRem(14);
        background: #ffa71d;
        border-radius: pxToRem(3);
        color: #fff
      }
    }

  }

</style>
