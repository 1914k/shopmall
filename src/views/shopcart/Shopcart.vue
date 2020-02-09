<template>
  <div id="shopcart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar :cartList="cartProduct"/>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'

  import CartList from './childCompons/CartList'
  import CartBottomBar from './childCompons/CartBottomBar'

  import { mapGetters } from 'vuex'
  export default {
    name: 'Shopcart',
    data() {
      return {
        allcheck: false
      }
    },
    computed: {
      // 两种语法
      ...mapGetters(['cartLength','cartProduct'])
      // 或者
      // CartLength() {
      //   return this.$store.getters.cartLength;
      // }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    }
  }
</script>

<style scopde>  
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
</style>
