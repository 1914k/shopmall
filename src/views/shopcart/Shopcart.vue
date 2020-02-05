<template>
  <div id="shopcart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  export default {
    name: 'Shopcart',
    components: {
      NavBar
    }
  }
</script>

<style scopde>
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
