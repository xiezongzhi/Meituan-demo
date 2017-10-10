<template>
	<div class="refund-index">
		<m-header>申请退款</m-header>
		<div class="t-header">退款成功后，购买所获得的积分将会被扣除。</div>
		<div class="refund-index-item">
			<div class="item-title">订单密码 <span>（可多选）</span></div>
			<div class="check-item" v-for="item in passwordList">
				<div class="check-wrapper">
					<span>{{item.text}}</span>
					<label>
						<i class="check-box" :class="{gou:password.indexOf(item.id)!=-1}"></i>
						<input type="checkbox"  v-model="password" :value="item.id" >
					</label>
				</div>
			</div>
		</div>
		<div class="refund-index-item">
			<div class="item-title">退还内容：</div>
			<div class="check-item">
				<div class="check-wrapper">
					<span>现金 : <em class="orange">18.8元</em></span>
				</div>
			</div>
		</div>
		<div class="refund-index-item">
			<div class="item-title">现金退还方式 </div>
			<div class="check-item">
				<div class="check-wrapper">
					<span>原路退回 <em class="red">（1-7个工作日内退款到原支付方）</em></span>
					<label>
						<i class="check-box" :class="{gou:mode}"></i>
						<input type="checkbox"  v-model="mode" >
					</label>
				</div>
			</div>
		</div>
		<div class="refund-index-item">
			<div class="item-title">退款原因 <span>（至少选一项）</span></div>
			<div class="check-item" v-for="(item,index) in reasonList">
				<div class="check-wrapper">
					<span>{{item.text}} </span>
					<label>
						<i class="check-box" :class="{gou:reason.indexOf(item.id)!=-1}"></i>
						<input type="checkbox" :value="item.id" v-model="reason" >
					</label>
				</div>
			</div>
		</div>
		<div class="refund-btn">
			确认退款
		</div>
	</div>
</template>
<script>
import mHeader from 'base/m-header/m-header'
	export default{
		data(){
			return{
				reasonList:[
					{id:1,text:'预约不上'},
					{id:2,text:'商家营业但不接待'},
					{id:3,text:'用现金/刷卡/微信/支付宝支付了团购价'},
					{id:4,text:'用现金/刷卡/微信/支付宝支付了团购价'}
				],
				passwordList:[
					{id:1,text:'密码1 : 0255****6211'},
				],
				mode:false,
				reason:[],//选中的id
				password:[],
				isgou:false
			}
		},
		methods:{
		},
		components:{
			mHeader
		}
	}
</script>
<style lang="scss" scoped>
@import '~common/style/base.scss';
.refund-index{
	background:#eee;
	min-height:100%;
	overflow: hidden;
	.back{
		background:#ffa71d;
	}
	.t-header{
		background:#fef4e5;
		height: pxToRem(30);
		line-height: pxToRem(30);
		font-size: pxToRem(12);
		text-align: center;
		color: #57544e;
		box-shadow: 0 2px 5px rgba(204,204,204,0.3);
	}
	.refund-index-item{
		margin-top: pxToRem(25);
		box-shadow: 0 2px 5px rgba(204,204,204,0.3);
		.item-title{
			font-size: pxToRem(14);
			color: #313030;
			margin-bottom: pxToRem(6);
			padding-left: pxToRem(15);
			span{
				color: #8e8d8d;
				font-size: pxToRem(11);
			}
		}
		.check-item{
			padding:0 pxToRem(15);
			background:#fff;
			height: pxToRem(35);
			line-height: pxToRem(35);
			color:#757575;
			&:last-of-type{
				.check-wrapper{
					@include border-none();
				}
			}
			.check-wrapper{
				display: flex;
				justify-content:space-between;
				align-items:center;
				position: relative;
				@include border-1px(0,0,1px,0);
				span{
					font-size: pxToRem(12);
					.orange{
						color: #ffa71d;
						font-size: pxToRem(12);
					}
					.red{
						color: #f36a3f;
						font-size: pxToRem(11);
					}
				}
				label{
					width: pxToRem(15);
					height: pxToRem(15);
					padding: pxToRem(10);
					position: relative;
					input{
						opacity: 0;
						display: inline-block;
						width: pxToRem(15);
						height: pxToRem(15);
						position:absolute;
						left: pxToRem(10);
						top: pxToRem(10);
					}
					.check-box{
						background:#eee;
						width: pxToRem(15);
						height: pxToRem(15);
						display: inline-block;
						position:absolute;
						left: pxToRem(10);
						top: pxToRem(10);
						&.gou{
							background: url(./gou.png) center /100%;
						}
					}
				}
				
			}
			
		}

	}
	.refund-btn{
		text-align: center;
		margin:pxToRem(45) auto;
		width: pxToRem(150);
		height: pxToRem(45);
		line-height: pxToRem(45);
		background: #ffa71d;
		color: #fff;
		font-size: pxToRem(18);

	}
}
	
</style>