<template>
  <div class="other-login">
    <mHeader>第三方登录设置</mHeader>
    <div class="content">
      <list :title="item.title" :info="item.info" v-for="(item,index) in titles" :key="index"></list>
    </div>
  </div>
</template>

<script>
  import mHeader from 'base/m-header/m-header';
  import list from 'base/list/list';

  export default {
    data() {
      return {
        titles: [{
          title: '微信',
          info: '解绑'
        },{
            title: 'qq',
            info: '立即绑定'
          },{
          title: '新浪微博',
          info: '立即绑定'
        }
        ],
      }
    },
    components: {
      mHeader,
      list
    }
  }
</script>

<style lang="scss" scoped>
  .other-login {
    .content {

    }
  }
</style>
