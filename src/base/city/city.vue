<template>
	<div class="city"  ref="cityWrapper">
	<div class="city-wrapper">
		<div class="back">
		    <div class="content">
		      <div class="icon"@click="back">
		        <span class="iconfont icon-left"></span>
		      </div>
		      <div class="title">
		        选择城市
		      </div>
		    </div>
		</div>
		<div class="cityBox">
			<div class="location-city box">
				定位城市：<span class="city-name">{{city}}</span>	
			</div>
			<div class="s-type">
				<h3>最近访问</h3>
				<div class="type-item box">
					<ul class="table">
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="s-type">
				<h3>热门城市</h3>
				<div class="type-item box">
					<ul class="table">
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
						<li>
							<a href="#">珠海</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="s-type">
				<h3>全部城市</h3>
				<div class="type-item box charlist">
					<ul class="table">
						<li v-for="(letter,index) in letters" @click="seleccity(index)">
							<a href="javascript:;">{{letter}}</a>
						</li>
						
					</ul>
				</div>
				<div class="type-item box all-city">
					<ul class="table">
						<h4 id="A">A</h4>
						<li v-for="city in cityList">
							<a href="javascript:;" @click="select(city.name)">{{city.name}}</a>
						</li>
					</ul>
				</div>
				
			</div>

		</div>
	</div>
		
	</div>
</template>
<script>
import mHeader from 'base/m-header/m-header'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
	export default{
		data(){
			return{
				letters:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
				cityList:[
					{
						id:1,
						name:'珠海',
						point:[]
					},
					{
						id:2,
						name:'广州',
						point:[]
					},
					{
						id:3,
						name:'北京',
						point:[]
					}
				]
			}
		},
		methods:{
			seleccity(index){
				let select = this.$refs.cityWrapper.getElementsByClassName('all-city')
				this.cscroll.scrollToElement(select[index], 300);
			},
			back(){
				this.$emit('showCity')
			},
	        select(city){
	        	this.$router.push({path:'/home', query:{city}});
	        	this.$emit('showCity')
	        }
		},
		mounted(){
			this.$nextTick(()=>{
				this.cscroll = new BScroll(this.$refs.cityWrapper,{click:true})			
			})
		},
		computed:{
	        ...mapState({
	            city: state => state.city?state.city:'定位中',

	        })
     	},
		components:{
			mHeader
		}
	}
</script>
<style lang="scss" scoped>
@import '../../common/style/base.scss';
	.city{
		position: fixed;
		top: 0;
		left:0;
		z-index: 999999;
		width: 100%;
		background:#f0efed;
		color: #333;
		font-size: pxToRem(14);
		height: 100%;
		.content{
		    position: relative;
		    height:pxToRem(45 );
		    line-height: pxToRem(45);
		    text-align: center;
		    background: #ff9d00;
		    .icon{
		      position: absolute;
		      left:0;
		      padding:0 pxToRem(15);
		      .iconfont{
		        margin-left: pxToRem(-4);
		        font-size: pxToRem(20);
		        font-weight: bolder;
		        color: #fff;
		      }
		    }
		    .title{
		      font-size: pxToRem(16);
		      color: #835814;
		    }
		 } 
		.cityBox{
			padding: 0 pxToRem(10);
			.box{
				background:#fff;
				border-radius:pxToRem(3);
				
				&.location-city{
					padding:pxToRem(14) pxToRem(10);
					margin: pxToRem(10) 0 pxToRem(20) 0;
					.city-name{
						color: #666;
					}
				}

			}
			.s-type{
				margin: pxToRem(15) 0;
				h3{
					font-weight: normal;
					margin-bottom: pxToRem(5);
				}
				.type-item{
					&.charlist{
						.table{
							li{
								width: 20%;
								@include border-1px(0,0,0,0);
								a{
									color: #ff9d00;
									}
							}
						}
						
					}
					.table{
						@include border-1px(1px,1px,1px,1px);
						position: relative;
						overflow: hidden;
						li{
							width: 25%;
							float: left;
							height: pxToRem(40);
							text-align: center;
							line-height: pxToRem(40);
							@include border-1px(0,1px,1px,0);
							position: relative;
							color: #333;
							a{
								display: block;

							}
						}
						h4{
							height: pxToRem(80);
							line-height: pxToRem(80);
							display: inline-block;
							width: 25%;
							float: left;
							@include border-1px(0,1px,1px,0);
							position: relative;
							text-align: center;
							font-size: pxToRem(40);
							color: #B7B7B7;
						}
					}
				}
			}
		}
		
	}
</style>