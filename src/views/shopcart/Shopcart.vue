<template>
  <div id="shopcart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{CartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import CartList from './childCompons/CartList'
  export default {
    name: 'Shopcart',
    computed: {
      // 两种语法
      // ...mapGetters([cart])
      CartLength() {
        return this.$store.getters.cartLength;
      }
    },
    components: {
      NavBar,
      CartList
    }
  }
</script>

<style scopde>  
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    width: 100%;
  }
</style>
