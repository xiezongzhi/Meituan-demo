<template>
    <transition name="slide">
        <div class="food" v-show="showFlag" ref="foodWrapper">
            <div class="food-content">
                <div class="image-wrapper">
                    <img :src="food.image" alt="">
                    <div class="back" @click="hide">
                        <span class="iconfont icon-back"></span>
                    </div>
                </div>
                <div class="content">
                    <div class="title">{{food.name}}</div>
                    <div class="detail">
                        <span class="sell-count">月售{{food.sellCount}}</span>
                        <span class="rating">好评率{{food.rating}}100%</span>
                    </div>
                    <div class="price">
                        <span class="new"><i class="yuan">￥</i>{{food.price}} </span><span class="old" v-show="food.oldPrice"><i class="yuan">￥</i>{{food.oldPrice}}</span>
                    </div>
                    <div class="cartontrol-wrapper">
                        <cartcontrol :food="food" @add="addFood"></cartcontrol>
                    </div>
                    <div class="buy" v-show="!food.count || food.count===0" @click.stop.prevent="addFirst">
                        加入购物车
                    </div>
                </div>
                <split v-show="food.info"></split>
                <div class="info" v-show="food.info">
                    <h1 class="title">{{food.name}}</h1>
                    <p class="text">{{food.info}}</p>
                </div>
                <split></split>
                <div class="rating">
                    <h1 class="title">
                        商品评价
                    </h1>
                    <ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings" @ratingTypeSelect="selectTypeChange" @ratingOnlyContentSelect="selectContentChange"></ratingselect>
                    <div class="rating-wrapper border-1px">
                        <ul v-show="food.ratings && food.ratings.length" class="rating-list">
                            <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="rating-item">
                                <div class="user">
                                    <span class="name">{{rating.username}}</span>
                                    <img :src="rating.avatar" alt="" class="avatar" width="12" height="12">
                                </div>
                                <div class="time">
                                    {{rating.rateTime | formatDate}}
                                </div>
                                <p class="text">
                                    <span :class="{'iconfont icon-good':rating.rateType===0,'iconfont icon-bad':rating.rateType===1}"></span>{{rating.text}}
                                </p>
                            </li>
                        </ul>
                        <div class="no-rating" v-show="!food.ratings || !food.ratings.length">
                            暂无评价
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import BScroll from 'better-scroll';
    import Vue from 'vue';
    import cartcontrol from '../cartcontrol/cartcontrol';
    import split from '../split/split';
    import ratingselect from '../ratingselect/ratingselect';
    import {
        formatDate
    } from '../../../../common/js/date.js';
    const positive = 0;
    const negative = 1;
    const all = 2;
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false,
                selectType: all,
                onlyContent: true,
                desc: {
                    all: '全部',
                    positive: '推荐',
                    negative: '吐槽'
                }
            }
        },
        computed: {

        },
        methods: {
            selectTypeChange(type) {
                this.selectType = type;
                this._initScroll()
            },
            selectContentChange() {
                this.onlyContent = ! this.onlyContent;
                this._initScroll();
            },
            addFirst(event) {
                if (!event._constructed) {
                    return;
                }
                this.$emit('add_1', event.target);
                Vue.set(this.food, 'count', 1);

            },
            addFood(target) {
                this.$emit('add_2', event.target);
            },
            show() {
                this.showFlag = true;
                this.selectType = positive;
                this.onlyContent = false;
                this._initScroll()
            },
            _initScroll() {
                this.$nextTick(() => {
                    if (!this.foodScroll) {
                        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                            click: true
                        })
                    } else {
                        this.foodScroll.refresh();
                    }
                })
            },
            hide() {
                this.showFlag = false;
            },
            needShow(type, text) {
                if (this.onlyContent && !text) {
                    return false;
                }
                if (this.selectType === all) {
                    return true;
                } else {
                    return type === this.selectType;
                }
            }

        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        components: {
            cartcontrol,
            split,
            ratingselect
        }
    }
