<template>
	<div class="rating"  ref="rating">
		<div class="rating-list">
			<div class="rating-list-item" v-for="food in foods">
				<div class="avater">
					<img :src="food.avater">
				</div>
				<div class="item-con">
					<h3 class="username">{{food.username}}</h3>
					<p class="score">评分：<star :score="food.score"></star></p>
					<p class="rating-text">评价：{{food.rating}}</p>
					<div class="img-list-wrapper" ref="wrapper">
						<ul class="img-list" ref="imgList">
							<li v-for="(img,index) in food.imgList">
								<img :src="img">
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import star from 'base/star/star'
import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				foods:[
					{
						avater:require('./avater.jpg'),
						username:'刘德华',
						score:4,
						rating:'一般般吧，太贵了',
						imgList:[
							require('./food-img.jpg'),
							require('./food-img.jpg'),
							require('./food-img.jpg'),
							require('./food-img.jpg'),
							require('./food-img.jpg'),
							require('./food-img.jpg'),
						]

					},
					{
						avater:require('./avater.jpg'),
						username:'刘德华',
						score:2,
						rating:'一般般吧，太贵了',
						imgList:[
							require('./food-img.jpg'),
							require('./food-img.jpg'),
							require('./food-img.jpg'),

						]

					},
					{
						avater:require('./avater.jpg'),
						username:'刘德华',
						score:5,
						rating:'一般般吧，太贵了',
						imgList:[
							require('./food-img.jpg'),
							require('./food-img.jpg'),
						]

					},
					{
						avater:require('./avater.jpg'),
						username:'刘德华',
						score:4.5,
						rating:'一般般吧，太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了太贵了,太贵了太贵了太贵了',
						imgList:[
							require('./food-img.jpg'),
						]

					}
				]
			}
		},
		methods:{
			refresh(){
				this.$nextTick(() => {
			        if (!this.scroll) {
			            this.scroll = new BScroll(this.$refs.rating, {
			              click: true
			            });
			        } else {
			            this.scroll.refresh();
			        }

		        });
		        // this.getimgwidth()
			},
			// getimgwidth(){
			// 	let picWidth = 70;
			// 	let margin = 6;
			// 	let width = (picWidth + margin) * this.foods.imgList.length - margin;
			// 	this.$refs.imgList.style.width = width/37.5 + 'rem';

			// }
		},
		components:{
			star,
		}
	}
</script>
<style lang="scss">
 @import '../../../common/style/base.scss';
	.rating-list{
		padding: 0 pxToRem(7);
		overflow: hidden;
		.rating-list-item{
			display: flex;
			@include border-1px(0,0,1px,0);
			position: relative;
			padding: pxToRem(11);
			.avater{
				flex: 0 0 pxToRem(50);
				width: pxToRem(50);
				margin-right: pxToRem(7);
				img{
					width: pxToRem(39);
					height: pxToRem(39);
					border-radius: 50%;
				}
			}
			.item-con{
				flex:1;
				overflow: hidden;
				.username{
					color: #646464;
					font-size: pxToRem(14);
					font-weight: normal;
				}
				.score{
					font-size: pxToRem(12);
					color: #969696;
					margin: pxToRem(9) 0;
					.star{
						display: inline-block;
						vertical-align: middle;
					}
				}
				.rating-text{
					font-size: pxToRem(12);
					color: #969696;
					line-height: pxToRem(14);
				}
				.img-list-wrapper{
					overflow-x: auto;
					width: 100%;
					margin-top: pxToRem(10);
					.img-list{
						li{
							margin-right: pxToRem(6);
							display: inline-block;
							img{
								width:pxToRem(70);
								height: pxToRem(70);
								border-radius: pxToRem(3);
								vertical-align: top;
							}
						}
					}
				}


			}
		}
	}
</style>
