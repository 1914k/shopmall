<template>
  <div id="detail">
    <detail-nav-bar class="navbar" @titleClick="titleClick" :titleH="titleH"/>
    <!-- <scroll class="content"> -->
      <detail-swiper :topImages="topImages"/>
      <detail-goods :goods="goods"/>
      <detail-rate :rate="rate" ref="rate"/>
      <detail-shop :shop="shop"/>
      <detail-info :detailInfo="detailInfo" @infoLoad="infoLoad"/>
      <detail-params :params="params" ref="params"/>
      <goods-list class="list" :width= 30 :goods="list" ref="recommend">
        <goods-list-item></goods-list-item>
      </goods-list>
      <back-top @click.native="backClick" v-if="isShow"/>
    <!-- </scroll> -->
    <detail-bottom-bar @addCart="addToCart" :isUp="isShow" :product="product"/>
  </div>
</template>

<script>
  // 公共组件
  // import Scroll from '../../components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import GoodsListItem from 'components/content/goods/GoodsListItem'
  import BackTop from "../../components/content/backTop/BackTop"
  // 子组件
  import DetailNavBar from './childCompons/DetailNavBar'
  import DetailSwiper from './childCompons/DetailSwiper'
  import DetailGoods from './childCompons/DetailGoods'
  import DetailShop from './childCompons/DetailShop'
  import DetailInfo from './childCompons/DetailInfo'
  import DetailParams from './childCompons/DetailParams'
  import DetailRate from './childCompons/DetailRate'
  import DetailBottomBar from './childCompons/DetailBottomBar'
  // 工具类
  import { getDetail, GoodsInfo, ShopInfo, GoodsDetailInfo, Params, RateInfo } from 'network/detail'
  import { debounce } from '../../common/utils'
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
        rate: {},
        titleH: [],
        isShow: false,
        product: {}
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
        // console.log(this.rate);
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
        //获取购物车需要展示的信息

        const product = {};
        product.id = this.id;
        product.img = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.newPrice
        // console.log(product);
        this.product = product;
        
      })
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {  
      titleClick(index) {
        // console.log(this.$refs.rate.$el.offsetTop);
        // console.log(this.$refs.params.$el.offsetTop);
        // console.log(this.$refs.recommend.$el.offsetTop);
                
        document.documentElement.scrollTop=this.titleH[index];
      },
      infoLoad() {
        // console.log('图片加载完成');
        debounce(this.jiazai, 10)();
       
      },
      jiazai() {
        this.titleH.push(0);
        this.titleH.push(this.$refs.rate.$el.offsetTop - 49);
        this.titleH.push(this.$refs.params.$el.offsetTop - 49);
        this.titleH.push(this.$refs.recommend.$el.offsetTop - 49);
      },
      backClick() {
        // console.log("22222222222222");
        // document.documentElement.scrollTo(0,0);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
        document.body.scrollTop;
        // console.log(scrollTop);
        this.isShow = scrollTop >= this.titleH[1] ? true : false;
      },
      addToCart() {
        // console.log(this.id);
        //1. 获取购物车需要展示的信息
        const product = {};
        product.id = this.id;
        product.img = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.newPrice
        console.log(product);
        this.product = product;

        // 2. 将商品添加到购物车里
        // this.$store.state.cartList.push(product);
        // 不要直接添加，要通过 vuex里的 mutation 添加
        this.$store.commit('addCart',product);
      }
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
      DetailRate,
      DetailBottomBar,
      BackTop
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #fff;
    z-index: 9;
    margin-bottom: -49px;
    /* height: 100vh; */
  }
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
  .list {
    margin-top: 17px;
    padding-bottom: 58px;
  }
</style>