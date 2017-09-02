<template>
  <div class="hotel-filter">
    <listHeader :titles="names" :isLine="true" class="listHeader" ref="listHeaderWrapper">
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
                @click="threeStage($event,index)">
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="area-list price-level">
        <ul class="price-level-list">
          <li class="level-list item-1">
            <div class="title">星级</div>
            <div class="level-item-wrapper">
              <span class="level-item" v-for="(item,index) in priceLevel.level"
                    :class="{'levelActive':index==levelIndex}" @click="selectLevel(index)">{{item}}</span>
            </div>
          </li>
          <li class="price-list item-2">
            <div class="title">价格</div>
            <div class="price-item-wrapper">
              <span class="price-item" v-for="(item,index) in priceLevel.price"
                    :class="{'priceActive':index==priceIndex}" @click="selectPrice(index)"><a href="javascript:">{{item}}</a></span>
            </div>
          </li>
        </ul>
        <div class="deal">
          <div class="button reset" @click="reset($event)" type="priceLevel">
            重置
          </div>
          <div class="button finish" @click="finish($event)" type="priceLevel">
            完成
          </div>
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
      <div class="area-list filter">
        <ul class="filter-list" ref="filterWrapper">
          <li class="item-1">
            <div class="title">酒店类型</div>
            <div class="item-wrapper" ref="hotelItemWrapper">
              <span class="item" v-for="(item,index) in filter.hotelType"
                    @click="selectHotelType(index)"><a href="javascript:">{{item.type}}</a></span>
            </div>
          </li>
          <li class="item-2">
            <div class="title">房型</div>
            <div class="item-wrapper " ref="homeItemWrapper">
              <span class="item" v-for="(item,index) in filter.homeType"
                    @click="selectHomeType(index)"><a href="javascript:">{{item.type}}</a></span>
            </div>
          </li>
          <li class="item-2">
            <div class="title">房型</div>
            <div class="item-wrapper " ref="brandItemWrapper">
              <span class="item" v-for="(item,index) in filter.brandType"
                    @click="selectBrandType(index)"><a href="javascript:">{{item.type}}</a></span>
            </div>
          </li>
        </ul>
        <div class="deal">
          <div class="button reset" @click="reset($event)" type="filter">
            重置
          </div>
          <div class="button finish" @click="finish($event)" type="filter">
            完成
          </div>
        </div>
      </div>
    </listHeader>
  </div>
</template>

