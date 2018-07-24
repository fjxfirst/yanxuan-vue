<template>
  <div>
    <section class="poster-wrap" v-if="cate">
      <div class="poster" v-if="cate.bannerUrl">
        <img :src="cate.bannerUrl">
      </div>
    </section>
    <section class="Goods" v-if="cate">
      <h1 class="Goods-header">{{cate.name}}好物</h1>
      <ul class="Goods-list">
        <li v-for="(item,index) in cate.itemList" :key="index">
          <div class="goodInfo">
            <img :src="item.primaryPicUrl">
            <p>{{item.simpleDesc}}</p>
          </div>
          <p class="goodTitle">{{item.name}}</p>
          <span>￥{{item.retailPrice}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['cateLists']),
      cate(){
       // console.log(this.cateLists[this.$route.params.index]);
        if(this.cateLists[this.$route.params.index]){
          console.log(this.cateLists[this.$route.params.index].bannerUrl);
        }

        return this.cateLists[this.$route.params.index]
      }
    },
    mounted(){
      this.$store.dispatch('getCateLists');
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";

  .poster-wrap {
    width: 100%;
    padding-top: 148/@rem;
    .poster{
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .Goods {
    width: 100%;
    background-color: #fff;
    margin-top: 20/@rem;
    padding-bottom: 98/@rem;
    .Goods-header {
      height: 120/@rem;
      font-size: 28/@rem;
      text-align: center;
      line-height: 120/@rem;
    }
    .Goods-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      li {
        width: 345/@rem;
        margin-bottom: 30/@rem;
        .goodInfo {
          border-radius: 10/@rem;
          background-color: #F1ECE2;
          color: #9F8A60;
          margin-bottom: 10/@rem;
          img {
            width: 345/@rem;
            border-radius: 10/@rem;
          }
          p {
            font-size: 24/@rem;
            padding: 20/@rem 10/@rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;//这3个条件必须都满足才能显示省略号
          }
        }
        .goodTitle {
          font-size: 28/@rem;
          margin-left: 10/@rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;//这3个条件必须都满足才能显示省略号
        }
        span {
          font-size: 32/@rem;
          color: #BA393D;
        }
      }
    }
  }
</style>
