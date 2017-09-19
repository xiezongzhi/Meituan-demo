<template>
	<div class="city"  ref="cityWrapper">
		<div class="city-wrapper">
			<div class="back">
			    <div class="content">
			      <div class="icon" @click="back">
			        <span class="iconfont icon-left"></span>
			      </div>
			      <div class="title">
			        选择城市
			      </div>
			    </div>
			</div>
			<div class="cityBox">
				<div class="location-city box">
					定位城市：<span class="city-name">{{currentCity}}</span>	
				</div>
				<div class="s-type">
					<h3>最近访问</h3>
					<div class="type-item box">
						<ul class="table">
							<li v-for="item in placeRecord" @click="selected(item)">
								<a href="javascript:;">{{item}}</a>
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
							<li v-for="(letter,index) in letters" @click="seleccity(index)" >
								<a href="javascript:;">{{letter}}</a>
							</li>
							
						</ul>
					</div>
					<div class="type-item box all-city" v-for="cityItem in cityList">
						<ul class="table">
							<h4 id="A">{{cityItem.letter}}</h4>
							<li v-for="cityname in cityItem.list">
								<a href="javascript:;" @click="selected(cityname)">{{cityname}}</a>
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
import { mapState ,mapGetters} from 'vuex'
import {getHotelList,getCityList,getStore,setStore,initCity} from 'common/js/getData'
import {change} from 'common/js/pinying'
	export default{
		data(){
			return{
				letters:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
				cityList:[
					
				],
				placeRecord:[],
				localcity:''
			}
		},
		created(){
			this.$store.commit('SET_LOADING',true)
			this.getCity()
			this.initRecord()
		},
		methods:{
			seleccity(index){
				let select = this.$refs.cityWrapper.getElementsByClassName('all-city')
				this.cscroll.scrollToElement(select[index], 300);
			},
			 back(){
        		 this.$router.back()
            },
	        selected(city){
	        	let history = getStore('placerecord');
                let choosePlace = city;
                if (history) {
                    let checkrepeat = false;
                    this.placeRecord = JSON.parse(history);
                    this.placeRecord.forEach(item => {
                        if (item == city) {
                            checkrepeat = true;
                        }
                    })
                    if (!checkrepeat) {
                        this.placeRecord.push(choosePlace)
                    }
                }else {
                	this.placeRecord = [];
                    this.placeRecord.push(choosePlace)
                }
                setStore('placerecord',this.placeRecord)
	        	this.$router.push({path:'/home'});
	        	this.$store.commit('SET_SELECT_CITY',city)
	        },
	        getCity(){
	        	// initCity().then((res)=>{
	         //      this.localcity = res.data.body.replace('市','')
	         //    })

	        	getCityList().then((res)=>{
	        		let list =res.data.body;
	        		
	        		 this.cityList=change(list)
	        		 this.$store.commit('SET_LOADING',false)
	        		 


	        	})

	        },
	        initRecord(){
	        	if (getStore('placerecord')) {
                    this.placeRecord = JSON.parse(getStore('placerecord'));
                }else{
                    this.placeRecord = ['无记录'];
                }
	        }
		},
		mounted(){
			this.$nextTick(()=>{
				this.cscroll = new BScroll(this.$refs.cityWrapper,{click:true})			
			})
		},
		computed:{
	        ...mapGetters([
	           'currentCity'

	        ])
     	},
     	watch:{
     		cityList(){
     			this.$nextTick(()=>{
     				this.cscroll.refresh()
     			})

     		}
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
		z-index: 999;
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
								overflow: hidden;
								white-space:nowrap;
								text-overflow: ellipsis;

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