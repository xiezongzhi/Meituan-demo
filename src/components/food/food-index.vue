<template>
  <div>
    <div class="food-index">
      <foodHeader ref="foodWrapper"></foodHeader>
      <listHeader :titles="names" @goTop="goTop" @refresh="refresh" v-show="flag" ref="listHeaderWrapper"
                  @names="names" :isLine="false">
        <div class="area-list all" ref="allListWrapper">
          <ul class="all-list">
            <li class="all-item" v-for="(item,index) in category" :class="{'active':index==currentIndex}"
                @click.stop="selectCategory(index,$event)">
              <div class="left"><span class="iconfont icon-selectfill" v-show="index==currentIndex"></span><span
                class="name">{{item.name}}</span></div>
              <div class="count">{{item.count}}</div>
            </li>
          </ul>
        </div>
        <div class="area-list biz">
          <div class="biz-wrapper" ref="bizWrapper">
            <ul class="biz-list" ref="bizListWrapper">
              <li class="biz-item" v-for="(item,index) in biz.areaTitle" @click="selectBiz(index,$event)"
                  :class="{'active':index==currentBizIndex+1}">
                <span class="name">{{item.name}}</span><span class="around">{{item.count}}</span>
              </li>
            </ul>
          </div>
          <div class="biz-dropdown-wrapper" v-show="bizFlag">
            <ul class="dropdown-list" ref="dropDownListWrapper">
              <li class="dropdown-item" v-for="item in biz.areaList[currentBizIndex]">
                <p v-for="(item,index) in item" @click="selectBizItem(index,$event)">
                  <span class="name">{{item.name}}</span><span class="around">{{item.count}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="area-list sort">
          <ul class="sort-list">
            <li class="sort-item" v-for="(item,index) in sort" @click="selectSort(index,$event)"
                :class="{'active':index==currentSortIndex}">
              <span class="iconfont icon-selectfill" v-show="index==currentSortIndex"></span><span
              class="name">{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="area-list filter">
          <ul class="filter-list">
            <li class="filter-item item-1">
              <span class="name">只看免预约</span>
              <div class="input-checkbox" @click="selectBox_1"><span class="iconfont icon-selectfill"
                                                                     v-show="boxFlag_1"></span></div>
            </li>
            <li class="filter-item item-2">
              <span class="name">节假日可用</span>
              <div class="input-checkbox" @click="selectBox_2"><span class="iconfont icon-selectfill"
                                                                     v-show="boxFlag_2"></span></div>
            </li>
            <li class="filter-item item-3">
              <div class="title">用餐时间段</div>
              <div class="meal-select">
                <span class="meal" v-for="(item,index) in dingTime" @click="selectDingType(index)"
                      :class="{'selected':index==dingTimeIndex}"><a href="javascript:">{{item.dingType}}</a></span>
              </div>
            </li>
            <li class="filter-item item-4">
              <div class="title">用餐人数</div>
              <div class="meal-select">
                <span class="meal" v-for="(item,index) in dingPeople" @click="selectDingPeople(index)"
                      :class="{'selected':index==dingPeopleIndex}"><a
                  href="javascript:">{{item.dingPeopleNum}}</a></span>
              </div>
            </li>
            <li class="filter-item item-5">
              <div class="title">餐厅服务</div>
              <div class="meal-select">
                <span class="meal" v-for="(item,index) in dingService" @click="selectDingService(index)"
                      :class="{'selected':index==dingServiceIndex}"><a
                  href="javascript:">{{item.dingServiceType}}</a></span>
              </div>
            </li>
          </ul>
          <div class="deal">
            <div class="button reset" @click="reset">
              重置
            </div>
            <div class="button finish" @click="finish">
              完成
            </div>
          </div>
        </div>
      </listHeader>
      <Scroll :data="goodsList" class="scroll" :listenScroll="true" @scroll="scroll">
        <div class="wrapper">
          <foodBanner></foodBanner>
          <split></split>
          <foodNav></foodNav>
          <split></split>
          <foodActList></foodActList>
        </div>
        <foodList @goTop="goTop" ref="foodListWrapper" :goodsList="goodsList"></foodList>
      </Scroll>
    </div>
    <transition name="slide">
      <router-view class="routerView"></router-view>

    </transition>

  </div>
</template>

<script>
  import listHeader from "base/list-header/list-header.vue";
  import Scroll from 'base/scroll/scroll';
  import split from 'base/split/split';
  import foodHeader from "./food-header/food-header.vue";
  import foodBanner from "./food-banner/food-banner.vue";
  import foodNewAct from "./food-newAct/food-newAct.vue";
  import foodActList from "./food-actList/food-actList.vue";
  import foodNav from "./food-nav/food-nav.vue";
  import foodList from "./food-list/food-list.vue";
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll';
  import {getGoodsListRound, getDistance, getFoodBanner, getGoodsListLocal} from "common/js/getData";

  export default {
    computed: {
      ...mapGetters([
        'goods',
        'currentCity'
      ])
    },
    data() {
      return {
        boxFlag_1: false,
        boxFlag_2: false,
        timer: '',
        goodsList: [],
        foodListHeight: '',
        flag: false,
        bizFlag: false,
        currentIndex: '',
        currentBizIndex: -1,
        dingTimeIndex: 0,
        dingPeopleIndex: 0,
        dingServiceIndex: 0,
        currentSortIndex: 0,
        names: ['全部', '附近', '智能排序', '筛选'],
        discList: this.foods,
        sort: ['智能排序', '离我最近', '好评优先', '人气最高'],
        category: [
          {
            name: '全部',
            count: 1231
          },
          {
            name: '自助餐',
            count: 1231
          },
          {
            name: '海鲜',
            ount: 1231
          }, {
            name: '火锅',
            count: 1231
          },
          {
            name: '粤港菜',
            count: 1231
          }, {
            name: '甜点饮品',
            count: 1231
          }
        ],
        biz: {
          areaTitle: [
            {
              name: '全城',
              count: 123
            },
            {
              name: '香洲区',
              count: 3213
            },
            {
              name: '斗门区',
              count: 3213
            },
            {
              name: '金湾区',
              count: 3213
            },
            {
              name: '横琴新区',
              count: 3213
            }
          ],
          areaList: [
            {
              list: [
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                }
              ],
            },
            {
              list: [

                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                },
                {
                  name: '香洲区',
                  count: 123
                }
              ],
            },
            {
              list: [

                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '斗门区',
                  count: 123
                },
                {
                  name: '拱北',
                  count: 123
                }
              ],
            },
            {
              list: [

                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                },
                {
                  name: '横琴新区',
                  count: 123
                }
              ],
            }
          ]
        },
        dingTime: [
          {
            dingType: '不限'
          },
          {
            dingType: '不限'
          },
          {
            dingType: '不限'
          },
          {
            dingType: '不限'
          },
          {
            dingType: '不限'
          },
          {
            dingType: '不限'
          }
        ],
        dingPeople: [
          {
            dingPeopleNum: '不限'
          },
          {
            dingPeopleNum: '不限'
          },
          {
            dingPeopleNum: '不限'
          },
          {
            dingPeopleNum: '不限'
          },
          {
            dingPeopleNum: '不限'
          },
          {
            dingPeopleNum: '不限'
          }
        ],
        dingService: [
          {
            dingServiceType: '外卖送餐'
          },
          {
            dingServiceType: '不限'
          },
          {
            dingServiceType: '不限'
          },
          {
            dingServiceType: '不限'
          },
          {
            dingServiceType: '不限'
          },
          {
            dingServiceType: '不限'
          }
        ],
      }
    },
    watch: {
      goodsList() {
        setTimeout(() => {
          var wrapper = this.$refs.foodListWrapper.$el;
          wrapper.style.height='auto';
          this.foodListHeight = (wrapper.clientHeight-90)/37.5;
          if (this.foodListHeight<window.screen.height/37.5) {
            wrapper.style.height = window.screen.height+'px'
          }
        }, 50)
      }

    },
    created() {

      this._getGoodsListLocal();
    },
    mounted() {

    },
    methods: {
      reset() {
        this.dingTimeIndex = 0;
        this.dingPeopleIndex = 0;
        this.dingServiceIndex = 0;
      },
      finish() {
        this.$refs.listHeaderWrapper._hide();
      },
      selectDingType(index) {
        this.dingTimeIndex = index;
      },
      selectDingService(index) {
        this.dingServiceIndex = index;
      },
      selectDingPeople(index) {
        this.dingPeopleIndex = index;
      },
      selectBox_1() {
        this.boxFlag_1 = !this.boxFlag_1;
      },
      selectBox_2() {
        this.boxFlag_2 = !this.boxFlag_2;
      },
      calculateHeight() {
        let bizObj = this.$refs.bizListWrapper;
        let dropObj = this.$refs.dropDownListWrapper;
        bizObj.style.height = 44 * this.biz.areaTitle.length / 37.5 + 'rem';
        dropObj.style.height = 44 * this.biz.areaTitle.length / 37.5 + 'rem';
      },
      selectSort(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[2] = currentName;
        this.currentSortIndex = index;
        this.commonChang(index);
        this.$refs.listHeaderWrapper._hide();
      },
      selectBiz(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.$refs.dropDownListWrapper.scrollTop = 0;
        this.currentBizIndex = index - 1;
        if (index != 0) {
          this.bizFlag = true;
          this.$refs.bizWrapper.style.width = '40%';
        }
        else {
          this.bizFlag = false;
          this.$refs.bizWrapper.style.width = '100%';
          this.$refs.listHeaderWrapper._hide();
        }
        this.names[1] = currentName;
        this.commonChang(index);
      },
      selectBizItem(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[1] = currentName;
        this.commonChang(index);
        this.$refs.listHeaderWrapper._hide();
      },
      commonChang(index) {
        this.currentIndex = index;
        this.$refs.foodListWrapper.changName(this.names);
      },
      selectCategory(index, e) {
        let currentName = e.currentTarget.getElementsByClassName('name')[0].innerHTML;
        this.names[0] = currentName;
        if (currentName == '全部') {
          this._getGoodsListLocal();
        }
        else {
          this._getGoodsListLocal({
            tags: currentName
          });
        }
        this.commonChang(index);
        this.$refs.listHeaderWrapper._hide();
      },
      refresh() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
        }, 50)
      },
      goTop(index) {
        this.$refs.listHeaderWrapper.toggle(index);
        this.flag = true;
      },
      scroll(pos) {
        var pos = pos || 0;
        var wrapper = document.getElementsByClassName('wrapper')[0];
        if ((Math.abs(pos.y) - wrapper.clientHeight) > 0) {
          this.flag = true;
        }
        else {
          this.flag = false;
        }
      },
      _getGoodDetail(mer_id) {
        if (!mer_id) {
          this.$router.push('/food');
          return
        }
        else {
          this.$router.push({
            path: `/food/goodsDetail/?mer_id=${mer_id}&cate_id= `
          })
        }
      },
