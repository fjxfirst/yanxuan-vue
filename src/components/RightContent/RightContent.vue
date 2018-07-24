<template>
  <div class="right-content-container">
    <div class="rightClassify">
      <div class="look" ref="lookImg"></div>
      <div class="partition-title">—{{currentCate.name}}分类—</div>
      <section class="partition-container">
        <ul class="partition-list clearFix">
          <li v-for="(cateItem,index) in currentCate.subCateList" :key="index">
            <img :src="cateItem.wapBannerUrl">
            <div>{{cateItem.name}}</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      currentCate:{
        type:Object,
        required: true
      }
    },
    mounted() {
      new BScroll('.right-content-container',{
        scrollY:true,
        scrollX:false
      });
      console.log(this.$refs.lookImg);
      this.$refs.lookImg.style.backgroundImage=`url(${this.currentCate.bannerUrl})`
    },
    watch:{
      currentCate(){
        this.$refs.lookImg.style.backgroundImage=`url(${this.currentCate.bannerUrl})`
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";
.right-content-container{
  overflow: hidden;
  height:92%;
  .rightClassify {
    overflow: hidden;
    background-color: #fff;
    .look {
      width: 528/@rem;
      height: 192/@rem;
      background-image: url("./img/look.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
      margin: 30/@rem;
    }
    .partition-title {
      height: 108/@rem;
      line-height: 108/@rem;
      text-align: center;
      font-size: 24/@rem;
      color: #333;
    }
    .partition-container {
      .partition-list {
        padding: 0 30/@rem 0 40/@rem;
        width: 528/@rem;
        li {
          height: 216/@rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 144/@rem;
          margin-right: 30/@rem;
          float: left;
          img {
            width: 144/@rem;
          }
          div {
            color: #333;
            text-align: center;
            font-size: 24/@rem;
          }
        }

      }
    }
  }
}

</style>
