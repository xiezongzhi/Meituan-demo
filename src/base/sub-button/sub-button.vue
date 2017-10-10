<template>
  <div class="pay">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .pay {
    width: 100%;
    text-align: center;
    button {
      width: 100%;
      height: pxToRem(40);
      font-size: pxToRem(13);
      color: #fff;
      border: 0px;
      border-radius: 20px;
      background: #ffa71d;
      outline: none;
      &:focus {
        background: #FF941C;
      }
    }
  }
</style>
