<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div @click="itemClick(0)" :class="{active: isActive[0] === true}">
      <i class="iconfont icon-kefu"></i>
      <span class="text">客服</span>
      </div>
      <div @click="itemClick(1)" :class="{active: isActive[1] === true}">
        <i class="iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="itemClick(2)" :class="{active: isActive[2] === false}">
        <i class="iconfont icon-star"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'DetailBottomBar',
    data() {
      return {
        isActive: [false,false,false]
      }
    },
    methods: {
      itemClick(i) {
        let a = i
        console.log(i);        
        this.isActive[a] = !this.isActive[a];
        console.log(this.isActive);
      }
    }
  }
</script>
<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
    justify-content: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
  }
  .bar-left {
    font-size: 12px;
  }
  .bar-left i {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
  }
  .bar-right {
    font-size: 14px;
  }
  .cart {
    width: 100%;
    line-height: 58px;
    background-color: yellow;
  }
  .buy {
    width: 100%;
    line-height: 58px;
    background-color: var(--color-tint);
    color: #fff
  }
  .active {
    color: var(--color-high-text);
  }
</style>