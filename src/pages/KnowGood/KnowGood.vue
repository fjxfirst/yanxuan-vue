<template>
  <div class="knowgood">
    <header-guide/>
    <div class="knowgood-scroll-wrap">
      <div class="knowgood-content">
        <!--严选推荐-->
        <section class="yxrecommend clearFix">
          <div class="yxrecommend-container swiper-container">
            <ul class="recommend-list swiper-wrapper">
              <li class="swiper-slide" v-for="(banner,index) in banners" :key="index">
                <div class="img-wrap">
                  <img :src="banner.picUrl">
                  <div class="img-mask">
                    <p>—{{banner.subTitle}}—</p>
                    <p>{{banner.title}}</p>
                    <p>{{banner.desc}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="recommend-article">
            <ul class="article-list">
              <li v-for="(column,index) in columns" :key="index">
                <div class="article-img">
                  <img :src="column.picUrl">
                  <p class="article-count">{{column.articleCount}}</p>
                </div>
                <p class="recommend-name">{{column.title}}</p>
              </li>
            </ul>
          </div>
        </section>
        <!--为你推荐-->
        <section class="foryourecommend">
          <header class="recommend-header">为你推荐</header>
          <div class="first-recommend" v-if="recommend.recommendBanner">
            <div class="recommendimg-wrap">
              <img :src="recommend.recommendBanner.picUrl">
              <p>{{recommend.recommendBanner.typeName}}</p>
            </div>
            <p>{{recommend.recommendBanner.title}}<span>{{recommend.recommendBanner.priceInfo}}</span></p>
            <span class="style">{{recommend.recommendBanner.subtitle}}</span>
          </div>
          <div class="person-recommend clearFix" v-for="(re,index) in recommend.recommends" :key="index">
            <div class="comment">
              <div class="person">
                <img :src="re.avatar">
                <span>{{re.nickname}}</span>
              </div>
              <p class="goodInfo">{{re.title}},...</p>
            </div>
            <div class="imginfo">
              <img :src="re.picUrl">
              <p>{{re.typeName}}</p>
            </div>
          </div>
        </section>
        <!--十点一刻-->
        <section class="ten">
          <header class="ten-head">十点一刻</header>
          <div class="ten-container">
            <ul class="ten-list">
              <li v-for="(item ,index) in tenfifteens" :key="index">
                <div class="tem-item">
                  <p class="topic">—今日话题—</p>
                  <p class="danshen">{{item.title}}</p>
                  <p class="saydanshen">{{item.desc}}</p>
                  <div class="join">
                    <img :src="part" v-for="(part,index) in item.participantAvatar" :key="index">
                    <span class="join-count">{{item.participantNum}}</span><span class="join-info">人参与话题</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!--严选甄品-->
        <section class="foryourecommend">
          <header class="recommend-header">为你推荐</header>
          <div class="first-recommend" v-if="zhenpin.zhenOne">
            <div class="recommendimg-wrap">
              <img :src="zhenpin.zhenOne.picUrl">
              <p>{{zhenpin.zhenOne.nickname}}</p>
            </div>
            <p>{{zhenpin.zhenOne.title}}<span>{{zhenpin.zhenOne.priceInfo}}</span></p>
            <span class="style">{{zhenpin.zhenOne.subtitle}}</span>
          </div>
          <div class="person-recommend clearFix" v-for="(re,index) in zhenpin.zhenpins" :key="index">
            <div class="comment">
              <div class="person">
                <img :src="re.avatar">
                <span>{{re.nickname}}</span>
              </div>
              <p class="goodInfo">{{re.title}},...</p>
            </div>
            <div class="imginfo">
              <img :src="re.picUrl">
              <p>{{re.typeName}}</p>
            </div>
          </div>
        </section>
        <!--严选Look-->
        <section class="yxLook">
          <header class="yxLook-header">严选LOOK</header>
          <div class="yxLook-imgwrap">
            <img :src="yxLook.picUrl">
          </div>
          <div class="author-wrap">
            <div class="author">
              <img :src="yxLook.avatar">
              <span>{{yxLook.nickname}}</span>
            </div>
            <div class="yxLook-author-say">{{yxLook.content}}</div>
          </div>

        </section>

        <div class="line-title">
          <div class="line-text">更多精彩</div>
        </div>
      </div>
    </div>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    components: {
      HeaderGuide
    },
    computed: {
      ...mapState(['banners', 'columns', 'recommend',
        'tenfifteens', 'zhenpin', 'yxLook', 'findMores'])
    },
    watch: {
      banners() {
        this.$nextTick(() => {
          new Swiper('.yxrecommend-container', {
            loop: true,
            slidesOffsetBefore: window.innerWidth * 0.04,
            width: window.innerWidth - window.innerWidth * 0.08
          });
        });
      }


    },
    methods:{
      pullup(){
        console.log('aaaaaa')
      }
    },
    mounted() {
      this.$store.dispatch('getBanners');
      this.$store.dispatch('getColumns');
      this.$store.dispatch('getRecommend');
      this.$store.dispatch('getTenfifteens');
      this.$store.dispatch('getZhenpin');
      this.$store.dispatch('getYxLook');
      this.$store.dispatch('getFindMores');

     /* this.$nextTick(() => {
        this.knowScroll= new BScroll('.knowgood-scroll-wrap', {
          scrollY: true,
          scrollX: false
        });
      });*/

      const recommendScroll = new BScroll('.recommend-article', {
        scrollY: false,
        scrollX: true
      });
      const tenScroll = new BScroll('.ten-container', {
        scrollY: false,
        scrollX: true
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";
  @import "../../common/less/line.less";

  .knowgood {
    .knowgood-scroll-wrap {
      .knowgood-content {
        padding-top: 88/@rem;
        .yxrecommend {
          background-color: #fff;
          width: 100%;
          .yxrecommend-container {
            width: 100%;
            margin-top: 20/@rem;
            margin-bottom: 46/@rem;
            .recommend-list {
              li {
                .img-wrap {
                  position: relative;
                  text-align: center;
                  img {
                    width: 670/@rem;
                    height: 385/@rem;
                    border-radius: 8/@rem;
                  }
                  .img-mask {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                    background-color: rgba(255, 255, 255, .9);
                    width: 466/@rem;
                    height: 198/@rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                      &:nth-child(1) {
                        color: #7f7f7f;
                        font-size: 20/@rem;
                      }
                      &:nth-child(2) {
                        font-family: PingFangSC-Light, helvetica, 'Heiti SC';
                        font-size: 32/@rem;
                        font-weight: bold;
                        margin: 25/@rem 0;
                      }
                      &:nth-child(3) {
                        font-family: PingFangSC-Light, helvetica, 'Heiti SC';
                        font-size: 24/@rem;

                      }
                    }
                  }
                }

              }
            }
          }
          .recommend-article {
            width: 100%;
            overflow: hidden;
            margin-bottom: 46/@rem;
            .article-list {
              white-space: nowrap;
              float: left;
              font-size: 0;
              li {
                display: inline-block;
                margin-right: 24/@rem;
                &:nth-child(1) {
                  margin-left: 30/@rem;
                }
                .article-img {
                  position: relative;
                  margin-bottom: 22/@rem;
                  img {
                    width: 164/@rem;
                  }
                  .article-count {
                    position: absolute;
                    font-size: 24/@rem;
                    color: #fff;
                    top: 0;
                    right: 0;
                    padding-right: 10/@rem;
                  }
                }
                .recommend-name {
                  font-size: 24/@rem;
                  text-align: center;

                }
              }
            }
          }
        }

        .foryourecommend {
          width: 100%;
          margin-top: 20/@rem;
          background-color: #fff;
          padding-bottom: 20/@rem;
          .recommend-header {
            width: 100%;
            height: 120/@rem;
            text-align: center;
            line-height: 120/@rem;
            font-size: 32/@rem;
          }
          .first-recommend {
            width: 688/@rem;
            margin: 0 auto;
            padding-bottom: 67/@rem;
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            .recommendimg-wrap {
              position: relative;
              img {
                width: 688/@rem;
              }
              p {
                position: absolute;
                font-size: 24/@rem;
                top: 20/@rem;
                left: 20/@rem;
                background-color: #FCFCFC;
                padding: 5/@rem;
                border-radius: 15/@rem;
              }
            }
            p {
              padding: 0 10/@rem;
              padding-top: 24/@rem;
              font-size: 36/@rem;
              color: #333;
              span {
                float: right;
              }
            }
            .style {
              padding: 0 10/@rem;
              font-size: 28/@rem;
              color: #7f7f7f;
            }
          }
          .person-recommend {
            width: 690/@rem;
            margin: 0 auto;
            margin-top: 26/@rem;
            border: 1px solid #d9d9d9;
            .comment {
              float: left;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .person {
                height: 48/@rem;
                line-height: 48/@rem;
                margin-top: 80/@rem;
                margin-left: 40/@rem;
                img {
                  width: 46/@rem;
                  border-radius: 50%;
                  vertical-align: bottom;
                }
                span {
                  font-size: 20/@rem;
                }
              }
              .goodInfo {
                margin-left: 40/@rem;
                margin-top: 30/@rem;
                font-size: 32/@rem;
              }
            }
            .imginfo {
              position: relative;
              float: right;
              img {
                width: 280/@rem;
              }
              p {
                position: absolute;
                color: #333;
                top: 10/@rem;
                left: 10/@rem;
                font-size: 24/@rem;
                font-family: PingFangSC-Light, helvetica, 'Heiti SC';
                background-color: rgba(255, 255, 255, .9);
                padding: 7/@rem;
                border-radius: 20/@rem;
              }
            }
          }
        }

        .ten {
          width: 100%;
          background-color: #fff;
          margin-top: 20/@rem;
          padding-bottom: 35/@rem;
          .ten-head {
            width: 100%;
            height: 120/@rem;
            text-align: center;
            line-height: 120/@rem;
            font-size: 32/@rem;
          }
          .ten-container {
            overflow: hidden;
            .ten-list {
              float: left;
              white-space: nowrap;
              font-size: 0;
              li {
                display: inline-block;
                .tem-item {
                  width: 580/@rem;
                  height: 411/@rem;
                  background-image: url("./img/borderImg.png");
                  background-repeat: no-repeat;
                  background-size: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                  margin-left: 30/@rem;
                  .topic {
                    font-size: 24/@rem;
                    color: #7f7f7f;
                  }
                  .danshen {
                    font-family: PingFangSC-Light, helvetica, 'Heiti SC';
                    color: #333;
                    font-size: 36/@rem;
                    font-weight: bold;
                    margin-top: -60/@rem;
                  }
                  .saydanshen {
                    font-size: 28/@rem;
                    color: #333;
                    margin-top: -90/@rem;
                  }
                  .join {
                    height: 48/@rem;
                    line-height: 48/@rem;
                    font-size: 0;
                    margin-top: -40/@rem;
                    margin-bottom: 30/@rem;
                    img {
                      width: 48/@rem;
                      height: 48/@rem;
                      border-radius: 50%;
                      vertical-align: top;
                    }

                    span {
                      font-size: 24/@rem;
                      color: #7f7f7f;
                    }
                  }
                }
              }
            }
          }
        }

        .yxLook {
          width: 100%;
          margin-top: 20/@rem;
          background-color: #fff;
          .yxLook-header {
            width: 100%;
            height: 120/@rem;
            text-align: center;
            line-height: 120/@rem;
            font-size: 32/@rem;
          }
          .yxLook-imgwrap {
            width: 100%;
            img {
              width: 100%;
            }
          }
          .author-wrap {
            width: 100%;
            .author {
              height: 48/@rem;
              line-height: 48/@rem;
              padding: 24/@rem 0 24/@rem 30/@rem;
              img {
                width: 46/@rem;
                height: 46/@rem;
                border-radius: 50%;
                vertical-align: bottom;
              }
              span {
                color: #333;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 24/@rem;
              }
            }
            .yxLook-author-say {
              padding-left: 30/@rem;
              height: 44/@rem;
              line-height: 44/@rem;
              color: #7f7f7f;
              font-size: 28/@rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              padding-bottom: 46/@rem;

            }
          }

        }
      }
    }
  }

</style>
