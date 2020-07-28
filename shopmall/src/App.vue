<template>
  <div id="app">
    <!-- exclude="Detail" 把 detail 排除在外 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "./assets/font_icon/iconfont.css";
</style> 