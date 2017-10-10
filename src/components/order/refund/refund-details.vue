<template>
	<div class="refund-details">
		<m-header>退款详情</m-header>
		<div class="t-header">
			<p>退款金额<span class="red">18.8元</span></p>
			<p>退回账户<span>支付宝支付帐户</span></p>
			<p>到账时间<span>预计最晚2017年09月22日到账</span></p>
		</div>
		<div class="t-path">
			<h3>退款流程</h3>
			<div class="path-wrapper" :class="act">
				<div class="pro-bar">
					<span class="yuan"><i></i></span>
					<span class="xian"></span>
					<span class="yuan yuan1"><i></i></span>
					<span class="xian xian1"></span>
					<span class="yuan yuan2"><i></i></span>
				</div>
				<div class="path-con">
					<div class="con-item">
						<h4>审核中</h4>
						<p>退款申请已受理，会在1天内完成审核，少部分商品需要2天</p>
						<p>2017-09-14&nbsp;&nbsp;&nbsp;15:13:25</p>
					</div>
					<div class="con-item act-item1">
						<h4>支付宝退款处理</h4>
						<p>审核通过后会将退款申请交至支付宝，支付宝会在1天内完成退款处理</p>
						<p>2017-09-14&nbsp;&nbsp;&nbsp;15:13:25</p>
					</div>
					<div class="con-item act-item2">
						<h4>退款入账（支付宝）</h4>
						<p>支付宝退款处理成功后会在4天内完成入账，将18.8元入账至您的支付宝支付帐户</p>
						<p>2017-09-14&nbsp;&nbsp;&nbsp;15:13:25</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import mHeader from 'base/m-header/m-header'
	export default{
		data(){
			return{
				type:1
		
			}
		},
		computed:{
			act(){
				switch(this.type){
					case 1:
						return;
						break;
					case 2:
						return{
							act1:true
						};
						break;
					case 3:
						return{
							act2:true
						};
						break;	
				}
			}
		},
		components:{
			mHeader
		}
	}
</script>
<style lang="scss" scoped>
@import '~common/style/base.scss';
	.refund-details{
		background:#eee;
		min-height:100%;
		overflow: hidden;
		.back{
			background: #ffa71d;
		}
		.t-header{
			padding: 0 pxToRem(16);
			background:#fff;
			box-shadow: 0 2px 5px rgba(204,204,204,0.3);
			p{
				font-size: pxToRem(14);
				line-height: pxToRem(40);
				color:#000;
				span{
					margin-left:pxToRem(20);
					&.red{
						color: #f36a3f;
					}
				}
			}
		}
		.t-path{
			padding: 0 pxToRem(16);
			background:#fff;
			margin-top: pxToRem(20);
			h3{
				@include border-1px(0,0,1px,0);
				position: relative;
				height: pxToRem(35);
				line-height: pxToRem(35);
				font-weight: normal;
				color: #000;
			}
			.path-wrapper{
				padding-top:pxToRem(15);
				display: flex;
				.pro-bar{
					position:relative;
					flex: 0 0 pxToRem(30);
					span{
						display: inline-block;
					}
					.yuan{
						border-radius: 50%;
						background:#fee1b3;
						width: pxToRem(17);
						height: pxToRem(17);
						padding:pxToRem(3);
						box-sizing:border-box;
						position:absolute;
						left:  pxToRem(7);
						top: 0;
						z-index: 2;
						i{
							display: block;
							background:#fc9a00;
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.yuan1{
						top: pxToRem(112);
						background:#d6d6d5;
						i{
							background:#b3b2b2;
						}

					}
					.yuan2{
						top: pxToRem(223);
						background:#d6d6d5;
						i{
							background:#b3b2b2;
						}
					}
					.xian{
						height: pxToRem(105);
						width: 0;
						@include border-1px(0,1px,0,0);
						position: absolute;
						left: pxToRem(15);
						top: pxToRem(8);
						z-index: 1;

					}
					.xian1{
						top: pxToRem(118);
					}
				}
				.path-con{
					.con-item{
						margin-bottom: pxToRem(30);
						h4{
							font-size: pxToRem(15);
							color: #ffa71d;
							font-weight: normal;
						}
						p{
							margin:pxToRem(5) 0;
							font-size: pxToRem(14);
							color:#000;
							line-height: pxToRem(20);
						}
					}
					.act-item1{
						h4{
							color: #d6d6d6;
						}
						p{
							color:#d6d6d6;
						}
					}
					.act-item2{
						h4{
							color: #d6d6d6;
						}
						p{
							color:#d6d6d6;
						}
					}
					
				}
				&.act1{
					.yuan1{
						background:#fee1b3;
						i{
							background:#fc9a00;
						}
					}
					.xian:after{
						border-color:#fc9a00;
					}
					.xian1:after{
						border-color:#ddd;
					}
					.act-item1{
						h4{
							color: #ffa71d;
						}
						p{
							color:#000;
						}
					}
				}
				&.act2{
					.yuan1,.yuan2{
						background:#fee1b3;
						i{
							background:#fc9a00;
						}
					}
					.xian:after{
						border-color:#fc9a00;
					}
					.act-item1,.act-item2{
						h4{
							color: #ffa71d;
						}
						p{
							color:#000;
						}
					}
				}
			}
		}
	}
</style>