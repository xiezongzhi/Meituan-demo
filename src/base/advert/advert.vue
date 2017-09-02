<template>
  <div class="advert" v-show="flag">
    <a :href="linkUrl">
      <div class="icon-wrapper" @click.stop.prevent="close">
        <span class="iconfont icon-close icon" ></span>
      </div>
      <img :src="imgUrl" alt="" class="responsive">
    </a>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        flag:true
      }
    },
    props:{
      imgUrl:{
        type:String
      },
      linkUrl:{
        type:String,
        default: '#'
      }
    },
    methods:{
      close(){
        this.flag=false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .advert{
    a{
      display: block;
      position: relative;
      .icon-wrapper{
        position: absolute;
        left: pxToRem(2);
        padding: pxToRem(6);
        top:pxToRem(2);
        .icon{
          display: inline-block;
          width: pxToRem(20);
          height:pxToRem(20);
          text-align: center;
          line-height: pxToRem(21);
          font-size:pxToRem(14);
          color: #fff;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
        }
      }
    }
  }
</style>
