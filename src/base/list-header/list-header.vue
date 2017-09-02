<template>
  <div class="list-header">
    <div class="content">
      <ul class="list" ref="listWrapper">
        <li class="item" v-for="(item,index) in titles" @click="toggle(index)" :class="[{'line':isLine}]"
            ref="itemWrapper">
          <span class="title">{{item}}</span><span class="iconfont icon-bottom"></span>
        </li>
      </ul>
      <div class="dropDown-area" ref="areaWrapper">
        <div class="spec"></div>
        <slot></slot>
      </div>
    </div>
    <div class="area-bg" v-show="isShow" @click="_hide($event)">
    </div>
  </div>
</template>

<script>
  import {hasClass, removeClass, addClass} from 'common/js/dom';
  let ICONCLASS_1 = 'icon-bottom';
  let ICONCLASS_2 = 'icon-top';
  let ICON = 'iconfont';
  export default{
    data(){
      return {
        count: 0,
        flag: true,
        isShow: false,
        currentIndex: -1
      }
    },
    props: {
      top: {
        type: Number,
        default: 0
      },
      isLine: {
        type: Boolean,
        default: true
      },
      titles: {
        type: Array,
        default(){
          return [1, 2, 3, 4]
        }
      }
    },
    methods: {
      toggle(index){
        this.commonObj();
        if (hasClass(this.areaObj[index], 'show')) {
          this.areaObj[index].flag = false;
          this.isShow = false;
        }
        else {
          this.areaObj[index].flag = true;
          this.isShow = true;
        }
        this.commonFor();
        if (this.areaObj[index].flag) {
          addClass(this.areaObj[index], 'show');
          addClass(this.itemObj[index], 'active');
          addClass(this.iconObj[index], ICONCLASS_2);
          removeClass(this.iconObj[index], ICONCLASS_1);
        }

        this.$emit('refresh', index);
      },
      _hide(){
        this.commonObj();
        this.commonFor();
        this.isShow = false;
        this.$emit('hide')
      },
      commonObj(){
        this.areaObj = this.$refs.areaWrapper.getElementsByClassName('area-list');
        this.iconObj = this.$refs.listWrapper.getElementsByClassName(ICON);
        this.itemObj = this.$refs.listWrapper.getElementsByClassName('item');
      },
      commonFor(){
        for (var i = 0, len = this.areaObj.length; i < len; i++) {
          removeClass(this.areaObj[i], 'show');
        }
        for (var i = 0, len = this.itemObj.length; i < len; i++) {
          removeClass(this.itemObj[i], 'active');
        }
        ;
        for (var i = 0, len = this.iconObj.length; i < len; i++) {
          addClass(this.iconObj[i], ICONCLASS_1);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .list-header {
    z-index: 9;
    width: 100%;
    top: pxToRem(50);
    position: absolute;
    .content {
      position: relative;
      top: 0px;
      width: 100%;
      z-index: 999;
      background: #fff;
      .list {
        position: relative;
        display: flex;
        height: 1.06rem;
        justify-content: center;
        align-items: center;
        @include border-1px(1px, 0px, 1px, 0px);
        .item {
          flex: 1;
          position: relative;
          text-align: center;
          font-size: pxToRem(14);
          color: #969696;
          &:last-child {
            @include border-none();
          }
          .title {
            display: inline-block;
            height: pxToRem(16);
            max-width: pxToRem(62);
            vertical-align:bottom;
            line-height: pxToRem(16);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &.active {
            color: $defaultColor;
          }
        }
      }
    }
    .dropDown-area {
      width: 100%;
      color: #000;
      background: #fff;
      overflow: hidden;
      .area-list {
        display: none;
      }
    }
  }

  .area-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, .7);
  }

  .show {
    display: block !important;
  }

  .line {
    @include border-1px(0px, 1px, px, 0px);
  }

</style>
