<template>
  <div class="hotel-list-wrapper" ref="wrapper">
    <div class="hotel-list-con" v-if="hotelList.length!==0">
      <router-link  v-for="item in hotelList" :to="{path:'/home/hotel/hotelDetails',query:{mer_id:item.mer_id}}">
        <div class="list-item"  >
          <div class="hotel-img">
            <img :src="imgUrl+item.img">
          </div>
          <div class="hotel-details" >
            <h3 class="title">{{item.title}}</h3>
            <p class="ratings"><span>4.8分</span><span>548条评论</span><span>三星级</span></p>
            <p class="adr">{{item.adr}}</p>
            <p class="price"><em>￥{{item.price}}</em>起 <i><span class="iconfont icon-left"></span>{{item.distance}}</i></p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="zan" v-else>暂无数据</div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {getHotelList} from '../../../common/js/getData'
  import {root} from '../../../common/js/config';

  export default{
    data(){
      return{
        hotelList:[],
        imgUrl:root+'/Public/uploads/food_merchants/',
        mer_id:''
      }
    },
    created(){
      this.initHotelList()
    },
    computed:{
      hotelDate () {
        return this.$store.getters.hotelDate
      }
    },
    methods:{
      initHotelList(){
        let parm = {
          geotable_id:175512,
          region:this.$route.query.city,
          filter:`parent_id:2|hour_room:${this.$route.query.hour_room}`

        }
        getHotelList(parm).then((res)=>{
            this.hotelList =res.contents
        })
      }
    },
    mounted(){
      let _this = this;
      this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.wrapper,{click:true});
        


      })
    },




  }
</script>
<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .hotel-list-wrapper{
    overflow:hidden;
    position:absolute;
    top: pxToRem(127);
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
    .zan{
      text-align: center;
      margin-top: pxToRem(30)
    }
  }
</style>
