<template>
	<div class="collection">
		<m-header :isDeal="true" :name="name" @deal="dele">我的收藏</m-header>
		<tab class="c-tab" :line-width="4" custom-bar-width="60px" active-color='#000' bar-active-color='#ffa71d'>
	      <tab-item :selected="index==nowIndex" v-for="(item,index) in lists" :key="index" @on-item-click="change(index)">{{item}}</tab-item>
	    </tab>
	    <div class="c-list">
	    	<transition name="fade">	
				<div class="seller-list p-list" v-show='nowIndex==0'>
					<div class="list-item" :class="{select:select,selected:item.selected}" @click="clickfun(item,index)" v-for="(item,index) in cList">
						<i class="iconfont icon-selectfill"></i>
						<div class="c-img">
							<img src="./c-img.jpg">
						</div>
						<div class="c-con">
							<div class="title">
								XX推拿（香洲店）
								<div class="dis">
									<i class="iconfont icon-left"></i>
									0.9km
								</div>
							</div>
							<p class="score"><star :score="4"></star><span>4分</span></p>
							<p class="price">￥88起</p>
						</div>

					</div>
				</div>
			</transition>
			<transition name="fade">		
				<div class="group-list p-list" v-show='nowIndex==1'>
					<div class="list-item" :class="{select:select,selected:item.selected}" @click="clickfun(item,index)" v-for="(item,index) in tList">
						<i class="iconfont icon-selectfill"></i>
						<div class="c-img">
							<img src="./c-img.jpg">
						</div>
						<div class="c-con">
							<div class="title">
								XX推拿（香洲店）
								<div class="dis">
									<i class="iconfont icon-left"></i>
									0.9km
								</div>
							</div>
							<p class="score"><star :score="4"></star><span>4分</span></p>
							<p class="price">￥88起</p>
						</div>

					</div>
				</div>
			</transition>	
	    </div>
		<div class="dele-btn" @click="delectItem" >
			删除
		</div>
	</div>
</template>
<script>
import mHeader from 'base/m-header/m-header'
import star from 'base/star/star'
import { Tab, TabItem } from 'vux'
import Vue from 'vue'
	export default{
		data(){
			return{
				lists:['商家','团购'],
				nowIndex:0,
				name:'编辑',
				select:false,
				cList:[
					{dasda:1},
					{dasda:2},
					{dasda:4}
				],
				tList:[
					{dasda:1},
					{dasda:2},
					{dasda:4}
				],
				btn_show:false
			}
			
		},
		created(){
			this.addpro(this.cList);
			this.addpro(this.tList);
		},
		methods:{
			change(index){
				this.nowIndex=index
			},
			dele(){
				if(this.name=='编辑'){
					this.name='完成';
				}else{
					this.name='编辑';
				}
				this.select=!this.select;
				this.addpro(this.cList);
				this.addpro(this.tList);

			},
			clickfun(item, index){
				if(this.select){
		　　　　　　item.selected=!item.selected

				}
			},
			addpro(list){
				this.$nextTick(function () {
	　　　　　　　　list.forEach(function (item) {
	　　　　　　　　　　Vue.set(item,'selected',false);
	　　　　　　　　});
	　　　　　　});
			},
			delectItem(){
				let _this = this;
				if(this.nowIndex==0){
					if(this.cList.length){
						for(let i=this.cList.length-1;i>=0;i--){
							if(_this.cList[i].selected==true){
								_this.cList.splice(i,1)
							}
						}
					}else{
						alert('没有数据')
					}
				}else{
					if(this.tList.length){
						for(let i=this.tList.length-1;i>=0;i--){
							if(_this.tList[i].selected==true){
								_this.tList.splice(i,1)
							}
						}
					}else{
						alert('没有数据')
					}
				}
				
			}

		},
		watch:{
			// nowIndex(){
			// 	this.name='编辑';
			// 	this.select = false;
			// },
			// name(){
			// 	if(this.name=='完成'){
			// 		this.btn_show = true;
			// 	}else{
			// 		this.btn_show = false;
			// 	}
			// }
		},
		components:{
			mHeader,
			star,
			Tab,
    		TabItem,
		}
	}
</script>
<style lang="scss" scoped>
@import '~common/style/base.scss';
	.collection{
		background:#eee;
		min-height:100%;
		.back{
			background: #ffa71d;
		}
		.vux-tab-item{
			color: #737373;
			font-size:pxToRem(16);

		}
		.c-tab{
			margin-bottom: pxToRem(10);
		}
		.c-list{
			position:relative;

		}
		.p-list{
			background: #fff;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			.list-item{
				display: flex;
				align-items:center; 
				padding: pxToRem(10) pxToRem(15);
				@include border-1px(0,0,1px,0);
				position:relative;
				.icon-selectfill{
					font-size: pxToRem(24);
					color: #ffa71d;
					position:absolute;
					display: none;

				}
				.c-img{
					width: pxToRem(70);
					height: pxToRem(55);
					flex: 0 0 pxToRem(70);
					transition: all 0.4s;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.c-con{
					flex: 1;
					margin-left: pxToRem(10);
					.title{
						display: flex;
						justify-content: space-between;
						font-size: pxToRem(14);
						color: #000;
						.dis{
							color: #a8a7a7;
							font-size: pxToRem(12)
						}
					}
					.score{
						font-size: pxToRem(13);
						display: flex;
						align-items:center;
						margin:pxToRem(7) 0;
						&>span{
							margin-left: pxToRem(6);
							margin-top: pxToRem(2);
							color: #ffa71d;
						}
						
					}
					.price{
						font-size:pxToRem(13);
						color: #ffa71d;
					}
					

				}
			}
			.select{
				.c-img{
					margin-left: pxToRem(35);
				}
			}
			.selected{
				background:#e1e1e1;
				.icon-selectfill{
					display: inline-block;
				}
			}
		}
		.dele-btn{
			position:fixed;
			bottom:0;
			left: 0;
			width: 100%;
			background:#ffa71d;
			font-size:pxToRem(16);
			text-align: center;
			height: pxToRem(45);
			line-height: pxToRem(45);
			color: #fff;
		}
	}
</style>