<template>
	<scroll class="wrapper" :data="gg" :pullup="true" :pulldown="true" @scrollToEnd="loadData" @pulldown="loadData2">
	<div>
		<div class="loading-wrapper" v-show="gg.flag1" >{{gg.atext}}</div>
		<ul>
			<li v-for="item in gg.items">{{item.title}}</li>
			
		</ul>
		<div class="loading-wrapper" v-show="gg.flag" >{{gg.jiazai}}</div>
	</div>
		
		
	</scroll>
</template>
<script>
import scroll from './cscroll'
	export default{
		data(){
			return{
				gg:{
					items:[],
					pulldown:true,
					size:20,
					flag:false,
					atext:'ssdfsdf',
					jiazai:'加载更多',
					dd:1,
					offset:0,
					totalCount:100
				}
				
			}
		},
		methods:{
			loadData(){
				if(this.gg.dd==1){
					this.gg.dd=0;
					let _this = this;
					this.gg.offset += 3;
					this.$http.post('/topics',{offset:this.gg.offset})
					.then((res)=>{
						let datalength = res.data.data.length;
						this.gg.size+=2;
						_this.gg.items = res.data.data.slice(0,this.gg.size)
						console.log(_this.gg.items)
						_this.gg.dd=1

					})
				}
				
				
			},
			loadData1(){
				
				let _this = this;
				this.$http.get('/topics')
				.then((res)=>{
					_this.gg.items = res.data.data.slice(0,20)
					_this.$nextTick(()=>{
						_this.gg.flag = true;
					})
				})
					
				
			},
			loadData2(){
				let _this = this;
				this.$http.get('/topics')
				.then((res)=>{
					console.log(res.data.data)
					_this.gg.items = res.data.data.slice(0,20);
				
				})
			}
		},
		created(){
			this.loadData1()
		},
		components:{
			scroll
		}
	}
</script>
<style lang="scss">
.wrapper{
	overflow:hidden;
	height: 100%;
	
}
ul li{color: #000;line-height:40px;}
.loading-wrapper{color:#000;font-size:30px;}
</style>