<template>
	<div class="hotel-filter">
		<!--<div class="filter-item">-->
      <listHeader :titles="names" :isLine="true" :top="0" moveTop="true"  class="listHeader">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </listHeader>
		<!--</div>-->
	</div>
</template>

<script >
  import listHeader from "base/list-header/list-header.vue";
	export default{
      data(){
          return{
              names:['全城','价格','智能排序','筛选']
          }
      },
    components:{
      listHeader
    }
	}
</script>

<style lang="scss" scoped>
 @import '../../../common/style/base.scss';
.hotel-filter{
	display: flex;

	border-bottom:pxToRem(0.5) solid #d2d2d2;
	.filter-item{
		flex:1;
		text-align: center;
		font-size:pxToRem(13);
		color: #818181;
		height: pxToRem(34);
		line-height: pxToRem(30);
		box-sizing:border-box;
		padding: pxToRem(4);
		a{
			width: 100%;
			height: 100%;
			display: block;
			border-right:pxToRem(0.5) solid #d2d2d2;

		}
		&:last-of-type a{
			border-right:none
		}
	}
}
  .listHeader{
    margin-top: pxToRem(87);
  }
</style>
