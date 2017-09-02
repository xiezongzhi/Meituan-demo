<template>
  <div class="loading">
    <img  src="./loading.gif" class="responsive">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="scss" >
  @import '../../common/style/base.scss';
  .loading {
    width: 100%;
    text-align: center;
    .desc {
      line-height: 20px;
      font-size:20px;
      color: #7e8c8d;
    }
  }
</style>
