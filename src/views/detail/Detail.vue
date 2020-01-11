<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-goods-info :goods="goods"></detail-goods-info>
  </div>
</template>

<script>
  // 公共组件


  // 子组件
  import DetailNavBar from './childCompons/DetailNavBar'
  import DetailSwiper from './childCompons/DetailSwiper'
  import DetailGoodsInfo from './childCompons/DetailGoodsInfo'
  // 工具类
  import { getDetail, GoodsInfo } from 'network/detail'
  export default{
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {}
      }
    },
    created() {
      this.id = this.$route.params.id;
      // console.log(this.id);
      getDetail(this.id).then(res => {
        // 1. 获取轮播图信息
        const data = res[0].result;
        this.topImages = data.topImages;
        // 2. 获取商品信息
        // console.log(data);
        
        this.goods = new GoodsInfo(data.columns, data.itemInfo, data.services)
        // console.log(this.goods);
      })
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #fff;
    z-index: 100;
    margin-bottom: -49px;
  }
</style>