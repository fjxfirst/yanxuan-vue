<template>
  <div id="footer-wrap">
    <router-link class="footer" :class="{active1:'/Home'===$route.path}" to="/Home">
      <i class="footer-icon"></i>
      <span class="footer-name">首页</span>
    </router-link>
    <router-link class="footer" :class="{active2:'/KnowGood'===$route.path}" to="/KnowGood">
      <i class="footer-icon"></i>
      <span class="footer-name">识物</span>
    </router-link>
    <router-link class="footer" :class="{active3:'/Kind'===$route.path}" to="/Kind">
      <i class="footer-icon"></i>
      <span class="footer-name">分类</span>
    </router-link>
    <router-link class="footer" :class="{active4:'/ShopCart'===$route.path}" to="/ShopCart">
      <i class="footer-icon"></i>
      <span class="footer-name">购物车</span>
    </router-link>
    <router-link class="footer" :class="{active5:'/Personage'===$route.path}" to="/Personage">
      <i class="footer-icon"></i>
      <span class="footer-name">个人</span>
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  #footer-wrap {
    position: fixed;
    width:100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background-color: #fafafa;
    .footer{
      display: block;
      width:200/@rem;
      height: 142/@rem;
      text-align:center;
      .footer-icon{
        display: block;
        background-repeat: no-repeat;
        background-size: 60/@rem;
        width: 60/@rem;
        height: 60/@rem;
        margin: 0 auto;
        margin-top:15/@rem;
      }
      &:nth-child(1){
        .footer-icon{
          background-image: url("./img/footer.png");
          background-position: 0px -300/@rem;
        }
      }
      &:nth-child(2){
        .footer-icon{
          background-image: url("./img/footer.png");
          background-position: 0px -870/@rem;
        }
      }
      &:nth-child(3){
        .footer-icon{
          background-image: url("./img/footer.png");
          background-position: 0px -370/@rem;
        }
      }
      &:nth-child(4){
        .footer-icon{
          background-image: url("./img/footer.png");
          background-position: 0px -120/@rem;
        }
      }
      &:nth-child(5){
        .footer-icon{
          background-image: url("./img/footer.png");
          background-position: 0px 100%;
        }
      }
      .footer-name{
        font-family: "Microsoft YaHei UI";
        font-size: 35/@rem;
        color:#666;
      }
      &.active1{
        .footer-icon{
          background-position: 0px -499/@rem;
        }
        .footer-name{
          color:#b4282d;
        }
      }
      &.active2{
        .footer-icon{
          background-position: 0px -745/@rem;
        }
        .footer-name{
          color:#b4282d;
        }
      }
      &.active3{
        .footer-icon{
          background-position: 0px -250/@rem;
        }
        .footer-name{
          color:#b4282d;
        }
      }
      &.active4{
        .footer-icon{
          background-position: 0px -0/@rem;
        }
        .footer-name{
          color:#b4282d;
        }
      }
      &.active5{
        .footer-icon{
          background-position: 0px 89%;
        }
        .footer-name{
          color:#b4282d;
        }
      }
    }

  }
</style>
