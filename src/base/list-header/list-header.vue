<template>
  <div class="list-header":style="{'top':top/37.5+'rem'}" >
    <div class="content">
      <ul class="list">
        <li class="item" v-for="(item,index) in titles" @click="toggle(index)" :class="{'line':isLine}">
          {{item}} <span class="iconfont icon-bottom"></span>
        </li>
      </ul>
      <div class="dropDown-area">
        <div class="spec"></div>
      <slot></slot>
      </div>
    </div>
    <div class="area-bg" v-show="isShow" @click.stop.prevent="_hide($event)"  @touchmove="touchMove($event)">
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  let ICONCLASS_1='icon-bottom';
  let ICONCLASS_2='icon-top';
  export default{
    data(){
      return{
        count:0,
        flag:true,
        isShow:false
      }
    },
    props:{
      top:{
        type:Number,
        default:0
      },
      isLine:{
        type:Boolean,
        default:true
      },
      titles:{
        type:Array,
        default(){
          return [1,2,3,4]
        }
      }
    },
    methods:{
      touchMove(){
        $('.list-header').removeClass('move-top');
        $('.dropDown-area :not(.spec)').removeClass('show');
        $('.item .iconfont').addClass(ICONCLASS_1);
        this.isShow=false;
      },
      toggle(index){
        let areaObj= $('.dropDown-area :not(.spec)');
        let iconObj=$('.item .iconfont');
        if(areaObj.eq(index).hasClass('show')){
          areaObj.get(index).flag=false;
        }
        else{
          areaObj.get(index).flag=true;
        }
        areaObj.siblings().removeClass('show');
        iconObj.addClass(ICONCLASS_1);
        $('.list-header').addClass('move-top');
        if(areaObj.get(index).flag){
          areaObj.eq(index).addClass('show');
          iconObj.eq(index).addClass(ICONCLASS_2);
          iconObj.eq(index).removeClass(ICONCLASS_1);
        }
        this.isShow=true;
        this.$emit('goTop')
      },
      _hide(){
        $('.list-header').removeClass('move-top');
        $('.dropDown-area :not(.spec)').removeClass('show');
        $('.item .iconfont').addClass(ICONCLASS_1);
        this.isShow=false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .list-header{
    z-index: 9;
    width: 100%;
    .content {
      position: relative;
      top:0px;
      width: 100%;
      z-index: 999;
      background: #fff;
      .list {
        position: relative;
        padding: pxToRem(4) 0;
        @include border-1px(1px, 0px, 1px, 0px);
        display: flex;
        justify-content: center;
        align-items: center;
        .item {
          flex: 1px;
          position: relative;
          padding: pxToRem(6) pxToRem(0);
          text-align: center;
          font-size: pxToRem(14);
          color: #969696;
        }
      }
    }
    .dropDown-area {
      width: 100%;
      color: #000;
      background: #fff;
      overflow: hidden;
      * {
        display: none;
      }
    }
  }
  .area-bg{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index:99;
    background: rgba(0, 0, 0, .7);
  }
  .show{
    display: block !important;
  }
  .line{
    @include border-1px(0px, 1px, px, 0px);
  }
  .move-top{
    position: fixed ;
  }
</style>
