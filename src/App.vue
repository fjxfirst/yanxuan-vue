<template>
  <div class="app">
    <!--<interlayer v-show="$route.meta.isShow"/>-->
    <router-view></router-view>
    <footer-guide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Interlayer from './pages/interlayer/interlayer'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components:{
      Interlayer,
      FooterGuide
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .app{
    height: 100%;
  }
</style>
