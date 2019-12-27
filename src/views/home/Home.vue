<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar';
  import { getHomeMultidata } from 'network/home';
  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data(){
      return {
        // result: null,
        banner: [],
        recommend: []
      }
    },
    created(){
      // 拿到多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        // this.result = res;
        // console.log(this.result);  
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
        console.log(this.banner);
        console.log(this.recommend);
      })
        // console.log(this.result); 这里打印的是空，因为 getHomeMultidata() 是异步操作

    }
  }
</script>

<style scopde>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
