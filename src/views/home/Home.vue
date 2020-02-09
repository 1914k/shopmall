<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
        @tabClick="changeType"
        ref="tabControl2"
        class="tabControl"
        v-show="isTabShow"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" 
        @tabClick="changeType"
        ref="tabControl1"/>
      <goods-list :goods="goods[type].list"/>
    </scroll>
    <back-top @click.native="backClick" v-if="isShow"/> <!-- 组件要监听原生事件要添加 .native -->
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
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
// 方法 额外数据
  import { getHomeMultidata, getHomeGoods } from 'network/home'
  import { debounce } from 'common/utils'
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
        type: "pop",
        isShow: false,
        tabOffsetTop: 0,
        isTabShow: false,
        saveY: 0
      }
    },
    activated() {
      // console.log('活跃');
      this.$refs.scroll.scrollTo(0,this.saveY);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // console.log('不活跃');
      this.saveY = this.$refs.scroll.getScrollY();
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
    mounted() {
      // 3. 监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh);
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })
      // console.log(this.$refs.tabControl);
      // 获取 tabOffsetTop 的值的 方法一 延时输出
      // setTimeout(() => {
      //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      //   console.log(this.tabOffsetTop);
      // },500);
    },
    methods: {
      // 事件监听相关的**************** 
      changeType(index) {
        // console.log(index);  
        let type = ["pop", "news", "sell"];
        this.type = type[index];
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
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
      },
      backClick() {
        // console.log('点击');
        // console.log(this.$refs.scroll);
        // 调用 Scroll 组件里的 methods 里的 scrollTo 方法
         this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position) {
        // 判断 backTop 是否显示
        this.isShow = position.y < -1000 ? true : false;
        // 决定 tabControl 是否吸顶
        this.isTabShow = -position.y > this.tabOffsetTop;
        this.saveY = position.y;
      },
      loadMore() {
        console.log('加载更多');
        if(this.goods.pop.list.length >= 100){
          console.log('停');
          return
        }
        this.getHomeGoods()
        // console.log(this.goods.pop);
        // this.$refs.scroll.finishPullUp()
      },
      // 获取 tabOffsetTop 的值的 方法二 监听图片加载完成
      swiperImageLoad() {
        // console.log(this.$refs.tabControl1.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      },
      // 网络请求相关的****************
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // console.log(this.result);  
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
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
        this.$refs.scroll.finishPullUp()
        // res.data.list
        })
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    margin-bottom: -49px;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    background-color: #fff;
  }
  /* .content {
    height: calc(100% - 98px);
    overflow: hidden;
    margin-top: 44px;
  } */
  .tabControl{
    position: relative;
    z-index: 9;
  }
</style>
