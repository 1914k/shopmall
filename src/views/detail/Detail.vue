<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
  // 公共组件


  // 子组件
  import DetailNavBar from './childCompons/DetailNavBar'
  import DetailSwiper from './childCompons/DetailSwiper'
  // 工具类
  import { getDetail } from 'network/detail'
  export default{
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: []
      }
    },
    created() {
      this.id = this.$route.params.id;
      console.log(this.id);
      getDetail(this.id).then(res => {
        console.log(res[0]);
        this.topImages = res[0].result.topImages;
        console.log(this.topImages);
      })
    },
    components: {
      DetailNavBar,
      DetailSwiper
    }
  }
</script>

<style scoped>

</style>