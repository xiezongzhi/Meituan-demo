<template>
  <div>
	<div class="hotel-booking-index">
		<mHeader>酒店预订</mHeader>
		<div class="wrapper">
			<div class="air"></div>
			<div class="booking-form">
				<div class="booking-tab">
					<div class="tab-item" v-for="(tab,index) in tabs" :class="{active:index==nowIndex}" @click="change(index)">{{tab}}</div>
					<!-- <div class="tab-item">钟点</div> -->
				</div>
				<div class="booking-form-list">
					<div class="form-item city">
						<i class="iconfont icon-map"></i>
						<div class="item-left">
							<span>珠海</span>
							<i class="iconfont icon-right"></i>
						</div>
					</div>
					<div class="form-item date" @click="openByDialog(calendar4)" :value="calendar4.display" v-show="nowIndex==0">
						<i class="iconfont icon-date"></i>
						<div class="item-left">
							<div class="date-box">
								<p>{{this.calendar4.display[0]}}<span>入住</span><span v-show="istrue1">明年</span></p>
								<p>{{this.calendar4.display[1]}}<span>离店</span> <em>共{{days}}晚</em> <span v-show="istrue2">明年</span></p>
							</div>
							<i class="iconfont icon-right"></i>
						</div>
					</div>

					<div class="form-item date" @click="openByDialog(calendar2)" :value="calendar2.display" v-show="nowIndex==1">
						<i class="iconfont icon-date"></i>
						<div class="item-left">
							<div class="date-box">
								<p>{{this.calendar2.display[0]}}<span>入住</span></p>
							</div>
							<i class="iconfont icon-right"></i>
						</div>
					</div>
					<div class="form-item type">
						<i class="iconfont icon-menu"></i>
						<div class="item-left">
							<span>单人房</span>
							<i class="iconfont icon-right"></i>
						</div>
					</div>
					<div class="search">
            <router-link to="/home/hotel/hotelList" >
						<subButton>开始搜索</subButton>
            </router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="ad">
			<advert :imgUrl="imgUrl"></advert>
		</div>
		<transition name="fade">
		    <div class="calendar-dialog" v-if="calendar4.show">
		        <div class="calendar-dialog-mask" ></div>

		        <div class="calendar-dialog-body">
		            <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value" :begin="calendar4.begin" @select="calendar4.select"></calendar>
		            <div class="button" @click="closeByDialog(calendar4)">完成</div>
		        </div>

		    </div>
	    </transition>
	    <transition name="fade">
		    <div class="calendar-dialog" v-if="calendar2.show">
		        <div class="calendar-dialog-mask" ></div>

		        <div class="calendar-dialog-body">
		            <calendar :range="calendar2.range" :zero="calendar2.zero" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" @select="calendar2.select"></calendar>
		            <div class="button" @click="closeByDialog(calendar2)">完成</div>
		        </div>
		    </div>
	    </transition>

	</div>
    <transition name="slide">
    <router-view class="routerView"></router-view>
    </transition>
  </div>
</template>
<script>
import mHeader from 'base/m-header/m-header'
import subButton from 'base/sub-button/sub-button'
import advert from 'base/advert/advert'
import calendar from 'base/calendar/calendar.vue'
	export default{
		data(){
			return{
				imgUrl:require('./ad-img.jpg'),
				calendar4:{
	                display:[],
	                show:false,
	                range:true,
	                zero:true,
	                begin:[2017,8,5],
	                value:[[2017,8,17],[2017,8,18]], //默认日期
	                lunar:false, //显示农历
	                select:(begin,end)=>{
	                    // this.calendar4.show=false;

	                    this.calendar4.value=[begin,end];
	                    this.calendar4.display=[this.formatDate(begin),this.formatDate(end)];
	                    if(parseInt(begin[0])>parseInt(this.calendar4.begin[0])){
	                    	this.istrue1 = true;
	                    }
	                    if(parseInt(end[0])>parseInt(this.calendar4.begin[0])){
	                    	this.istrue2 = true;
	                    }


	                }
	            },
	            calendar2:{
	                display:[],
	                show:false,
	                range:false,
	                zero:true,
	                begin:[2017,8,5],
	                value:[], //默认日期
	                lunar:false, //显示农历
	                select:(value)=>{
	                    // this.calendar2.show=false;
	                    this.calendar2.value=value;
	                    this.calendar2.display=[this.formatDate(value)];
	                }
	            },
	            tabs:['国内','钟点'],
	            nowIndex:0,
	            istrue1:false,
	            istrue2:false
			}
		},
		computed:{
			days(){
				let s1 = this.calendar4.value[0];
				let s2 = this.calendar4.value[1];
				s1 = new Date(s1.join('/'));
				s2 = new Date(s2.join('/'));
				let days = s2.getTime() - s1.getTime();
				let time = parseInt(days / (1000 * 60 * 60 * 24));
				return time
			}
		},
		methods:{
			change(index){
				this.nowIndex=index;
			},
	        openByDialog(calendar){

	            calendar.show=true;

	        },
	        closeByDialog(calendar){
	            calendar.show=false;
	        },
	        getDate(AddDayCount){
	        	let data_t = new Date() ;
	        	data_t.setDate(data_t.getDate()+AddDayCount)
		    	let y = data_t.getFullYear();
				let m = data_t.getMonth()+1;
				let d = data_t.getDate();
				return [y,m,d]
	        },
	        haszero(str){//月份去0
	        	if(str.substr(0,1)==0){
	        		return str.substr(1)
	        	}else{
	        		return str
	        	}
	        },
	        formatDate(date){//格式化日期6月06日
	        	let result = `${this.haszero(date[1].toString())}月${date[2].toString()}日`
	        	return result
	        },
	        setToday(calendar){//设置当前日历选择为今天~明天
	        	let today = this.getDate(0);
		    	let tomorrow = this.getDate(1);
		    	calendar.begin = today;
	        	if(calendar.range){
		    		calendar.value = [today,tomorrow];
		    		calendar.display = calendar.value;
		    		let aa = calendar.display[0];
			    	let bb = calendar.display[1];
			    	calendar.display=[this.formatDate(aa),this.formatDate(bb)]
	        	}else{
	        		calendar.display = [today];
	        		let cc = calendar.display[0];
	        		calendar.display=[this.formatDate(cc)]

	        	}

	        }
	    },
	    created(){
	    	this.setToday(this.calendar4);
	    	this.setToday(this.calendar2);
	    },
		components:{
			mHeader,
			subButton,
			advert,
			calendar
		}
	}