//        _getGoodsListRound(){
//          getGoodsListRound(
//          ).then((data)=>{
//            if(data.status===0){
//              this.goodsList=data.body;
//              this.setGoods(this.goodsList);
//            }
//          });
//        },
      _getGoodsListLocal(param) {
        this.region = this.currentCity;
        var paramObj = Object.assign({
          region: this.region
        }, param);
        getGoodsListLocal(
          paramObj
        ).then((data) => {
          if (data.flag === 1) {
            this.goodsList = data.body;
          }

        });
      }
    },
    components: {
      foodHeader,
      foodBanner,
      foodList,
      split,
      foodNewAct,
      foodActList,
      foodNav,
      Scroll,
      listHeader,
      BScroll
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../common/style/base.scss';

  .scroll {
    padding-top: pxToRem(50);
  }

  .area-list {
    background: #fff;
    color: #969696;
    font-size: pxToRem(14);
    &.filter {
      .filter-list {
        height: pxToRem(300);
        overflow-y: auto;
        overflow-x: hidden;
        .filter-item {
          position: relative;
          padding: 0 pxToRem(15);
          @include border-1px(0, 0, 1px, 0);
          .input-checkbox {
            height: pxToRem(20);
            width: pxToRem(20);
            line-height: pxToRem(20);
            text-align: center;
            border: 1px solid #ddd;
          }
          &.item-1, &.item-2 {
            display: flex;
            height: pxToRem(44);
            align-items: center;
            justify-content: space-between;
            .iconfont {
              color: $defaultColor;
            }
          }
          &.item-3, &.item-5 {
            .title {
              height: pxToRem(44);
              line-height: pxToRem(44);
            }
            .meal-select {
              padding-bottom: pxToRem(20);
              .meal {
                width: 25%;
                display: inline-block;
                margin-bottom: pxToRem(10);
                text-align: center;
                padding: 0 pxToRem(8) 0 0;
                box-sizing: border-box;
                &.selected {
                  a {
                    border: 1px solid $defaultColor;
                    color: $defaultColor;
                    background: rgba(239, 211, 174, 0.5);
                  }
                }
                a {
                  display: block;
                  height: pxToRem(30);
                  line-height: pxToRem(30);
                  box-sizing: border-box;
                  border: 1px solid #eee;
                  border-radius: 3px;
                }
              }
            }
          }
          &.item-4 {
            .title {
              height: pxToRem(44);
              line-height: pxToRem(44);
            }
            .meal-select {
              padding-bottom: pxToRem(20);
              .meal {
                width: 33%;
                display: inline-block;
                margin-bottom: pxToRem(10);
                text-align: center;
                padding: 0 pxToRem(8) 0 0;
                box-sizing: border-box;
                &.selected {
                  a {
                    border: 1px solid $defaultColor;
                    color: $defaultColor;
                    background: rgba(239, 211, 174, 0.5);
                  }
                }
                a {
                  display: block;
                  height: pxToRem(30);
                  line-height: pxToRem(30);
                  box-sizing: border-box;
                  border: 1px solid #eee;
                  border-radius: 3px;
                }
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
    &.biz {
      .biz-wrapper {
        width: 100%;
        float: left;
        &.activeWidth {
          width: 45%;
        }
        .biz-list {
          max-height: pxToRem(400);
          overflow-y: auto;
          overflow-x: hidden;
          .biz-item {
            display: flex;
            position: relative;
            height: pxToRem(44);
            padding: 0px pxToRem(15);
            justify-content: space-between;
            align-items: center;
            @include border-1px(0, 0, 1px, 0);
            &.active {
              color: $defaultColor;
              background: #f2f2f2;
            }
            .around {
              display: inline-block;
              height: pxToRem(15);
              padding: 0 pxToRem(3);
              line-height: pxToRem(15);
              font-size: pxToRem(11);
              color: #fff;
              border-radius: pxToRem(30);
              background: #ccc;
            }
          }
        }
        &.active {
          width: pxToRem(137);
        }
      }
      .biz-dropdown-wrapper {
        float: right;
        width: 60%;
        background: #f2f2f2;;
        .dropdown-list {
          max-height: pxToRem(400);
          overflow-y: auto;
          overflow-x: hidden;
          .dropdown-item p {
            display: flex;
            position: relative;
            height: pxToRem(44);
            padding: 0 pxToRem(15);
            justify-content: space-between;
            align-items: center;
            line-height: pxToRem(44);
            @include border-1px(0, 0, 1px, 0);
            .around {
              display: inline-block;
              height: pxToRem(15);
              padding: 0 pxToRem(3);
              line-height: pxToRem(15);
              font-size: pxToRem(11);
              color: #fff;
              border-radius: pxToRem(30);
              background: #ccc;
            }
          }
        }
      }
    }

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
  }

  .wrapper {
    padding-bottom: pxToRem(15);
  }

</style>
