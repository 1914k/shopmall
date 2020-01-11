<template>
  <swiper class="detail-swiper">
    <swiper-item  v-for="(item, index) in topImages" :key="index" :index="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"
  // import SwiperItem from "components/common/swiper/SwiperItem"

  export default{
    name: "DetailSwiper",
    props: {
      topImages: null
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {

    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
  .detail-swiper {
    height: 300px;
  }
</style>