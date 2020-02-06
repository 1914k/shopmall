<template>
  <div class="cart-list">
    <div class="cart-list-item">
      <div class="select"></div>
      <div class="info">
        <div class="img">
          <img :src="info.img" alt="">
        </div>
        <div class="main-info">
          <div class="price">0{{info.price}}</div>
          <div class="title">{{info.title}}</div>
          <div class="desc">{{info.desc}}</div>
        </div>
      </div>
    </div>
    <!-- <div v-for="i in 100" :key="i">{{i}}</div> -->
  </div>
</template>

<script>
  export default{
    name: 'CartList',
    data(){
      return {
        info: {
          id: "p1",
          img: "https://s5.mogucdn.com/mlcdn/c45406/171124_5412i5l821945b19ljg665e7882d7_640x960.jpg",
          title: "时尚套装女春季新款小清新喇叭袖套头毛衣宽松显瘦高腰格子半身裙",
          desc: "时尚套装女春季新款小清新喇叭袖套头毛衣宽松显瘦高腰格子半身裙",
          price: "118.00",
          count: 1
        }
      }
    },
    computed: {
      cartList() {
        console.log(this.$store.getters.cartProduct);
        return this.$store.getters.cartProduct;
      }
    }
  }
</script>

<style scoped>
  .cart-list {
    padding-top: 44px;
  }
  .cart-list-item {
    overflow: hidden;
    position: relative;
    display: flex;

  }
  .img {
    width: 25vw;
    /* height: 20vw; */
    overflow: hidden;
  }
  .img img {
    width: 100%;
  }
</style>