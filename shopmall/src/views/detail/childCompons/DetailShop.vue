<template>
  <div v-if="Object.keys(shop).length !== 0" class="detail-shop">
    <a :href="shop.shopUrl">
      <div class="logo">
        <img :src="shop.shopLogo" alt="">
      </div>
    </a>
    <a :href="shop.shopUrl">
      <div class="content">
        <div class="name">{{shop.name}}</div>
        <div class="levelDesc">
          <span>{{shop.levelDesc}}</span>
          <!-- <div class="star">
            <div v-for="i in 5" :key="i" >
              <img class="show" ref="show" :src="" alt="">
            </div>
          </div> -->
          <star :star="shop.star" :level="shop.level"/>
        </div>
        <div class="saledesc">
          <span>{{shop.saleDesc}}</span>
          <span>{{shop.cGoods}}</span>
        </div>
      </div>
    </a>
    <a :href="shop.shopUrl">
      <div class="entry">
        <span>进店 </span>        
        <i class="fa fa-angle-right"></i>
      </div>
    </a>
  </div>
</template>

<script>
  import Star from 'components/common/star/Star'
  export default{
    name: 'DetailShop',
    props: {
      shop: {}
    },
    created() {
      setTimeout(() => {
        // console.log(this.shop);
      },50)
    },
    components: {
      Star
    }
    // computed: {
    //   getStar(a) {
    //     console.log(document.getElementsByClassName("show"));
    //     return a <= this.shop.level ? this.shop.star.on :this.shop.star.off;
    //   }
    // }
  }
</script>

<style scoped>
  .detail-shop {
    position: relative;
    display: flex;
    margin-top: 10px;
    padding: 0 12px 0;
    font-size: 14px;
    color: #666;
    line-height: 18px;
    border-bottom: 10px solid #eee;
  }
  .logo {
    margin-right: 10px;
  }
  .logo img {
    width: 60px;
  }
  .levelDesc {
    color: var(--color-high-text);
    display: flex;
  }
  .levelDesc,.saledesc {
    font-size: 12px;
  }
  
  .entry {
    position: absolute;
    right: 12px;
    top: -2px;
  }
</style>