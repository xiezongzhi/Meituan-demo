  <template>
    <div class="my-rating" v-if="info.memberData">
      <div class="headerWrapper">
        <div class="header">
          <div class="back" @click="back">
            <span class="iconfont icon-left"></span>
          </div>
          <div class="user-info">
            <div class="avatar"><img
              :src="imgUrl+info.memberData[0].image"></div>
            <div class="name">{{info.memberData[0].username}}</div>
          </div>
        </div>
      </div>
      <div class="content" >
        <div class="rating-wrapper">
          <div class="titleWrapper">
            <div class="split"></div>
            <div class="title">评论（{{info.count.count}}）</div>
          </div>
          <div class="rating-list" v-if="info">
            <div class="rating-item" v-for="item in info.commList">
              <div class="spec">
                <div class="avatar">
                  <img :src="imgUrl+info.memberData[0].image"
                       alt="">
                </div>
                <div class="con">
                  <div class="top">
                    <span class="name">{{info.memberData[0].username}}</span><span class="time">{{item.ctime}}</span>
                  </div>
                  <div class="bottom">
                    打分
                    <star class="star" :score="Number(item.star_level)"></star>
                    {{item.star_level}}分
                  </div>
                  <p class="ratings">{{item.content}}</p>
                  <div class="seller">
                    <div class="imgWrapper">
                      <img :src="imgUrl+item.mer_img" alt="" class="responsive">
                    </div>
                    <div class="right">
                      <div class="store-name">{{item.mer_name}} <!-- <span class="text">（香洲店）</span> --></div>
                      <div class="serve-name">{{item.goods_name}}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    import star from 'base/star/star'
    import {getMyrating} from 'common/js/getData'
    import {root} from 'common/js/config'
    export default {
      data(){
        return{
          info:{},
          imgUrl:root+'/Public/uploads/food_merchants/',
        }
      },
      created(){
        this.getrating()
      },
      methods:{
        back() {
          this.$router.back()
        },
        getrating(){
           getMyrating().then((res)=>{
            console.log(res.data.body)
              this.info = res.data.body
           })
        }
      },
      components: {
        star
      }
    }
  </script>

  <style lang="scss" >
    @import "~common/style/base";

    .my-rating {
      .headerWrapper{
        height: pxToRem(170);
        .header {
          position: fixed;
          width: 100%;
          background: url("rating-1.jpg") no-repeat center center;
          background-size: 100% 100%;
          z-index: 99;
          .back {
            position: absolute;
            left: pxToRem(15);
            top: pxToRem(15);
            font-size: pxToRem(30);
            font-weight: 800;
          }
          .user-info {
            padding-top: pxToRem(50);
            padding-bottom: pxToRem(31);
            .avatar {
              text-align: center;
              img {
                height: pxToRem(59);
                width: pxToRem(59);
                border-radius: 50%;
                border: pxToRem(2) solid #fff;
              }
            }
            .name {
              margin-top: pxToRem(11);
              text-align: center;
              font-size: pxToRem(15);
              color: #fff;
            }
          }
        }
      }

      .content {
        background: #fff;
        .rating-wrapper {
          .titleWrapper{
            height: pxToRem(38);
            .split{
              position: fixed;
              width: 100%;
              height: pxToRem(8);
              background: #eee;
              z-index: 999;
            }
            .title {
              position: fixed;
              margin-top: pxToRem(8);
              width: 100%;
              line-height: pxToRem(30);
              text-indent: pxToRem(15);
              font-size: pxToRem(13);
              color: #666;
              @include border-1px(0, 0, 1px, 0);
              z-index: 99;
              background: #fff;
            }
          }

          .rating-list {
            padding: 0;
            .rating-item {
              position: relative;
              padding: pxToRem(11) pxToRem(16);
              @include border-1px(0,0,1px,0);
              .spec {
                display: flex;
                .avatar {
                  img {
                    height: pxToRem(33);
                    width: pxToRem(33);
                    border-radius: 50%;
                  }
                }
                .con {
                  flex: 1;
                  margin-left: pxToRem(10);
                  margin-top: pxToRem(5);
                  .top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: pxToRem(13);
                    color: #666;
                    .time {
                      color: #aaa;
                    }
                  }
                  .bottom {
                    display: flex;
                    margin-top: pxToRem(6);
                    align-items: center;
                    font-size: pxToRem(11);
                    color: #aaa;
                    .star {
                      margin-left: pxToRem(5);
                      /*margin-right: pxToRem(5);*/
                      .star-item {
                        width: pxToRem(12);
                        height: pxToRem(12);
                        margin-right: 0.13333rem;
                        background-size: pxToRem(12) pxToRem(12);
                      }
                    }
                  }
                  .ratings {
                    margin-top: pxToRem(15);
                    font-size: pxToRem(11);
                    color: #000;
                  }
                  .seller {
                    display: flex;
                    margin-top: pxToRem(8);
                    padding: pxToRem(7) pxToRem(10);
                    background: #eee;
                    .imgWrapper {
                      margin-right: pxToRem(10);
                      img {
                        height: pxToRem(55);
                        width: pxToRem(70);
                      }
                    }
                    .right{
                      font-size: pxToRem(12);
                      .store-name{
                        margin-top: pxToRem(7);
                        color: #000;
                        .text{
                          color: #777;
                        }
                      }
                      .serve-name{
                        margin-top: pxToRem(22);
                        font-size: pxToRem(10);
                        color: #777;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  </style>
