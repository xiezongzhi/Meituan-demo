<template>
  <div class="leisureFilter-index">
    <div class="header">
      <span class="iconfont icon-left left"></span><div class="middle">
      <input type="text" class="search"  disabled>
      <span class="iconfont icon-fangdajing"></span></div>
      <div class="area right">
        <span class="name">珠海</span> <span class="iconfont icon-bottom"></span>
      </div>
    </div>
    <div class="filter">
        <listHeader :titles="names" :isLine="true" class="listHeader" ref="listHeaderWrapper">
          <div class="area-list all" ref="allListWrapper">
            <ul class="all-list">
              <li class="all-item" v-for="(item,index) in category" :class="{'active':index==allIndex}"
                  @click.stop="selectCategory(index,$event)">
                <div class="left"><span class="iconfont icon-selectfill" v-show="index==allIndex"></span><span
                  class="name">{{item.name}}</span></div>
                <div class="count">{{item.count}}</div>
              </li>
            </ul>
          </div>
          <div class="area-list localCity" ref="localCityWrapper">
            <div class="localCity-wrapper">
              <ul class="localCity-list">
                <li class="localCity-item" v-for="(item,index) in localCity.areaTitle"
                    :class="{'areaActive':index==areaTitleIndex}" @click="selectArea($event,index)" :type="item.type">
              <span class="name">
                {{item.name}}
              </span>
                </li>
              </ul>
            </div>
            <div class="secondStage-dropdown " :class="{'widthActive':areaTitleIndex==2}">
              <ul class="secondStage-list">
                <li class="secondStage-item" :class="{'secondStageActive':index==secondStageIndex}"
                    v-for="(item,index) in localCity.secondStage[areaTitleIndex]"
                    @click="selectSecondStage($event,index)">
                  <span class="name">{{item.name}}</span>
                </li>
              </ul>
            </div>
            <div class="threeStage-dropdown " v-show="areaType==3">
              <ul class="threeStage-list">
                <li class="threeStage-item" v-for="(item,index) in localCity.threeStage[secondStageIndex]"
                    @click="selectThreeStage($event,index)">
                  <span class="name">{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="area-list sort">
            <ul class="sort-list">
              <li class="sort-item" v-for="(item,index) in sort" @click="selectSort(index,$event)"
                  :class="{'active':index==selectSortIndex}">
                <span class="iconfont icon-selectfill" v-show="index==selectSortIndex"></span><span
                class="name">{{item}}</span>
              </li>
            </ul>
          </div>
        </listHeader>
    </div>
    <Scroll :data="[]" class="scroll" :listenScroll="true" >
    <div class="leisure-content">
      <div class="leisure-list" v-for="item in leisureList">
        <div class="list-item">
          <div class="top">
            <div class="image-wrapper" >
              <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%">
            </div>
            <div class="content">
              <div class="item-name">
                {{item.title}}
              </div>
              <div class="item-star">
                <star :score="item.score"></star>
              </div>
              <div class="price">
                <span class="new"><i class="yuan">￥</i>12 </span><span class="old"><i
                class="yuan1">￥</i>12</span>
              </div>
              <div class="rang">
                <span class="num"><{{item.distance}}km</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="team">
              <div class="team-list">
                <div class="team-item">
                  <div class="team-price">￥{{item.teamPrice}}</div>
                  <div class="team-desc">{{item.teamDesc}}</div>
                </div>
              </div>
              <div class="more">
                查看其他项目
              </div>
            </div>
          </div>
          <div class="split">
          </div>
        </div>
      </div>
    </div>
    </Scroll>
  </div>
</template>

<script>
  import listHeader from "base/list-header/list-header.vue";
  import {hasClass, removeClass, addClass} from 'common/js/dom';
  import star from 'base/star/star';
  import Scroll from 'base/scroll/scroll'
  export default {
    data() {
      return {
        allIndex: '',
        areaTitleIndex:'',
        secondStageIndex: 0,
        selectSortIndex: '',
        areaType: '',
        names: ['按摩','全城', '智能排序'],
        localCity: {
          areaTitle: [
            {
              name: '附近'
            },
            {
              name: '高校'
            },
            {
              name: '行政区域',
              type: 3
            },
            {
              name: '机场车站'
            },
            {
              name: '中学'
            },
            {
              name: '景点'
            },
            {
              name: '医院'
            },
            {
              name: '全城'
            }
          ],

          secondStage: [
            [
              {
                name: '1km',
              },
              {
                name: '3km',
              },
              {
                name: '5km',
              },
              {
                name: '10km',
              }
            ],
            [
              {
                name: '北京理工大学珠海学院'
              },
              {
                name: '北京理工大学珠海学院'
              },
              {
                name: '北京理工大学珠海学院'
              },
              {
                name: '北京理工大学珠海学院'
              },
              {
                name: '北京理工大学珠海学院'
              }
            ],
            [
              {
                name: '全部商区'
              },
              {
                name: '香洲区'
              },
              {
                name: '斗门区'
              },
              {
                name: '金湾区'
              },
              {
                name: '横琴新区'
              }
            ],
          ],
          threeStage: [
            [
              {
                name: '拱北'
              },
              {
                name: '拱北'
              },
              {
                name: '拱北'
              },
              {
                name: '拱北'
              },
              {
                name: '拱北'
              }
            ]
          ],
        },
        category: [
          {
            name: '全部',
            count: 1231
          },
          {
            name: '生日蛋糕',
            count: 1231
          },
          {
            name: '自助餐',
            count: 1231
          },
          {
            name: '小吃快餐',
            ount: 1231
          }, {
            name: '日韩料理',
            count: 1231
          },
          {
            name: '西餐',
            count: 1231
          }, {
            name: '聚餐宴请',
            count: 1231
          },
          {
            name: '川湘菜',
            count: 1231
          }, {
            name: '火锅',
            count: 1231
          },
          {
            name: '火锅',
            count: 1231
          }, {
            name: '火锅',
            count: 1231
          },
          {
            name: '火锅',
            ount: 1231
          }, {
            name: '火锅',
            count: 1231
          },
          {
            name: '火锅',
            count: 1231
          }, {
            name: '火锅',
            count: 1231
          },
          {
            name: '火锅',
            ocount: 1231
          }, {
            name: '火锅',
            count: 1231
          },
        ],
        sort: ['智能排序', '离我最近', '好评优先', '人气最高'],
        leisureList:[
          {
            imgUrl:require('./list-1.jpg'),
            title:'xx推拿（香洲店）',
            score:4,
            price:44,
            distance:3,
            teamPrice:23,
            teamDesc:'扶阳去湿艾灸'
          },
          {
            imgUrl:require('./list-1.jpg'),
            title:'xx推拿（香洲店）',
            score:4,
            price:44,
            distance:3,
            teamPrice:23,
            teamDesc:'扶阳去湿艾灸'
          }
        ],
      }
    },
    created() {
      this.areaTitleIndex = this.localCity.areaTitle.length - 1
    },
    watch: {
      names(newValue) {
        this.names = newValue;
      },
      areaType(newValue) {
        this.areaType = newValue;
      }
    },
    methods: {
      selectCategory(index, e){
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[0] = currentName;
        this.allIndex = index;
        this.$refs.listHeaderWrapper._hide();
      },
      selectSort(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[2] = currentName;
        this.selectSortIndex = index;
        this.$refs.listHeaderWrapper._hide();
      },
      selectThreeStage(e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names.splice(1, 1, currentName);
        this.$refs.listHeaderWrapper._hide();
      },
      selectSecondStage(e, index) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.secondStageIndex = index;
        if (this.areaTitleIndex !== 2) {
          this.names.splice(1, 1, currentName);
          this.$refs.listHeaderWrapper._hide();
        }
      },
      selectArea(e, index) {
        this.areaTitleIndex = index;
        this.areaType = e.currentTarget.getAttribute('type');
      }
    },
    components: {
      listHeader,
      star,
      Scroll
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';
  .leisureFilter-index{
    .split{
      background: #e7e7e7;
      height: pxToRem(13);
    }
    .header{
      display: flex;
      position: fixed;
      padding: 0  pxToRem(10);
      height: pxToRem(45);
      background:#ffa71d ;
      align-items: center;
      z-index: 99;
      width: 100%;
      box-sizing: border-box;
      .left{
        color: #fff;
        font-size: pxToRem(20);
      }
      .middle{
        position: relative;
        flex: 1;
        .search{
          width: 100%;
          height: pxToRem(22);
          margin-left: pxToRem(5);
          font-size: pxToRem(14);
          -webkit-appearance: inherit;
          outline: none;
          background: none;
          border-bottom: 1px solid #fefefe;
          color: #fff;
          text-indent: pxToRem(20);
          &::-webkit-input-placeholder{
            color: #fefefe;opacity:1;
          }
        }
        .icon-fangdajing{
          position: absolute;
          left: 0;
          top:0;
          line-height: pxToRem(23);
          font-size: pxToRem(16);
          color: #fff;
        }
      }
      .right{
        font-size: pxToRem(13);
        color: #fff;
        max-width: pxToRem(70);
        .name {
          display: inline-block;
          max-width: pxToRem(50);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .filter{
    .listHeader {
      top: pxToRem(45);
      .area-list {
        background: #fff;
        color: #969696;
        font-size: pxToRem(14);
        &.all {
          overflow-y: auto;
          overflow-x: hidden;
          max-height: pxToRem(400);
          position: relative;
          .name {
            margin-left: pxToRem(20);
          }
          .iconfont {
            position: absolute;
            left: pxToRem(15);
          }
          .all-list {
            .all-item {
              display: flex;
              position: relative;
              padding: 0px pxToRem(15);
              justify-content: space-between;
              height: pxToRem(44);
              line-height: pxToRem(44);
              @include border-1px(0, 0, 1px, 0);
              &.active {
                color: $defaultColor;
                background: #f2f2f2;
              }
            }
          }
        }
        &.sort {
          .sort-list {
            .sort-item {
              position: relative;
              height: pxToRem(44);
              line-height: pxToRem(44);
              text-align: left;
              @include border-1px(0, 0, 1px, 0);
              .name {
                padding-left: pxToRem(40);
              }
              .iconfont {
                position: absolute;
                left: pxToRem(15);
              }
              &.active {
                color: $defaultColor;
                background: #f2f2f2;
              }
            }
          }
        }
        &.localCity {
          width: 100%;
          background: #fff;
          .localCity-wrapper {
            position: relative;
            height: pxToRem(400);
            float: left;
            width: 25%;
            overflow-y: auto;
            overflow-x: hidden;
            @include border-1px(0, 1px, 0, 0);
            .localCity-list {
              .localCity-item {
                position: relative;
                height: pxToRem(44);
                line-height: pxToRem(44);
                text-indent: pxToRem(15);
                @include border-1px(0, 0, 1px, 0);
                &.areaActive {
                  color: $defaultColor;
                  background: #f5f5f5;
                }
              }
            }
          }
          .secondStage-dropdown {
            float: left;
            height: pxToRem(400);
            width: 75%;
            background: #f5f5f5;
            overflow-y: auto;
            overflow-x: hidden;
            .secondStage-list {
              .secondStage-item {
                position: relative;
                height: pxToRem(44);
                line-height: pxToRem(44);
                text-indent: pxToRem(15);
                @include border-1px(0, 0, 1px, 0);
                &.secondStageActive {
                  background: #ebebeb;
                }
              }
            }
            &.widthActive {
              width: 30%;
            }
          }
          .threeStage-dropdown {
            float: right;
            width: 45%;
            height: pxToRem(400);
            background: #ebebeb;
            overflow-y: auto;
            overflow-x: hidden;
            position: relative;
            @include border-1px(0, 0, 0, 1px);
            .threeStage-list {
              .threeStage-item {
                position: relative;
                height: pxToRem(44);
                line-height: pxToRem(44);
                text-indent: pxToRem(15);
                @include border-1px(0, 0, 1px, 0);
              }
            }
          }
        }
      }
    }
    }
    .leisure-content{
      .leisure-list{
        .list-item {
          .top {
            display: flex;
            position: relative;
            margin: 0 pxToRem(12);
            padding: pxToRem(12) 0;
            @include border-1px(0px, 0px, 1px, 0px);
            .image-wrapper {
              width: pxToRem(80);
              height: pxToRem(80);
              margin-right: pxToRem(10);
              img {
                display: block;
                width: 100%;
              }
            }
            .content {
              flex: 1;
              position: relative;
              .item-name {
                font-size: pxToRem(16);
                color: #646464;
              }
              .item-star {
                margin: pxToRem(18) 0;
                font-size: pxToRem(12);
                color: #969696;
              }
              .price {
                font-weight: 700;
                font-size: 0;
                .yuan {
                  font-size: pxToRem(16);
                  font-style: normal;
                  font-weight: normal;
                }
                .yuan1 {
                  font-size: pxToRem(12);
                  font-style: normal;
                  font-weight: normal;
                }
                .new {
                  font-size: pxToRem(16);
                  vertical-align: sub;
                  color: #ff9d00;
                }
                .old {
                  font-size: pxToRem(12);
                  vertical-align: sub;
                  color: #969696;
                }
              }
              .rang {
                position: absolute;
                right: 0;
                top: 0;
                .num {
                  font-size: pxToRem(12);
                  color: #969696;
                }
              }
            }
          }
          .bottom{
            .team{
              .team-list{
                .team-item{
                  display: flex;
                  position: relative;
                  margin:0 pxToRem(15);
                  padding: pxToRem(15) 0;
                  align-items: center;
                  font-size: pxToRem(15);
                  @include border-1px(0,0,1px,0);
                  .team-price{
                    color: $defaultColor;
                  }
                  .team-desc{
                    margin-left: pxToRem(10);
                    color: #646464;
                  }
                }
              }
              .more{
                position: relative;
                padding-top: pxToRem(16);
                padding-bottom: pxToRem(16);
                font-size: pxToRem(15);
                text-align: center;
                color: #ff5513;
                @include border-1px(0,0,1px,0);
              }
            }
          }
        }
      }
    }
  }
  .scroll{
    margin-top: pxToRem(90);
  }

</style>
