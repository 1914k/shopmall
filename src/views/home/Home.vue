<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childCompons/HomeSwiper'
  import RecommendView from './childCompons/RecommendView'
  import FeatureView from './childCompons/FeatureView'

  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Home',
    data() {
      return {
        // result: null,
        banner: [],
        recommend: [],
        // popular: []
      }
    },
    created() {
      // 拿到多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res;
        // console.log(this.result);  
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(this.banner);
        console.log(this.recommend);
      })
        // console.log(this.result); 这里打印的是空，因为 getHomeMultidata() 是异步操作
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
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
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
  }
</style>