<script>
  import listHeader from "base/list-header/list-header.vue";
  import {hasClass, removeClass, addClass} from 'common/js/dom';

  export default {
    data() {
      return {
        homeTypeIndex: '',
        hotelTypeIndex: '',
        brandTypeIndex: '',
        levelIndex: '',
        priceIndex: 6,
        areaTitleIndex: '',
        secondStageIndex: '',
        selectSortIndex: '',
        areaType: '',
        names: ['全城', '价格/星级', '智能排序', '筛选'],
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
        sort: ['智能排序', '离我最近', '好评优先', '人气最高'],
        priceLevel: {
          level: ['经济型', '舒适/三星', '高档/四星', '豪华/五星'],
          price: ['0', '50', '100', '150', '200', '300', '不限'],
        },
        filter: {
          hotelType: [
            {
              type: '经济型酒店'
            },
            {
              type: '快捷连锁'
            },
            {
              type: '主题酒店'
            },
            {
              type: '商务酒店'
            },
            {
              type: '公寓'
            },
            {
              type: '豪华酒店'
            }
          ],
          homeType: [
            {
              type: '单人房'
            },
            {
              type: '大床房'
            },
            {
              type: '双床房'
            },
            {
              type: '三人间'
            },
            {
              type: '床位'
            }
          ],
          brandType: [
            {
              type: '7天'
            },
            {
              type: '汉庭'
            },
            {
              type: '双床房'
            },
            {
              type: '格林豪泰'
            },
            {
              type: '速8'
            },
            {
              type: '速8'
            },
            {
              type: '速8'
            },
            {
              type: '速8'
            },
            {
              type: '速8'
            }
          ],
        },
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
      selectBrandType(index) {
        let brandTypeItem = this.$refs.brandItemWrapper.getElementsByClassName('item');
        if (hasClass(brandTypeItem[index], 'selected')) {
          removeClass(brandTypeItem[index], 'selected');
        }
        else {
          addClass(brandTypeItem[index], 'selected');
        }
        this.brandTypeIndex = index;
      },
      selectHomeType(index) {
        let homeTypeItem = this.$refs.homeItemWrapper.getElementsByClassName('item');
        if (hasClass(homeTypeItem[index], 'selected')) {
          removeClass(homeTypeItem[index], 'selected');
        }
        else {
          addClass(homeTypeItem[index], 'selected');
        }
        this.homeTypeIndex = index;
      },
      selectHotelType(index) {
        let hotelTypeItem = this.$refs.hotelItemWrapper.getElementsByClassName('item');
        if (hasClass(hotelTypeItem[index], 'selected')) {
          removeClass(hotelTypeItem[index], 'selected');
        }
        else {
          addClass(hotelTypeItem[index], 'selected');
        }
        this.hotelTypeIndex = index;
      },
      reset(e) {
        if (e.currentTarget.getAttribute('type') === 'priceLevel') {
          this.levelIndex = 0;
          this.priceIndex = 6;
        }
        else if (e.currentTarget.getAttribute('type') === 'filter') {
          let itemType = this.$refs.filterWrapper.getElementsByClassName('item');
          for (var i = 0, len = itemType.length; i < len; i++) {
            removeClass(itemType[i], 'selected');
          }
        }
      },
      finish(e) {
        if (e.currentTarget.getAttribute('type') === 'priceLevel') {

        }
        else if (e.currentTarget.getAttribute('type') === 'filter') {

        }
        this.$refs.listHeaderWrapper._hide();
      },
      selectLevel(index) {
        this.levelIndex = index;
      },
      selectPrice(index) {
        this.priceIndex = index;
      },
      selectSort(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[2] = currentName;
        this.selectSortIndex = index;
        this.$refs.listHeaderWrapper._hide();
      },
      threeStage(e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names.splice(0, 1, currentName);
        this.$refs.listHeaderWrapper._hide();
      },
      selectSecondStage(e, index) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.secondStageIndex = index;
        if (this.areaTitleIndex !== 2) {
          this.names.splice(0, 1, currentName);
          this.$refs.listHeaderWrapper._hide();
        }
      },
      selectArea(e, index) {
        this.areaTitleIndex = index;
        this.areaType = e.currentTarget.getAttribute('type');
      }
    },
    components: {
      listHeader
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../common/style/base.scss';

  .hotel-filter {
    display: flex;
    border-bottom: pxToRem(0.5) solid #d2d2d2;
    .filter-item {
      flex: 1;
      text-align: center;
      font-size: pxToRem(13);
      color: #818181;
      height: pxToRem(34);
      line-height: pxToRem(30);
      box-sizing: border-box;
      padding: pxToRem(4);
      a {
        width: 100%;
        height: 100%;
        display: block;
        border-right: pxToRem(0.5) solid #d2d2d2;

      }
      &:last-of-type a {
        border-right: none
      }
    }
  }

  .listHeader {
    top: pxToRem(87);
    .area-list {
      background: #fff;
      color: #969696;
      font-size: pxToRem(14);
      &.filter {
        .filter-list {
          max-height: pxToRem(300);
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0 pxToRem(15);
          .item-1, .item-2 {
            .title {
              height: pxToRem(35);
              line-height: pxToRem(35);
            }
            .item-wrapper {
              .item {
                width: 25%;
                display: inline-block;
                margin-bottom: pxToRem(10);
                text-align: center;
                padding: 0 pxToRem(3);
                box-sizing: border-box;
                &.selected {
                  a {
                    border: 1px solid $defaultColor;
                    background: $defaultColor;
                    color: #fff;
                  }
                }
                a {
                  display: block;
                  padding: 0 pxToRem(2);
                  height: pxToRem(30);
                  line-height: pxToRem(31);
                  box-sizing: border-box;
                  border: 1px solid #eee;
                  border-radius: 3px;
                }
              }
            }
          }
        }
        .deal {
          display: flex;
          padding: 0 pxToRem(15);
          justify-content: space-between;
          align-items: center;
          height: pxToRem(50);
          background: rgba(216, 216, 216, .3);
          div {
            height: pxToRem(30);
            width: pxToRem(70);
            line-height: pxToRem(30);
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &.finish {
              border: 1px solid $defaultColor;
              background: $defaultColor;
              color: #fff;
            }
          }
        }
      }
      &.price-level {
        .price-level-list {
          padding: 0 pxToRem(15);
          .level-list {
            margin-bottom: pxToRem(15);
            .title {
              height: pxToRem(35);
              line-height: pxToRem(35);
            }
            .level-item-wrapper {
              .level-item {
                display: inline-block;
                margin-right: pxToRem(12);
                width: pxToRem(75);
                height: pxToRem(28);
                line-height: pxToRem(29);
                text-align: center;
                border-radius: 4px;
                box-sizing: border-box;
                border: 1px solid #eee;
                &:last-child {
                  margin-right: 0px;
                }
                &.levelActive {
                  border: 1px solid $defaultColor;
                  background: $defaultColor;
                  color: #fff;
                }
              }
            }
          }
          .price-list {
            margin-bottom: pxToRem(15);
            .title {
              height: pxToRem(35);
              line-height: pxToRem(35);
            }
            .price-item-wrapper {
              .price-item {
                width: 25%;
                display: inline-block;
                margin-bottom: pxToRem(10);
                text-align: center;
                padding: 0 pxToRem(8) 0 0;
                box-sizing: border-box;
                &.priceActive {
                  a {
                    border: 1px solid $defaultColor;
                    background: $defaultColor;
                    color: #fff;
                  }
                }
                a {
                  display: block;
                  height: pxToRem(30);
                  line-height: pxToRem(31);
                  box-sizing: border-box;
                  border: 1px solid #eee;
                  border-radius: 3px;
                }
              }
            }
          }
        }
        .deal {
          display: flex;
          padding: 0 pxToRem(15);
          justify-content: space-between;
          align-items: center;
          height: pxToRem(50);
          background: rgba(216, 216, 216, .3);
          div {
            height: pxToRem(30);
            width: pxToRem(70);
            line-height: pxToRem(30);
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &.finish {
              border: 1px solid $defaultColor;
              background: $defaultColor;
              color: #fff;
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
</style>
