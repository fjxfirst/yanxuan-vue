<template>
  <div>
    <!--头部搜索-->
    <header class="header">
      <div class="header-top-wrap clearFix">
        <router-link class="logotext" to="/Home" replace>
          <img src="../../common/img/logotext.png">
        </router-link>
        <router-link class="search" to="">
          <i class="icon-search"></i>搜索商品，共10733款好物
        </router-link>
      </div>
      <nav class="nav-wrap clearFix">
        <ul class="ulList">
          <li :class="{active:$route.path==='/Home/HomeMain'}" @click="goTo('/Home/HomeMain')">推荐</li>
          <li :class="{active:$route.path===`/Home/Cate/${index}`}" v-if="headCates" v-for="(cate,index) in headCates"
              :key="index" @click="goTo(`/Home/Cate/${index}`)">
            {{cate.name}}
          </li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['headCates'])
    },
    methods:{
      /*checkStyle(index,event){
        if(index===-1){
          this.$refs.cateLi[this.perIndex].className='';
          return;
        }
        this.$refs.cateLi[this.perIndex].className='';
        event.currentTarget.className='active';
        this.perIndex=index;
      }*/
      goTo(path){
        this.$router.replace(path);
      }
    },
    mounted() {
      this.$store.dispatch('getHeadCateList');

      const barScroll = new BScroll('.nav-wrap', {
        scrollX: true
      });

    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";
  @import "../../common/css/fonts.css";

  .header {
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 2;
    width: 100%;
    .header-top-wrap {
      box-sizing: border-box;
      width: 100%;
      padding: 14/@rem 30/@rem;

      .logotext {
        display: block;
        float: left;

        margin-right: 20/@rem;
        img {
          width: 138/@rem;
          vertical-align: middle;
        }
      }
      .search {
        display: block;
        float: left;
        width: 532/@rem;
        height: 56/@rem;
        color: #666;
        background-color: #EDEDED;
        font-size: 26/@rem;
        text-align: center;
        line-height: 56/@rem;
        border-radius: 6/@rem;
        i {
          margin-right: 10/@rem;
          font-size: 26/@rem;
        }
      }
    }
    .nav-wrap {
      width: 100%;
      overflow: hidden;
      .ulList {
        white-space: nowrap;
        float: left;
        li {
          display: inline-block;
          text-align: center;
          min-width: 70/@rem;
          height: 60/@rem;
          font-size: 28/@rem;
          line-height: 60/@rem;
          margin: 0 30/@rem;
          color:#333;
          &.active {
            border-bottom: 1px solid #B4282D;
            color: #B4282D;
          }
        }
      }
    }
  }





</style>
