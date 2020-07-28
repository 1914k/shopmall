<template>
  <div class="feature">
    <div class="teature-title">
      <h3>{{featuretitle}}</h3>
    </div>
    <a href="#">
      <div class="feature-body">
        <div class="feature-body-item" v-for="item in popular" :key="item.id">
            <div class="img">
              <img :src="item.img" alt="">
            </div>
          <p>{{item.title}}</p>  
        </div>
      </div>
    </a>  
    <!-- <a href="">
      <img src="@/assets/img/home/featureview/recommend.png" alt="">
    </a> -->
  </div>
</template>

<script>
  export default{
    name: "FeatureView",
    props:{
      featuretitle: {
        type: String,
        default() {
          return "本周流行"
        }
      },
    },
    data(){
      return {     
        popular: [
          {id: 0, title: "霸街长袖裙", img: require('@/assets/img/home/featureview/00feature.webp')},
          {id: 1, title: "时尚傲人套装", img:require('@/assets/img/home/featureview/01feature.webp')},
          {id: 2, title: "微胖遮肉穿搭", img: require('@/assets/img/home/featureview/02feature.webp')},
          {id: 3, title: "降温保暖鞋", img: require('@/assets/img/home/featureview/03feature.webp')},
          {id: 4, title: "颜值爆表套装裙", img: require('@/assets/img/home/featureview/04feature.webp')},
          {id: 5, title: "小心机V领", img: require('@/assets/img/home/featureview/05feature.webp')},
          {id: 6, title: "万圣节必备口红", img: require('@/assets/img/home/featureview/06feature.webp')},
          {id: 7, title: "软萌暖心包包", img: require('@/assets/img/home/featureview/07feature.webp')}
        ]
      }
    },
    created(){
      // console.log(this.popular)
    }
  }
</script>

<style scoped>
  .feature {
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    padding-top: 15px;
  }
  .feature img{
    width: 100%;
  }
  .feature-body {
    display: flex;
    flex-wrap: wrap;
    line-height: 30px;
    font-size: 12px;
    font-weight: bolder;
  }
  .feature-body-item {
    width: 25vw;
    text-align: center;
    margin:auto;
    margin-top: 8px;
  }
  .feature-body-item .img {
    width: 24vw;
    height: 24vw;
    border-radius: 50%;
    margin:auto;
    overflow: hidden;
  }
  .feature-body-item img {
    width: 24vw;
    /* height: 80px; */
  }
</style>