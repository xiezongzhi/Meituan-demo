<template>
  <div class="star" >
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    props: {
      score: {
        type: Number
      }
    },
    computed: {
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .star{
     font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    .star-item{
      width: pxToRem(15);
      height:pxToRem(15);
      margin-right:pxToRem(5);
      background-size: pxToRem(15) pxToRem(15);
      &:last-child{
        margin-right: 0;
      }
      &.on{
        background-image:url('./star_on.png');
      }
      &.half{
        background-image:url('./star_half.png');
      }
      &.off{
        background-image:url('./star_off.png');
      }
    }


  }

</style>
