<template>
  <div class="shopCart-wrap">
    <header class="shipcart-header">
      <p>购物车</p><span>领券</span>
    </header>
    <div class="three">
      <span><i></i>30天无忧退货</span>
      <span><i></i>48小时快速退货</span>
      <span><i></i>满88元免邮费</span>
    </div>
    <div class="img-content">
      <div class="shopcartimgwrap">
        <div class="shopcartImg"></div>
        <span>去添加点什么吧</span>
      </div>
      <div class="loginbtn">
        登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  .shopCart-wrap {
    width: 100%;
    background-color: #F4F4F4;
    height: 100%;
    .shipcart-header {
      width: 100%;
      height: 88/@rem;
      background-color: #fff;
      text-align: center;
      line-height: 88/@rem;
      position: relative;
      p {
        display: inline-block;
        font-size: 36/@rem;
        vertical-align: top;
      }
      span {
        color: #B4282D;
        font-size: 30/@rem;
        position: absolute;
        right: 50/@rem;
      }
    }
    .three {
      width: 100%;
      height: 70/@rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-size: 24/@rem;
        color: #666;
        i {

        }
      }
    }
    .img-content {
      .shopcartimgwrap {
        width: 248/@rem;
        margin:0 auto;
        margin-top: 375/@rem;
        text-align: center;
        .shopcartImg {
          width: 248/@rem;
          height: 248/@rem;
          background-image: url("./img/shopcart.png");
          background-repeat: no-repeat;
          background-size: 100%;
          margin-bottom: -32/@rem;
        }
        span {
          display: inline-block;
          font-size: 28/@rem;
          color: #999;
        }
      }
      .loginbtn {
        margin:0 auto;
        margin-top: 50/@rem;
        width: 498/@rem;
        height: 92/@rem;
        line-height: 92/@rem;
        color: #fff;
        background-color: #b4282d;
        font-size: 30/@rem;
        border-radius: 8/@rem;
        text-align: center;
      }
    }
  }
</style>
