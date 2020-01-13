<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span class="currency">{{goods.currency}}</span>
        <span class="new-price">{{goods.newPrice}}</span>
        <span class="old-price">{{goods.currency}}{{goods.oldPrice}}</span>
        <span class="price-tags" :style="{backgroundColor:goods.priceTags.bgColor}">{{goods.priceTags.text}}</span> 
      </div>
      <div class="info-other">
        <span v-for="item in goods.columns" :key="item">{{item}}</span>
      </div>
      <div class="info-service">
        <div class="serice-content">
          <div class="serice-content-item">
            <span class="item-icon"><img :src="goods.services[0].icon" alt=""></span>
            <span>{{goods.services[0].name}}</span>
          </div>
          <div class="serice-content-item">
            <span class="item-icon"><img :src="goods.services[0].icon" alt=""></span>
            <span>{{goods.services[1].name}}</span>
          </div>
          <div class="serice-content-item">
            <span class="item-icon"><img :src="goods.services[0].icon" alt=""></span>
            <span>{{goods.services[2].name}}</span>
          </div>
          <div class="serice-content-item" 
                @click="itemClick">
            <img class="back" src="../../../assets/img/common/back.png" alt="">
          </div>
        </div>
        <div class="serice-all-content" v-show="isShow">
          <div class="all-content-mask">
            <div class="all-content">
              <div class="all-content-back" @click="allBack">×</div>  
              <div class="all-content-title">
                服务说明
              </div>
              <ul>
                <li v-for="(item,index) in goods.services" :key="index">
                  <div class="all-content-body">
                    <p>{{item.name}}</p>
                    <span>{{item.content}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    name: 'DetailGoods',
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    created(){
      // console.log(this.goods);
      setTimeout(() => {
        // console.log(this.goods);
      }, 50);
    },
    methods: {
      itemClick() {
        this.isShow = true;
      },
      allBack() {
        this.isShow = false;
      }
    }
  }
</script>

<style scoped>
  .base-info {
    position: relative;
    font-size: 14px;
    margin: 10px 8px 8px 8px;
  }
  .info-title {
    margin-top: 10px;
    font-weight: bolder;
    text-indent:  0.5rem;
  }
  .info-price {
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
  }
  .currency,.new-price{
    color: var(--color-high-text);
    font-size: 20px;
    font-weight: bolder    
  }
  .old-price {
    margin-left: 5px;
    margin-right: 5px;
    color: #888;
    opacity: 0.7;
    text-decoration: line-through;
  }
  .price-tags {
    font-size: 12px;
    letter-spacing: 3px;
    text-align: center;
    color: #fff;
    padding: 2px 8px;
    border-radius: 9px;
    position: absolute;
    top: 0;
  }
  .info-other {
    display: flex;
    justify-content:space-between;
    text-align: center;
    color: #888;
    padding-bottom: 8px;
    border-bottom: 0.1rem solid #eee; 
  }
  .serice-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 50px;
    border-bottom:  2px solid #eee;
    padding: 0 8px;
    margin: 0 -8px;
    /* box-sizing: border-box; */
  }
  .serice-content-item img {
    position: relative;
    display: inline-block;
    width: 13px;
    bottom: -1px;
  }
  .serice-content-item .back {
    width: 20px;
    transform: rotate(180deg);
    bottom: -5px;
  }
  .serice-all-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
  .all-content-mask {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
  }
  .all-content {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    padding: 12px;
    font-size: 12px;
    line-height: 18px;
  }
  .all-content-back {
    position: absolute;
    right: 12px;
  }
  .all-content-title {
    color: #000;
    text-align: center;
    padding: 10px 0;
  }
  .all-content ul {
    list-style: none;
  }
  .all-content-body {
    padding: 8px;
    border-bottom: 1px solid #dfdfdf;
  }
  li:last-child div{
    /* padding: 8px; */
    border: 0;
  }
  .all-content-body p {
    color: #000;
  }
  .all-content-body span {
    color: #999;
  }
</style>