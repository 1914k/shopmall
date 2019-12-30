<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.index">
        <a href="#" >
          <img :src="item.image" alt="">
        </a>
        <!-- <h1>你好啊</h1> -->
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar';
  import { getHomeMultidata } from 'network/home';
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: 'Home',
    data() {
      return {
        // result: null,
        banner: [],
        recommend: []
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
      Swiper,
      SwiperItem
    }
  }
</script>

<style scopde>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