</script>

<style lang="scss">
    @import '../../../../common/style/mixins.scss';
    .food {
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 48px;
        z-index: 30;
        width: 100%;
        background: #fff;
        &.slide-enter-active,
        &.slide-leave-active {
            transition: all 0.3s;
        }
        &.slide-enter,
        &.slide-leave-active {
            transform: translateX(100%);
            opacity: 0;
        }
        .image-wrapper {
            position: relative;
            padding-top: 100%;
            width: 100%;
            height: 0;
            img {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
            }
            .back {
                position: absolute;
                left: 0px;
                ;
                top: 10px;
                .icon-back {
                    display: block;
                    padding: 10px;
                    font-size: 20px;
                    color: #fff;
                }
            }
        }
        .content {
            position: relative;
            padding: 18px;
            .title {
                margin-bottom: 8px;
                line-height: 14px;
                font-size: 14px;
                font-weight: 700;
                color: rgb(7, 17, 27);
            }
            .detail {
                margin-bottom: 18px;
                height: 10px;
                line-height: 17px;
                font-size: 0px;
                .sell-count,
                .rating {
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                }
                .sell-count {
                    margin-right: 12px;
                }
            }
            .price {
                line-height: 24px;
                font-weight: 700;
                .yuan {
                    font-size: 10px;
                    font-style: normal;
                    font-weight: normal;
                }
                .new {
                    margin-right: 8px;
                    vertical-align: text-bottom;
                    font-size: 14px;
                    color: rgb(240, 20, 20);
                }
                .old {
                    vertical-align: text-bottom;
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                }
            }
            .cartontrol-wrapper {
                position: absolute;
                right: 12px;
                bottom: 12px;
            }
            .buy {
                position: absolute;
                right: 18px;
                bottom: 18px;
                z-index: 10;
                height: 24px;
                line-height: 24px;
                padding: 0px 12px;
                box-sizing: border-box;
                border-radius: 12px;
                font-size: 10px;
                color: #fff;
                background: rgb(0, 160, 220);
            }
        }
        .info {
            padding: 18px;
            .title {
                line-height: 14px;
                margin-bottom: 6px;
                font-size: 14px;
                color: rgb(7, 17, 27);
            }
            .text {
                line-height: 24px;
                padding: 0px 8px;
                font-size: 12px;
                color: rgb(77, 85, 93);
            }
        }
        .rating {
            padding-top: 18px;
            .title {
                margin-left: 18px;
                font-size: 14px;
                color: rgb(7, 17, 27);
            }
            .rating-wrapper {
                padding: 0 18px;
                .rating-item {
                    position: relative;
                    padding: 16px 0;
                    @include border-1px(rgba(7, 17, 27, 0.1));
                    .user {
                        position: absolute;
                        right: 0;
                        top: 16px;
                        line-height: 12px;
                        font-size: 0;
                        .name {
                            display: inline-block;
                            margin-right: 6px;
                            vertical-align: top;
                            font-size: 10px;
                            color: rgb(147, 153, 159);
                        }
                        .avatar {
                            border-radius: 50%;
                        }
                    }
                    .time {
                        margin-bottom: 6px;
                        line-height: 12px;
                        font-size: 10px;
                        color: rgb(7, 17, 27);
                    }
                    .text {
                        line-height: 16px;
                        font-size: 12px;
                        .iconfont {
                            margin-right: 4px;
                            vertical-align: middle;
                            line-height: 16px;
                            font-size: 12px;
                        }
                        .icon-good {
                            color: rgb(0, 160, 220);
                        }
                        .icon-bad {
                            color: rgb(147, 153, 159);
                        }
                    }
                }
                .no-rating {
                    padding: 16px 0;
                    text-align: center;
                    font-size: 12px;
                    color: rgb(147, 153, 159);
                }
            }
        }
    }
</style>
