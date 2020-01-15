<template>
  <div id="detail">
    <detail-nav-bar class="navbar"/>
    <!-- <scroll class="content"> -->
      <detail-swiper :topImages="topImages"/>
      <detail-goods :goods="goods"/>
      <detail-rate :rate="rate"/>
      <detail-shop :shop="shop"/>
      <detail-info :detailInfo="detailInfo"/>
      <detail-params :params="params"/>
      <goods-list class="list" :width= 30 :goods="list">
        <goods-list-item></goods-list-item>
      </goods-list>
    <!-- </scroll> -->
  </div>
</template>

<script>
  // 公共组件
  // import Scroll from '../../components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  // 子组件
  import DetailNavBar from './childCompons/DetailNavBar'
  import DetailSwiper from './childCompons/DetailSwiper'
  import DetailGoods from './childCompons/DetailGoods'
  import DetailShop from './childCompons/DetailShop'
  import DetailInfo from './childCompons/DetailInfo'
  import DetailParams from './childCompons/DetailParams'
  import DetailRate from './childCompons/DetailRate'
  // 工具类
  import { getDetail, GoodsInfo, ShopInfo, GoodsDetailInfo, Params, RateInfo } from 'network/detail'
  export default{
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        params: {},
        list: [],
        rate: {}
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
        
        this.goods = new GoodsInfo(data.columns, data.itemInfo, data.services);
        // console.log(this.goods);
        // 3. 获取评论
        this.rate = new RateInfo(data.rateInfo);
        console.log(this.rate);
        // 4. 获取店铺信息
        this.shop = new ShopInfo(data.shopInfo);
        // console.log(this.shop);
        // 5. 获取商品详细信息
        this.detailInfo = new GoodsDetailInfo(data.detailInfo);
        // console.log(this.detailInfo);
        // 6. 获取参数信息
        this.params = new Params(data.itemParams);
        // console.log(this.params);
        // 7. 获取热门推荐
        this.list = data.list;
        // console.log(this.list);
        
      })
    },
    mounted() {
    },
    methods: {
     
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      DetailShop,
      // Scroll,
      DetailInfo,
      DetailParams,
      GoodsListItem,
      GoodsList,
      DetailRate
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #fff;
    z-index: 10;
    margin-bottom: -49px;
  }
  .navbar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
  .list {
    margin-top: 17px;
    background-color: #fff;
  }
</style>