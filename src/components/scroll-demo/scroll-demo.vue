<template>
  <Scroll :data="downdata" :pulldownUI="true" :pulldown="true" :pullupUI="true" :pullup="true" ref="Scroll" @pulldown="pullDown"
          @scrollToEnd="scrollToEnd"  :loadingStatus="loadingStatus">
    <ul>
      <li v-for="(item,index) in downdata" >{{item.name}}</li>
    </ul>
  </Scroll>
</template>
<script>
  import Scroll from 'base/scroll/scroll';

  export default{
    data () {
      return {
        counter : 0, //默认已经显示出15条数据 count等于一是让从16条开始加载
        num : 40,  // 一次显示多少条
        pageStart : 0, // 开始页数
        pageEnd : 0, // 结束页数
        downdata: [], // 上拉更多的数据存放数组
        timer:'',  // 定时器
        timer1:'',
        loadingStatus:{
          showIcon: true,
          status: ''
        }
      }
    },
    mounted : function(){
      this.getList();
    },
    methods: {
      getList(done){
        var _this = this;
        clearTimeout(this.timer);
        _this.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
          _this.downdata = response.data.slice(0, _this.num);
        })
          .catch((response) => {
            console.log('error');
          }).finally(() => {
          _this.loadingStatus = {
            showIcon: false,
            status: ''
          };
          if(done){
            done();
          }
        })
      },
      pullDown(done) {
        this.loadingStatus = {
          showIcon: true,
          status: ''
        };
        this.getList(done);
      },
      scrollToEnd(done) {
        let _this = this;
        _this.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
          _this.counter++;
          _this.pageEnd = _this.num * _this.counter;
          _this.pageStart = _this.pageEnd - _this.num;
          let arr = response.data;
          let i = _this.pageStart;
          let end = _this.pageEnd;
          for (; i < end; i++) {
            let obj = {};
            if (arr[i] == undefined) {
              return;
            }
            obj["name"] = arr[i].name;
            this.downdata.push(obj);
            if ((i + 1) >= response.data.length) {
              done();
              return;
            }
          }
        }).catch((response) => {
          console.log(response);
        })
      }
    },
    components : {
      Scroll
    }
  }

</script>
<style lang="scss" scoped>
  @import '../../common/style/base.scss';
  .load-container{
    position: absolute;
    top:50%;
    left:50%;
    margin: pxToRem(-23) 0 0 pxToRem(-46);
  }
</style>
