<template>
  <div>
    <!--头部搜索-->
    <header class="header">
      <div class="header-top-wrap clearFix">
        <router-link class="logotext" to="/Home" replace>
          <img src="./img/logotext.png">
        </router-link>
        <router-link class="search" to="">
          <i class="icon-search"></i>搜索商品，共10733款好物
        </router-link>
      </div>
      <nav class="nav-wrap clearFix">
        <ul class="ulList">
          <li class="active">推荐</li>
          <li>居家</li>
          <li>鞋包配饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色区</li>
        </ul>
      </nav>
    </header>
    <!--轮播图-->
    <section class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./img/01.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/02.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/03.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/04.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/05.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/06.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/07.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./img/08.png">
          </div>
        </div>
        <div class="swiper-pagination my-pagination-current"></div>
      </div>
      <div class="brand">
        <div><i class="icon-dui2"></i><span>网易自营品牌</span></div>
        <div><i class="icon-dui2"></i><span>30天无忧退货</span></div>
        <div><i class="icon-dui2"></i><span>48小时快速退款</span></div>
      </div>
    </section>
    <!--品牌制造商直供-->
    <section class="Manufacturer-wrap">
      <header class="Manufacturer-header" >
        品牌制造商直供<i class="icon-rightcrl"></i>
      </header>
      <div class="Manufacturer-innerwrap">
        <div class="Manufacturer">
          <img src="./img/m1.png">
          <p>Ck制造商</p>
          <p>25元起</p>
        </div>
        <div class="Manufacturer">
          <img src="./img/m2.png">
          <p>Ck制造商</p>
          <p>25元起</p>
        </div>
        <div class="Manufacturer">
          <img src="./img/m3.png">
          <p>Ck制造商</p>
          <p>25元起</p>
        </div>
        <div class="Manufacturer">
          <img src="./img/m4.png">
          <p>Ck制造商</p>
          <p>25元起</p>
        </div>
      </div>

    </section>
    <!--新品首发-->
    <section class="newGoods">
      <header>
        <span>新品首发</span>
        <div class="watchAll"></div>
      </header>
      <div>
        <ul>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>查看全部</li>
        </ul>
      </div>
    </section>
    <!--人气推荐-->
    <section class="recommend">
      <header>
        <span>人气推荐</span>
        <div class="watchAll"></div>
      </header>
      <div>
        <ul>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>
            <img src="">
            <p>网易智造3D可塑对对对对对对对对对</p>
            <p>创新可逆模式 空气对对对对对对对对对</p>
            <span>￥2499</span>
          </li>
          <li>查看全部</li>
        </ul>
      </div>
    </section>
    <!--限时购-->
    <section>
      <div>
        <p></p>
        <div>
          <span>00</span>:<span>38</span>:<span>45</span>
        </div>
        <p></p>
      </div>
      <div>
        <img src="">
        <div class="price">
          <p>￥60</p>
          <p>￥79</p>
        </div>
      </div>
    </section>
    <!--福利社-->
    <section>
      <img src="">
    </section>
    <!--专题精选-->
    <section>
      <header>专题精选</header>
      <span></span>
      <div>
        <ul>
          <li>
            <img src="">
            <p>青汁兑蜂蜜，轻盈有甜蜜<span>128元起</span></p>
            <p>每天来杯青汁蜂蜜水，给生活甜一点甜蜜</p>
          </li>
          <li>
            <img src="">
            <p>青汁兑蜂蜜，轻盈有甜蜜<span>128元起</span></p>
            <p>每天来杯青汁蜂蜜水，给生活甜一点甜蜜</p>
          </li>
        </ul>
      </div>

    </section>
    <!--居家好物-->
    <section>
      <h1>居家好物</h1>
      <ul>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
      </ul>
    </section>
    <!--居家好物-->
    <section>
      <h1>居家好物</h1>
      <ul>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
      </ul>
    </section>
    <!--居家好物-->
    <section>
      <h1>居家好物</h1>
      <ul>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
        <li>
          <div>
            <img src="">
            <p>透气吸汗+亲肤柔软棉</p>
          </div>
          <p>自然棉麻四件套</p>
          <span>￥599</span>
        </li>
      </ul>
    </section>
    <!--循环.....-->
    <footer>
      <div>
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <p>
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

  export default {
    mounted() {
      const scroll = new BScroll('.nav-wrap', {
        scrollX: true
      });
      const sw = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          currentClass: 'my-pagination-current',
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/less/clearFix.less";

  .header {
    background-color: #fff;
    .header-top-wrap {
      box-sizing: border-box;
      width: 100%;
      padding: 25/@rem 44/@rem;

      .logotext {
        display: block;
        float: left;
        margin-top: 10/@rem;
        margin-right: 20/@rem;
        img {
          width: 205/@rem;
          vertical-align: middle;
        }
      }
      .search {
        display: block;
        float: left;
        width: 750/@rem;
        height: 80/@rem;
        color: #666;
        background-color: #EDEDED;
        font-size: 40/@rem;
        text-align: center;
        line-height: 80/@rem;
        border-radius: 12/@rem;
        i {
          margin-right: 10/@rem;
          font-size: 45/@rem;
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
          min-width: 120/@rem;
          height: 80/@rem;
          font-size: 42/@rem;
          line-height: 80/@rem;
          margin: 0 40/@rem;
          &.active {
            color: #B4282D;
            border-bottom: 1px solid #B4282D;
          }
        }
      }
    }
  }
  .swiper {
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          img {
            width: 100%;
            display: block;
          }
        }
      }
      .my-pagination-current {
        .swiper-pagination-bullet {
          width: 55/@rem;
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
      height: 104/@rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i{
        display: inline-block;
        vertical-align: middle;
        margin-right: 4/@rem;
      }
      span{
        font-size: 32/@rem;
        color:#555;
      }
    }
  }
  .Manufacturer-wrap{
    margin-top: 20/@rem;
    width:100%;
    background-color: #fff;
    .Manufacturer-header{
      text-align: center;
      font-size: 46/@rem;
      height:160/@rem;
      line-height:160/@rem;
      i{

      }
    }
    .Manufacturer-innerwrap{

    }
  }
  @font-face {
    font-family: 'icomoon';
    src: url('fonts/icomoon.eot?mnyhf7');
    src: url('fonts/icomoon.eot?mnyhf7#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?mnyhf7') format('truetype'),
    url('fonts/icomoon.woff?mnyhf7') format('woff'),
    url('fonts/icomoon.svg?mnyhf7#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-dui2:before {
    content: "\e900";
    color: #d81e06;
  }
  .icon-search:before {
    content: "\e903";
  }
  .icon-trunright:before {
    content: "\e901";
    color: #707070;
  }
  .icon-rightcrl:before {
    content: "\e902";
    color: #707070;
  }

</style>
