<template>
	<div class="food-rating-tab">
		<div class="tab-item" v-for="(item,index) in items"  @click="change(index)">
			<div class="tab-con"  :class="{active:index==nowIndex}">
				{{item}}
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			items:{
				type:Array
			},
			nowIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			change(index){
				this.$emit('changeIndex',index)
			},
		}
	}
</script>
<style lang="scss">
 @import '../../../common/style/base.scss';
	.food-rating-tab{
		display: flex;
		height: pxToRem(40);
		line-height: pxToRem(40);
		@include border-1px(1px,0,1px,0);
		position: relative;
		.tab-item{
			flex:1;
			text-align: center;
			.tab-con{
				display: inline-block;
				line-height: pxToRem(34);
				padding:0 pxToRem(16);
				font-size: pxToRem(16);
				color: #646464;
				&.active{
					border-bottom: pxToRem(3) solid #ffa71d;
				}
			}
		}
	}
</style>