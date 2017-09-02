<template>
	<div class="hotel-service">
		<div class="hotel-service-left">
			<span><i class="wifi icon"></i>无线网络</span>
			<span><i class="park icon"></i>停车服务</span>
			<span><i class="restaurant icon"></i>餐饮服务</span>
			<span><i class="clock icon"></i>叫醒服务</span>
			<span><i class="laundry icon"></i>洗衣服务</span>
			<span><i class="aircraft icon"></i>接机服务</span>
			<span><i class="luggage icon"></i>行李寄存</span>
		</div>
		<div class="hotel-service-right">
			<span class="score">4.9分</span>
			<span class="comment">1234条评论</span>
		</div>
	</div>
</template>
<script>
	export default{}
</script>
<style lang="scss" scoped>
 @import '../../../common/style/base.scss';
	.hotel-service{
		padding: pxToRem(5) 0;
		display: flex;
		position:relative;
		@include border-1px(1px,0,1px,0);
		.hotel-service-left{
			flex:0 0 pxToRem(584/2);
			display: flex;
			flex-wrap: wrap;
			position:relative;
			@include border-1px(0,1px,0,0);
			span{
				padding:0 pxToRem(6);
				font-size: pxToRem(11);
				color: #9b9b9b;
				margin:pxToRem(6) 0;
				display: inline-block;
				.icon{
					display: inline-block;
					width: pxToRem(15);
					height: pxToRem(15);
					background-repeat:no-repeat;
					background-position:center;
					background-size:cover; 
					vertical-align: middle;
					margin-top: pxToRem(-1);
					margin-right: pxToRem(1);
					&.wifi{
						background-image: url('wifi.png');
					}
					&.park{
						background-image: url('park.png');
					}
					&.restaurant{
						background-image: url('restaurant.png');
					}
					&.clock{
						background-image: url('clock.png');
					}
					&.laundry{
						background-image: url('laundry.png');
					}
					&.aircraft{
						background-image: url('aircraft.png');
					}
					&.luggage{
						background-image: url('luggage.png');
					}

				}
				
			}
		}
		.hotel-service-right{
			flex: 1;
			span{
				display: block;
				text-align: center;
				font-size: pxToRem(10);
				color: #9b9b9b;
				&.score{
					color: #ffa71a;
					font-size: pxToRem(15);
					line-height: pxToRem(28);
					font-weight: bold;
				}
			}
		}
	}
</style>