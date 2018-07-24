<template>
  <header id="component-header">
    <router-link class="home-icon" to="/Home"></router-link>
    <router-link class="logo-title" to="/Home">
      <img src="../../common/img/logotext.png">
    </router-link>
    <router-link class="search-icon" to="">
      <i class="icon-search"></i>
    </router-link>
    <router-link class="shopcart-icon" to="/ShopCart"></router-link>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/css/fonts.css";
  #component-header{
    height: 88/@rem;
    line-height: 88/@rem;
    background-color: #FAFAFA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 2;
    .home-icon{
      width: 48/@rem;
      height: 44/@rem;
      background-image: url("../../common/img/footer.png");
      background-repeat: no-repeat;
      background-position: 0px -305/@rem;
      background-size: 100%;
      margin-left: 20/@rem;
    }
    .logo-title{
      height: 44/@rem;
      margin-left: 215/@rem;
      margin-right: 125/@rem;
      img{
        width: 172/@rem;
        vertical-align: top;
      }
    }
    .search-icon{
      margin-right: 35/@rem;
    }
    .shopcart-icon{
      width: 48/@rem;
      height: 44/@rem;
      background-image: url("../../common/img/footer.png");
      background-repeat: no-repeat;
      background-position: 0px -62/@rem;
      background-size: 100%;
    }
  }
</style>
