<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.index">
        <a :href="item.link" >
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    beforeUpdate() {
      // console.log(this.banner);
      // this.banner[2].image ="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg";
    },
    methods: {
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>