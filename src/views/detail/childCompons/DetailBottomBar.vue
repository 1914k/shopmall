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
      <div @click="itemClick(2)" :class="{active: isActive[2] === true}">
        <i class="iconfont icon-star"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="openCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <div class="product" v-show="isShow">
      <div class="mask"></div>
      <div class="allinfo">
        <div class="back" @click="back">X</div>
        <div class="main-info">
          <img :src="product.img" alt="">
          <div class="item-info">
            <div class="price"><span class="front">￥</span>{{product.price}}</div>
            <div class="stock">库存883件</div>
            <div class="cho-text">请选择： 颜色 尺码</div>
          </div>
        </div>
        <div class="choose">
          <div class="choose-item">
            <div class="lable">颜色</div>
            <ul>
              <li>图片色</li>
            </ul>
          </div>
          <div class="choose-item">
            <div class="lable">尺码</div>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
            </ul>
          </div>
          <div class="choose-item">
            <div class="lable">数量</div>
            <div class="number">
              <span class="btn reduce">-</span>
              <span class="btn">1</span>
              <span class="btn add">+</span>
            </div>
          </div>
        </div>
        <div class="buy">
          <div @click="addToCart" class="btn-sure">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'DetailBottomBar',
    props: {
      product: {}
    },
    data() {
      return {
        isActive: [false,false,false],
        isShow: false
      }
    },
    methods: {
      itemClick(i) {
        let a = i
        this.isActive[a] = !this.isActive[a];
        this.isActive.splice(a,1,this.isActive[a]);
      },
      openCart() {
        console.log('添加购物车');        
        this.isShow = true;
        // console.log(this.product);
        
      },
      addToCart() {
        this.$emit('addCart');
        this.isShow = false;
      },
      back() {
        this.isShow = false;
      }
    }
  }
</script>
<style scoped>
  .bottom-bar {
    height: 49px;
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
    line-height: 49px;
    background-color: yellow;
  }
  .buy {
    width: 100%;
    line-height: 49px;
    background-color: var(--color-tint);
    color: #fff;
    text-align: center;
  }
  .active {
    color: var(--color-high-text);
  }
  .product {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
  }
  .allinfo {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    font-size: 12px;
    text-align: start;
    line-height: 18px;
  }
  .main-info {
    position: relative;
    padding: 12px;
    display: flex;
    color: #333;
  }
  .main-info img {
    position: absolute;
    width: 20%;
    top: -25px;
  }
  .item-info {
    margin-left: 90px;
  }
  .front {
    position: relative;
    font-size: 12px;
    top: -8px;
  }
  .price {
    font-size: 24px;
  }
  .back {
    position: absolute;
    top: 5px;
    right: 12px;
    z-index: 1;
  }
  .choose {
    padding: 0 6px;
  }
  .lable {
    margin: 6px 0;
  }
  .choose-item {
    margin-bottom: 12px;
  }
  .choose-item ul li {
    display: inline;
    padding: 2px 12px;
    margin-right: 8px;
    /* margin-bottom: 8px; */
    border: 1px solid #bbb;
    border-radius: 3px;
  }
  .btn {
    border: 1px solid #bbb;
    padding: 2px 8px;
    border-collapse: collapse;
  }
  .reduce{
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: 0;
  }
  .add {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    border-left: 0;
    color: var(--color-high-text)
  }
</style>