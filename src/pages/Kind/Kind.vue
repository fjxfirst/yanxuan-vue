<template>
  <div>
    <div class="top-search">
      <div class="search-inner">
        <i></i>
        <p class="search-text">搜索商品，共<span>10857</span>款好物</p>
      </div>
    </div>
    <section class="classify-content">
      <div class="leftClassify">
        <div class="classify-container">
          <ul class="classify-list">
            <li class="on">推荐专区</li>
            <li>爆品区</li>
            <li>夏季专区</li>
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
        </div>
      </div>
      <RightContent/>
    </section>
  </div>
</template>

<script>
  import RightContent from '../../components/RightContent/RightContent'

  export default {
    components: {
      RightContent
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/remAdaptive.less";
  @import "../../common/css/fonts.css";

  .top-search {
    width: 100%;
    .search-inner {
      i {
      }
      .search-text {

      }
    }
  }

  .classify-content {
    width: 100%;
    .leftClassify {
      width: 21.6%;
      background-color: aquamarine;
      float: left;
      .classify-container {
        .classify-list {
          li {

          }
          .on {

          }
        }
      }
    }
  }
</style>
