<template>
  <div>
    <section class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focu,index) in focusLists" :key="index">
            <img :src="focu.picUrl">
          </div>
        </div>
        <div class="swiper-pagination my-pagination-current"></div>
      </div>
      <div class="brand">
        <div class="brand-item"><i class="icon-dui2"></i><span>网易自营品牌</span></div>
        <div class="brand-item"><i class="icon-dui2"></i><span>30天无忧退货</span></div>
        <div class="brand-item"><i class="icon-dui2"></i><span>48小时快速退款</span></div>
      </div>
    </section>
    <!--品牌制造商直供-->
    <section class="Manufacturer-wrap">
      <header class="Manufacturer-header">
        品牌制造商直供<i class="icon-rightcrl"></i>
      </header>
      <div class="Manufacturer-innerwrap clearFix">
        <div  class="Manufacturer" v-for="(tag,index) in homeTagList" :key="index">
          <img :src="tag.picUrl">
          <p>{{tag.name}}</p>
          <p>{{tag.floorPrice}}</p>
        </div>
      </div>
    </section>
    <!--新品首发-->
    <section class="newGoods">
      <header class="newGoods-header">
        <div class="newfa">新品首发</div>
        <div class="watchAll">查看全部&gt</div>
      </header>
      <div class="newGoods-container">
        <ul class="items-wrap">
          <li v-for="(newItem , index) in newItemLists">
            <div class="img-wrap">
              <img :src="newItem.primaryPicUrl">
            </div>
            <p>{{newItem.name}}</p>
            <p>{{newItem.simpleDesc}}</p>
            <span>￥{{newItem.retailPrice}}</span>
          </li>
          <!--<li>-->
          <!--<div class="img-wrap">-->
          <!--查看全部-->
          <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </section>
    <!--人气推荐-->
    <section class="newGoods">
      <header class="newGoods-header">
        <div class="newfa">人气推荐</div>
        <div class="watchAll">查看全部&gt</div>
      </header>
      <div class="newGoods-container popularIrem-container" >
        <ul class="items-wrap">
          <li v-for="(popularItem , index) in popularItemLists">
            <div class="img-wrap">
              <img :src="popularItem.primaryPicUrl">
            </div>
            <p>{{popularItem.name}}</p>
            <p>{{popularItem.simpleDesc}}</p>
            <span>￥{{popularItem.retailPrice}}</span>
          </li>
          <!--<li>-->
          <!--<div class="img-wrap">-->
          <!--查看全部-->
          <!--</div>-->
          <!--</li>-->
        </ul>
      </div>
    </section>
    <!--限时购-->
    <section class="timeShopping">
      <div class="time-wrap">
        <p class="time-title">严选限时购</p>
        <div class="timer">
          <span>{{flashSaleIndexVO.remainTime | date-format('HH')}}</span>:
          <span>{{flashSaleIndexVO.remainTime | date-format('mm')}}</span>:
          <span>{{flashSaleIndexVO.remainTime | date-format('ss')}}</span>
        </div>
        <p class="time-info">下一场{{flashSaleIndexVO.nextStartTime | date-format('HH:mm')}}开始</p>
      </div>
      <div class="time-img-wrap">
        <img :src="flashSaleIndexVO.primaryPicUrl">
        <div class="price">
          <p class="smallprice">￥{{flashSaleIndexVO.activityPrice}}</p>
          <p class="bigprice">￥{{flashSaleIndexVO.originPrice}}</p>
        </div>
      </div>
    </section>
    <!--福利社-->
    <section class="fuli" v-if="flashSaleIndexVO.saleIndexVO">
      <img :src="flashSaleIndexVO.saleIndexVO.picUrl">
    </section>
    <!--专题精选-->
    <section class="thematic">
      <header class="thematic-header">专题精选 <i class="icon-rightcrl"></i></header>
      <div class="thematic-container">
        <ul class="thematic-wrap">
          <li v-for="(topic,index) in topicLists" :key="index">
            <img :src="topic.itemPicUrl">
            <p>{{topic.title}}<span>{{topic.priceInfo}}元起</span></p>
            <p>{{topic.subtitle}}</p>
          </li>
        </ul>
      </div>

    </section>
    <!--居家好物-->
    <section class="famliyGoods" v-for="(cate,index) in cateLists" :key="index">
      <h1 class="famliyGoods-header">{{cate.name}}好物</h1>
      <ul class="famliyGoods-list">
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
    <!--循环.....-->
    <footer class="home-footer">
      <div class="footer-kind">
        <div class="download-app">下载APP</div>
        <div class="computer">电脑版</div>
      </div>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-2018</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </footer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    /*data(){
      return{
        homeTagList:[]
      }
    },*/
    computed:{
      ...mapState(['focusLists','tagLists','newItemLists','popularItemLists'
      ,'flashSaleIndexVO','topicLists','cateLists']),
      homeTagList(){
        return this.tagLists.slice(0,4);
      }
    },
    watch:{

      /*focusLists(){
        console.log('watch newFocusList')
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              currentClass: 'my-pagination-current',
            }
          });
        });
      },
      newItemLists(){
        console.log('watch newItemLists')
        this.$nextTick(()=>{
          new BScroll('.newGoods-container', {
            scrollX: true,
            scrollY: false
          });
        })
      }*/
    },
    mounted(){
      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(()=>{
            new Swiper('.swiper-container', {
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                currentClass: 'my-pagination-current',
              }
            });
        })
      });
      this.$store.dispatch('getTagList');
      this.$store.dispatch('getNewItemList',()=>{
        this.$nextTick(()=>{
            new BScroll('.newGoods-container', {
              scrollX: true,
              scrollY: false
            });
        })
      });
      this.$store.dispatch('getPopularItemLists',()=>{
        this.$nextTick(()=>{
          new BScroll('.popularIrem-container',{
            scrollX:true,
            scrollY: false
          })
        })
      });
      this.$store.dispatch('getFlashSaleIndexVO');
      this.$store.dispatch('getTopicLists');
      this.$store.dispatch('getCateLists');

      const thematicScroll = new BScroll('.thematic-container', {
        scrollX: true,
        scrollY: false
      });
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";
  @import "../../common/css/fonts.css";
  .swiper {
    width: 100%;
    padding-top: 148/@rem;
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
      .my-pagination-current {
        .swiper-pagination-bullet {
          width: 40/@rem;
          height: 4/@rem;
          margin: 0 3px;
          background: #fff;
          opacity: .5;
          &.swiper-pagination-bullet-active {
            opacity: 1;
            background: #fff;
          }
        }
      }
    }
    .brand {
      background-color: #fff;
      height: 72/@rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .brand-item {
        line-height: 32/@rem;
        i {
          display: inline-block;
          vertical-align: middle;
          margin-right: 4/@rem;
          font-size: 32/@rem;
        }
        span {
          font-size: 24/@rem;
          color: #555;
        }
      }

    }
  }

  .Manufacturer-wrap {
    margin-top: 20/@rem;
    width: 100%;
    background-color: #fff;
    .Manufacturer-header {
      width: 100%;
      text-align: center;
      font-size: 32/@rem;
      height: 110/@rem;
      line-height: 110/@rem;
      i {
        margin-left: 10/@rem;
      }
    }
    .Manufacturer-innerwrap {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      .Manufacturer {
        background-color: #f4f4f4;
        position: relative;
        font-size: 0;
        margin-bottom: 8/@rem;
        &:nth-child(even) {
          margin-left: 8/@rem;
        }
        img {
          width: 355/@rem;
          vertical-align: middle;
        }
        p {
          position: absolute;
          left: 25/@rem;
          font-size: 24/@rem;
          font-family: "Microsoft YaHei UI";
          color: #666;
          &:nth-of-type(1) {
            top: 28/@rem;
          }
          &:nth-of-type(2) {
            top: 60/@rem;
          }
        }
      }
    }
  }

  .newGoods {
    width: 100%;
    margin-top: 20/@rem;
    background-color: #fff;
    .newGoods-header {
      width: 100%;
      height: 260/@rem;
      background-image: url("./img/xpbg.png");
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .newfa {
        color: #8BA0B6;
        font-size: 36/@rem;
        margin-bottom: 20/@rem;
      }
      .watchAll {
        width: 240/@rem;
        height: 56/@rem;
        line-height: 56/@rem;
        background-color: #D8E5F1;
        color: #8BA0B6;
        text-align: center;
        font-size: 30/@rem;
      }
    }
    .newGoods-container {
      margin-top: 30/@rem;
      width: 100%;
      height: 480/@rem;
      overflow: hidden;
      .items-wrap {
        white-space: nowrap;
        font-size: 0;
        float: left;
        li {
          display: inline-block;
          width: 280/@rem;
          margin-bottom: 20/@rem;
          margin-right: 24/@rem;
          &:nth-of-type(1) {
            margin-left: 24/@rem;
          }
          .img-wrap {
            background-color: #F4F4F4;
            font-size: 0;
            margin-bottom: 10/@rem;
            img {
              width: 280/@rem;
              vertical-align: middle;
            }
          }
          p {
            font-size: 28/@rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 10/@rem;
            margin-top: 18/@rem;
            &:nth-of-type(2) {
              font-size: 24/@rem;
              color: #7F7F7F;
              margin-bottom: 16/@rem;
            }
          }
          span {
            font-size: 24/@rem;
            color: #B4282D;
            padding: 0 10/@rem;
          }
        }
      }
    }
  }

  .timeShopping {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    margin-top: 20/@rem;
    height: 380/@rem;
    .time-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .time-title {
        font-size: 36/@rem;
        color: #333;
        letter-spacing: 10/@rem;
      }
      .timer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 30/@rem 0;
        span {
          display: block;
          background-color: #444;
          font-size: 34/@rem;
          padding: 10/@rem;
          color: #fff;
          border-radius: 10/@rem;
        }
      }
      .time-info {
        font-size: 20/@rem;
      }
    }
    .time-img-wrap {
      position: relative;
      img {
        width: 320/@rem;
      }
      .price {
        position: absolute;
        background-color: #F59524;
        width: 96/@rem;
        height: 96/@rem;
        border-radius: 50%;
        bottom: 20/@rem;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .smallprice {
          color: #fff;
          font-size: 24/@rem;
        }
        .bigprice {
          color: #fff;
          font-size: 24/@rem;
        }
      }
    }
  }

  .fuli {
    width: 100%;
    margin: 20/@rem 0;
    img {
      width: 100%;
    }
  }

  .thematic {
    background-color: #fff;
    width: 100%;
    .thematic-header {
      text-align: center;
      font-size: 32/@rem;
      height: 110/@rem;
      line-height: 110/@rem;
    }
    .thematic-container {
      overflow: hidden;
      width: 100%;
      .thematic-wrap {
        float: left;
        white-space: nowrap;
        font-size: 0;
        li {
          display: inline-block;
          &:nth-child(1) {
            margin-left: 40/@rem;
            margin-right: 20/@rem;
          }
          img {
            width: 575/@rem;
            vertical-align: middle;
            border-radius: 10/@rem;
            margin-bottom: 20/@rem;
          }
          p {
            font-size: 28/@rem;
            margin-bottom: 15/@rem;
            span {
              color: #BA393D;
              float: right;
            }
            &:nth-of-type(2) {
              color: #7F7F7F;
              font-size: 24/@rem;
              margin-bottom: 15/@rem;
            }
          }
        }
      }
    }
  }

  .famliyGoods {
    width: 100%;
    background-color: #fff;
    margin-top: 20/@rem;
    .famliyGoods-header {
      height: 120/@rem;
      font-size: 28/@rem;
      text-align: center;
      line-height: 120/@rem;
    }
    .famliyGoods-list {
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

  .home-footer {
    width: 100%;
    height: 244/@rem;
    background-color: #414141;
    padding-bottom: 100/@rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .footer-kind {
      display: flex;
      justify-content: center;
      div {
        width: 170/@rem;
        height: 60/@rem;
        border: 1/@rem solid #6D6D6D;
        font-size: 24/@rem;
        text-align: center;
        line-height: 60/@rem;
        font-weight: bold;
        color: #fff;
        &:nth-child(1) {
          margin-right: 50/@rem;
        }
      }

    }
    .copyright {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 32/@rem;
      span {
        margin-top: 10/@rem;
        font-size: 24/@rem;
        color: #999999;
      }
    }
  }
</style>
