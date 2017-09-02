<template>
	<div class="hotel-list-wrapper" ref="wrapper">
		<div class="hotel-list-con">
      <router-link to="/home/hotel/hotelList/hotelDetails">
			<div class="list-item" v-for="item in hotel.items">
          <div class="hotel-img">
            <img :src="item.img">
          </div>
          <div class="hotel-details" >
            <h3 class="title">{{item.title}}</h3>
            <p class="ratings"><span>{{item.ratings.score}}分</span><span>{{item.ratings.comment}}条评论</span><span>{{item.ratings.star}}</span></p>
            <p class="adr">{{item.adr}}</p>
            <p class="price"><em>￥{{item.price}}</em>起 <i><span class="iconfont icon-left"></span>{{distance(item.location)}}</i></p>
          </div>
			</div>
      </router-link>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				hotel:{
					items:[
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.528066,22.27196]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							},
							{
								img:require('./hotel-img.jpg'),
								title:'维也纳大酒店',
								ratings:{
									score:4.8,
									comment:548,
									star:'三星级'
								},
								adr:'香洲总站附近',
								price:208,
								location:[113.572755,22.284674]

							}
						],
					dd:''
				}
			}
		},
		computed:{
			// 
		},
		methods:{
			getLocation(){
				let _this = this;
	        	var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){
						_this.hotel.dd =r.point;
						// alert('您的位置：'+r.point.lng+','+r.point.lat);
						// var point = new BMap.Point(r.point.lng,r.point.lat);
						//用所定位的经纬度查找所在地省市街道等信息
			            // var gc = new BMap.Geocoder();
			            // gc.getLocation(point, function(rs){
			            //    var addComp = rs.addressComponents;
			            //    alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);//弹出所在地址
			 
			            // });
			            
					}
					else {
						alert('failed'+this.getStatus());
					}       
				},{enableHighAccuracy: true})
	        },
	        distance(array){
    			let map = new BMap.Map();
    			let lng = this.hotel.dd.lng;
    			let lat = this.hotel.dd.lat;
	            let point1 = new BMap.Point(array[0], array[1]);
			    let point2 = new BMap.Point(lng,lat);

			    let dis = map.getDistance(point1, point2).toFixed(0);

			    return dis>1000?(dis/1000).toFixed(1)+'km':dis+'m'
	        }
		},
		mounted(){
			let _this = this;
			this.$nextTick(()=>{
				this.scroll = new BScroll(this.$refs.wrapper,{click:true});
				this.getLocation()


			})
		},




	}
</script>
<style lang="scss" scoped>
 @import '../../../common/style/base.scss';
.hotel-list-wrapper{
	overflow:hidden;
	position:absolute;
	top: pxToRem(120);
	bottom: 0px;
	width: 100%;
	.hotel-list-con{

		.list-item{
			margin:0 pxToRem(7);
			padding: pxToRem(10) 0;
			border-bottom: pxToRem(0.5) solid #d2d2d2;
			display: flex;
			.hotel-img{
				flex: 0 0 pxToRem(80);
				height: pxToRem(80);
				margin-right: pxToRem(10);
				img{
					width: 100%;
					height: 100%;
				}
			}
			.hotel-details{
				flex: 1;
				.title{
					font-size: pxToRem(15);
					color: #505050;
				}
				p{
					font-size: pxToRem(11);
					color: #505050;
					padding-top:pxToRem(9);
					&.ratings{
						span{
							display: inline-block;
							padding:0 pxToRem(9);
							border-right:pxToRem(0.5) solid #505050;
							&:last-of-type{
								border-right:none;
							}
							&:first-of-type{
								padding-left:0;
							}
						}
					}
					&.price{
						em{
							color: #ff4800;
							font-size: pxToRem(16);
							margin-right: pxToRem(4);
							font-weight: bold;
						}
						i{
							float: right;
							margin-top: pxToRem(2);
						}
					}
				}

			}
		}
	}
}
</style>
