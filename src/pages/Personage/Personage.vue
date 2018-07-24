<template>
  <div class="person-wrap">
    <header-guide/>
    <section class="login-switch-wrap">
      <div class="logo">
        <img src="./img/personlogo.png">
      </div>
      <div class="login-switch">
        <router-link class="switchPhone" to="">
          <i class="icon-iphone"></i><span>手机号码登录</span>
        </router-link>
        <router-link class="switchEmail" to="">
          <i class="icon-email"></i><span>邮箱账号登录</span>
        </router-link>
        <router-link class="phoneSingIn" to="/Regist">
          手机号快捷注册<i class="icon-goahead"></i>
        </router-link>
      </div>
      <div class="login-method">
        <span><i class="icon-weixin"></i>微信</span><i class="line"></i>
        <span><i class="icon-qq"></i>QQ</span><i class="line"></i>
        <span><i class="icon-weibo"></i>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
  import HeaderGuide from '../../components/HeaderGuide/HeaderGuide'

  export default {
    components: {
      HeaderGuide
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";

  .person-wrap {
    width: 100%;
    height: 100%;
    background-color: #F2F5F4;
    .login-switch-wrap {
padding-top:44/@rem;
      .logo {
       padding: 160/@rem 0;
        text-align: center;
        img {
          width: 268/@rem;
          height: 90/@rem;
        }
      }
      .login-switch {
        text-align: center;
        .switchPhone {
          margin: 0 auto;
          display: block;
          width: 666/@rem;
          height: 90/@rem;
          text-align: center;
          line-height: 90/@rem;
          font-size: 28/@rem;
          color: #fff;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          i {
            margin-right: 20/@rem;
            font-size: 40/@rem;
          }
          span {

          }
        }
        .switchEmail {
          margin: 32/@rem auto;
          display: block;
          width: 666/@rem;
          height: 90/@rem;
          text-align: center;
          line-height: 90/@rem;
          font-size: 28/@rem;
          color: #B4282D;
          border: 1px solid #b4282d;
          i {
            margin-right: 20/@rem;
            font-size: 40/@rem;
          }
          span {

          }
        }
        .phoneSingIn {
          color: #333;
          font-size: 28/@rem;
        }
      }
      .login-method {
        line-height: 40/@rem;
        margin: 0 auto;
        margin-top: 410/@rem;
        width: 60%;
        display: flex;
        justify-content: space-around;
        span {
          color: #7F7F7F;
          font-size: 28/@rem;
        }
        .line{
          display: inline-block;
          vertical-align: bottom;
          height:44/@rem;
          width: 2/@rem;
          background-color:#7F7F7F;
        }

      }
    }
  }

  @font-face {
    font-family: 'icomoon';
    src: url('fonts/icomoon.eot?cnn2qt');
    src: url('fonts/icomoon.eot?cnn2qt#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?cnn2qt') format('truetype'),
    url('fonts/icomoon.woff?cnn2qt') format('woff'),
    url('fonts/icomoon.svg?cnn2qt#icomoon') format('svg');
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

  .icon-weixin:before {
    content: "\e906";
  }

  .icon-goahead:before {
    content: "\e907";
  }

  .icon-iphone:before {
    content: "\e908";
  }

  .icon-qq:before {
    content: "\e909";
  }

  .icon-weibo:before {
    content: "\e910";
  }

  .icon-email:before {
    content: "\e911";
  }


</style>
