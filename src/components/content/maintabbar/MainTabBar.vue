<template>
  <div id="tabbar">
    <tab-bar>  
      <tab-bar-item path="home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="shopcart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
     <tab-bar-item path="profile">  <!-- activeColor="blue" 可以传递activeColor 改变颜色 -->
        <img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/Tabbar"
  import TabBarItem from "components/common/tabbar/TabBaritem"

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  #tabbar {
    height: 49px;
    z-index: 99;
  }
</style>
