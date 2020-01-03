<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control class="tab-control" 
        :titles="['流行','新款','精选']" 
        @tabClick="changeType"/>
    <goods-list :goods="goods[type].list"/>
  </div>
</template>

<script>
// 子组件
  import HomeSwiper from './childCompons/HomeSwiper'
  import RecommendView from './childCompons/RecommendView'
  import FeatureView from './childCompons/FeatureView'
// 公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
// 方法 额外数据
  import { getHomeMultidata, getHomeGoods } from 'network/home'
  
  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        type: "pop"
      }
    },
    created() {
      //1. 拿到多个数据
      this.getHomeMultidata();
        // console.log(this.result); 这里打印的是空，因为 getHomeMultidata() 是异步操作
      // 2.请求商品数据
      this.getHomeGoods();
      // this.getHomeGoods('news')
      // this.getHomeGoods('sell')
    },
    methods: {
      // 网络请求相关的****************
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // console.log(this.result);  
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          // console.log(this.banner);
          // console.log(this.recommend);
        })
      },
      getHomeGoods() {
        // const page = this.goods[type].page + 1;
        getHomeGoods().then(res => {
        // console.log(res);
        // ...res.data.list 可以把数组里的东西提出来，而不是把整个数组加进去
        this.goods.pop.list.push(...res.pop.list);
        this.goods.news.list.push(...res.news.list);
        this.goods.sell.list.push(...res.sell.list);
        // this.goods.type.page++
        // console.log(this.goods);
        
        // res.data.list
        })
      },
      // 事件监听相关的****************
      changeType(index) {
        // console.log(index);  
        let type = ["pop", "news", "sell"];
        this.type = type[index];
       /*  switch (index) {
          case 0:
            this.type = "pop";
            break;
          case 1:
            this.type = "news";
            break;
          case 2:
            this.type = "sell";
            break;
        } */
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    }
  }
</script>

<style scopde>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    z-index: 9999;
    left: 0;
    right: 0;
    top: 0;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 999;
  }
</style>
