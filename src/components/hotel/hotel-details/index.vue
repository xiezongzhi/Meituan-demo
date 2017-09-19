<template>
  <Scroll :data="[]" class="hotelDetailWrapper" >
	<div class="hotel-details-page" v-if="hotelDetail.hotel_info">
		<div class="hotel-img-head" >
			<img :src="imgUrl+hotelDetail.hotel_info.img">
			<i class="iconfont icon-left_y" @click="back"></i>
			<h3>{{hotelDetail.hotel_info.name}}</h3>
		</div>
		<split1></split1>
		<hotelService :hotelDetail="hotelDetail"></hotelService>
		<split1></split1>
		<div class="addr" @click="showMap(113.56372,22.270379)">
			<span>{{hotelDetail.hotel_info.address}}</span>
			<span>地图 <i class="iconfont icon-right"></i></span>
		</div>
		<split1></split1>
		<hotelBooking></hotelBooking>
	</div>
	<transition name="slide">
		<div class="map" v-show="isshow">
			<div id="allmap"></div>
			<i class="iconfont icon-left_y" @click="isshow = !isshow"></i>
		</div>
	</transition>
	
  </Scroll>
</template>
<script>
import split1 from '@/base/split1'
import hotelService from 'components/hotel/hotel-details/hotel-service'
import hotelBooking from 'components/hotel/hotel-details/hotel-booking'
import Scroll from 'base/scroll/scroll'
import {getHotelDetail} from '../../../common/js/getData'
import {root} from '../../../common/js/config';

	export default{
		data(){
			return {
				isshow:false,
				imgUrl:root+'/Public/uploads/food_merchants/',
				hotelDetail:{}
			}
		},
		created(){
			this.getHotel()
		},
	    methods:{
	        back(){
	            this.$router.back();

	        },
	        showMap(lng,lat){
	        	this.isshow = true;
	        	this.$nextTick(()=>{
	        		this.initMap(lng,lat)
	        	})
	        	
	        },
	        initMap(lng,lat){
	        	var map = new BMap.Map("allmap");
				map.enableScrollWheelZoom(true);
				var point = new BMap.Point(lng,lat);
				map.centerAndZoom(point,16); 
				function resetCenter(){
				    map.setCenter(point)
				    var marker = new BMap.Marker(point);           
				    map.addOverlay(marker);
				    map.panTo(point)
				    map.removeEventListener("tilesloaded",resetCenter);
				}
				map.addEventListener("tilesloaded",resetCenter);
				
	        },
	        getHotel(){
	        	getHotelDetail(this.$route.query.mer_id).then((res)=>{
	        		this.hotelDetail = res.data.body
	        		console.log(res)
	        	})
	        }
	        
	    },
	    mounted(){
	    },
		components:{
			split1,
			hotelService,
			hotelBooking,
	  		Scroll
		}
	}
</script>
<style lang="scss" scoped>
 @import '../../../common/style/base.scss';
	.hotel-details-page{
    background: #fff;
		.hotel-img-head{
			// background: url('./hotel-img-head.jpg') no-repeat center /cover;
			height: pxToRem(185);
			position: relative;
			overflow: hidden;
			.iconfont{
				position: absolute;
				top: pxToRem(8);
				left:pxToRem(15);
				font-size: pxToRem(22);
				color: #626477;
			}
			h3{
				position: absolute;
				bottom: pxToRem(11);
				left: pxToRem(16);
				color: #fff;
			},
			img{
				width: 100%;
			}
		}
		.addr{
			display: flex;
			justify-content:space-between;
			font-size: pxToRem(11);
			height: pxToRem(30);
			line-height: pxToRem(30);
			padding:0 pxToRem(6);
			color: #646464;
		}
	}
  .hotelDetailWrapper{
    .seize-seat{
      background: red;
    }
  }
  .map{
  	position:fixed;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  	#allmap{
  		height: 100%
  	}
  	.iconfont{
  		position:absolute;
  		top:pxToRem(14);
  		left: pxToRem(14);
  		font-size: pxToRem(22)
  	}
  }

</style>