</script>
<style lang="scss">
	 @import '../../../common/style/base.scss';
	 .hotel-booking-index{
	 	background: url('./booking-bg.jpg') no-repeat center top /100%;
	 	height: 100%;
	 	.wrapper{
	 		padding:0 pxToRem(15);
	 		.air{
	 		height: pxToRem(91);
	 		background:url('./air.png') no-repeat center /100%;
		 	}
		 	.booking-form{
		 		padding:0 pxToRem(15);
		 		background:#fff;
		 		.booking-tab{
		 			padding:0 pxToRem(25);
		 			display: flex;
		 			justify-content: space-between;
		 			.tab-item{
		 				width: pxToRem(100);
		 				text-align: center;
		 				color: #646464;
		 				font-size: pxToRem(15);
		 				height: pxToRem(39);
		 				box-sizing:border-box;
		 				line-height: pxToRem(39);
		 				&.active{
		 					border-bottom: pxToRem(2) solid #ffa920;
		 					color: #ffa920;
		 				}

		 			}
		 		}
		 		.booking-form-list{
		 			.form-item{
		 				position: relative;
		 				height: pxToRem(55);
		 				display: flex;
		 				align-items:center;
		 				color: #505050;
		 				font-size: pxToRem(14);
		 				&.date{
		 						height: pxToRem(70);
		 				}
		 				.item-left{
		 					display: flex;
		 					flex:1;
		 					justify-content:space-between;
		 					height: 100%;
		 					align-items:center;
		 					margin-left:pxToRem(16);
		 					position:relative;
		 					@include border-1px(0,0,1px,0);
		 					.date-box{
		 						p{
		 							margin-bottom: pxToRem(12);
		 							&:last-of-type{
		 								margin-bottom: 0;
		 							}
		 							span{
		 								font-size: pxToRem(12);
		 								color: #b4b4b4;
		 								padding:0 pxToRem(4)
		 							}
		 							em{
		 								font-size: pxToRem(12);
		 								color: #fd8b3f;
		 							}
		 						}
		 					}

		 				}
		 				.iconfont{
		 					font-size: pxToRem(16);
		 					color:#b4b4b4;
		 				}
		 			}
		 			.search{

		 				padding:pxToRem(15) 0;
		 			}
		 		}

		 	}
	 	}
	 	.ad{
	 		position:fixed;
	 		bottom:0;
	 		width: 100%;
	 	}
	 	.fade-enter-active,
		.fade-leave-active {
		    transition: all .5s ease-in-out;
		}
		.fade-enter,.fade-leave-active{
		    opacity: 0;
		    transform: translateY(-10px);

		}
		.calendar-dialog{
		    position: absolute;
		    left:0;
		    top:0;
		    right:0;
		    bottom:0;
		}

		.calendar-dialog-mask{
		    background:rgba(0,0,0,.7);
		    width:100%;
		    height:100%;
		}

		.calendar-dialog-body{
		    background: #fff;
		    position: absolute;
		    left:50%;
		    top:50%;
		    transform: translate(-50%,-50%);
		    padding:20px;
		    border: 1px solid #eee;
		    border-radius: 2px;
		    .button{
		    	display: inline-block;
		    	padding:pxToRem(7) pxToRem(14);
		    	background:#ffa71d;
		    	border-radius:pxToRem(3);
		    	color: #fff
		    }
		}


	 }
</style>
