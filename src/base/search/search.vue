<template>
	<div class="search">
		<mHeader>搜索</mHeader>
		<div class="search_form">
			<div class="search_box">
				<i class="iconfont icon-fangdajing"></i>
				<input type="text" class="search_input" placeholder="输入商户名，地名或菜名" @input="getSearchList(keyword)" v-model="keyword">
				<i class="iconfont icon-close"></i>
			</div>
			<button class="commit">提交</button>
		</div>
		<div class="search_list">
			<div class="search_suggestion">
				<ul>
					<li v-for="item in searchList">
						<i class="iconfont icon-fangdajing"></i>
						<span>{{item.title}}</span>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import mHeader from 'base/m-header/m-header'
import {getSearchList} from 'common/js/getData'
	export default{		
		data(){
			return{
				keyword:'',
				searchList:[]
			}
		},
		methods:{
			getSearchList(str){
				if(str){
					getSearchList(str).then((res)=>{
						this.searchList = res.data.body
					})
				}else{
					this.searchList =[]
				}
				
			}
		},
		components:{
			mHeader
		}
	}
</script>
<style lang="scss" scoped>
@import '../../common/style/base.scss';
	.search{
		width: 100%;
		background:#f0efed;
		color: #333;
		font-size: pxToRem(14);
		height: 100%;
	
		.back{
			background: #ff9d00;
		}
		.search_form{
			height: pxToRem(35);
			line-height: pxToRem(35);
			margin:pxToRem(10);
			display: flex;
			.search_box{
				background:#fff;
				border-radius: pxToRem(4);
				flex: 0 0 pxToRem(270);
				margin-right: pxToRem(15);
				display: flex;

				.iconfont{
					font-size: pxToRem(20);
					padding: 0 pxToRem(10)
					
				}
				.search_input{
					flex: 1;
					padding:pxToRem(5);
					outline: none;
				}
			}
			.commit{
				flex: 1;
				border-radius:pxToRem(3);
				border:1px solid #ccc;
				color: #999;
			}
			
		}
		.search_list{
			.search_suggestion{
				background:#fff;
				ul{
					li{
						padding:0 pxToRem(10);
						height: pxToRem(35);
						line-height: pxToRem(35);
						color: #999;
						@include border-1px(0,0,1px,0);
						position: relative;
					}
				}
			}
		}
	}
</style>