<template>
	<div class="hotel-booking">
		<h3 class="title">酒店预订</h3>
		<div class="date">
			<div class="in-out-date">
				<p class="in-out">入住</p>
				<p><span>6月29日</span>周五</p>
			</div>
			<div class="all-date">
				<span>共1晚</span>
			</div>
			<div class="in-out-date">
				<p class="in-out">退房</p>
				<p><span>6月30日</span>周六</p>
			</div>
		</div>
		<div class="booking-list" >
			<div class="list-item" v-for="item in booking.items">
				<div class="list-left">
					<div class="list-img">
						<img :src="item.img">
					</div>
					<div class="list-con">
						<h3>{{item.size}}</h3>
						<p class="config">
							<span v-for="config in item.configs">{{config}}</span>
						</p>
						<p class="price">￥{{item.price}}</p>
					</div>
				</div>
				<div class="list-right">
					<p>仅剩{{item.surplus}}间</p>
					<a href="javascript:;" @click="tiao">预定</a>
				</div>
			</div>
		</div>
	</div>

</template>
<script>

	export default{
		data(){
			return{
				booking:{
					items:[
						{
							img:require('./list-img.jpg'),
							size:'标准大床房',
							configs:['大床','有窗','不含早'],
							price:'528',
							surplus:2

						},
						{
							img:require('./list-img.jpg'),
							size:'标准大床房',
							configs:['大床','有窗','不含早'],
							price:'528',
							surplus:2

						},
						{
							img:require('./list-img.jpg'),
							size:'标准大床房',
							configs:['大床','有窗','不含早'],
							price:'528',
							surplus:2

						},
						{
							img:require('./list-img.jpg'),
							size:'标准大床房',
							configs:['大床','有窗','不含早'],
							price:'528',
							surplus:2

						}
					]
				}
			}
		},
		methods:{
			tiao(){
				alert(1111)
			}
		},
		components:{
    }
	}
</script>
<style lang="scss" scoped>
 @import '../../../common/style/base.scss';
	.hotel-booking{

		.title{
			font-size: pxToRem(12);
			color: #646464;
			text-align: center;
			height: pxToRem(30);
			line-height: pxToRem(30);
			position:relative;
			@include border-1px(1px,0,1px,0);
		}
		.date{
			display: flex;
			align-items:center;
			padding: pxToRem(10) 0;
			@include border-1px(0,0,1px,0);
			position:relative;
			div{
				flex:1;
				text-align: center;
				&.in-out-date{
					p{
						color: #9b9b9b;
						font-size: pxToRem(10);
						&.in-out{

							margin-bottom: pxToRem(7);
						}
						span{
							padding-right:pxToRem(4);
							color: #646464;
							font-size: pxToRem(12);
						}

					}

				}
				&.all-date{
					span{
						display: inline-block;
						border:1px solid #ffa71a;
						border-radius:pxToRem(10);
						width: pxToRem(44);
						height: pxToRem(17);
						font-size: pxToRem(10);
						line-height: pxToRem(17);
						color: #ffa71a;
					}
				}
			}
		}
		.booking-list{
			.list-item{
				display: flex;
				justify-content: space-between;
				align-items:center;
				padding:pxToRem(8) pxToRem(6);
				@include border-1px(0,0,1px,0);
				position:relative;
				.list-left{
					display: flex;
					align-items:center;
					.list-img{
						flex:0 0 pxToRem(62);
						margin-right: pxToRem(13);
						img{
							width: 100%;
							height: 100%;
						}
					}
					.list-con{
						h3{
							font-size: pxToRem(12);
							color: #646464;
						}
						p{
							&.config{
								margin:pxToRem(13) 0;
								font-size: pxToRem(10);
								color: #9b9b9b;
								span{
									display:inline-block;
									padding:0 pxToRem(5);
									@include border-1px(0,0,0,1px);
									position:relative;
									&:first-of-type{
										padding-left:0;
										@include border-1px(0,0,0,0);
									}
								}
							}
							&.price{
								font-size: pxToRem(16);
								color: #ff6d34;
								font-weight: bold;
							}
						}
					}
				}
				.list-right{
					text-align: center;
					p{
						font-size:pxToRem(8);
						color:#cc1e1e;
						margin-bottom: pxToRem(2)
					}
					a{
						font-size:pxToRem(12);
						color: #fff;
						display: inline-block;
						background: #ffa71a;
						width: pxToRem(55);
						height: pxToRem(24);
						line-height: pxToRem(24);
						border-radius:pxToRem(12)

					}
				}
			}

		}
	}
  /*.bookListWrapper{*/
    /*top:pxToRem(296);*/
    /*bottom:0;*/
  /*}*/
</style>
