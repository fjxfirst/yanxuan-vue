<template>
  <div id="interlayer-wrap">
    <img src="./img/yanxuan.jpg">
    <img src="./img/newPerson.jpg">
    <div id="app-wrap">
      <img src="./img/appDownload.jpg">
      <router-link class="download" to=""></router-link>
      <router-link class="phone-browse" to="/Home"></router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  #interlayer-wrap {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
    #app-wrap {
      width: 100%;
      position: relative;
      .download {
        display: block;
        position: absolute;
        width: 60%;
        height: 20%;
        top: 23%;
        left: 20%;
      }
      .phone-browse {
        display: block;
        position: absolute;
        width: 32%;
        height: 10%;
        top: 50%;
        left: 34%;
      }
    }
  }
</style>
