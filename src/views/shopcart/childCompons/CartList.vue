<template>
  <div class="cart-list">
    {{this.cartList}}
    <div class="content" v-if="cartList.length > 0">
      <div v-for="(item) in cartList" :key="item.id" class="content-item">
        <div class="select">
          <div @click="checkClick(item)" class="check" :class="{checkActive: isCheck === item.check}"><i class="fa fa-check check-item" aria-hidden="true"></i></div>
        </div>
        <div class="info">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="main-info">
            <div @click="toDetail(item.id)" class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div> 
            <div class="num">
              <span class="price">￥{{item.price}}</span>
              <div class="count">
                <span @click="reduce(item)" class="btn reduce">-</span>
                <span class="btn">{{item.count}}</span>
                <span @click="add(item)" class="btn add">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="i in 100" :key="i">{{i}}</div> -->
    </div>
  </div>
</template>

<script>
  import {ADD_COUNT} from'../../../store/mutation-types'
  export default{
    name: 'CartList',
    data(){
      return {
        isCheck: true
      }
    },
    methods: {
      checkClick(item) {
        item.check = !item.check;
      },
      toDetail(item) {
        this.$router.push({path: '/detail/' + item})
      },
      reduce(item) {
       this.$store.dispatch('reduceCount',item)
      },
      add(item) {
        this.$store.commit(ADD_COUNT,item);
      }
    },
    computed: {
      cartList() {
        return this.$store.getters.cartProduct;
      }
    },
    activated() {
      // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    }
  }
</script>

<style scoped>
  .cart-list {
    padding-top: 44px;
  }
  .content-item {
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #c2baba;
  }
  .check {
    position: relative;
    width: 20px;
    height: 20px;
    top: calc(50% - 10px);
    border: 2px solid #eee;
    border-radius: 50%;
  }
  .checkActive {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
    border-radius: 50%;
  }
  .check-item {
    color: #fff;
  }
  .info {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .img {
    width: 20vw;
    height: 30vw;
    overflow: hidden;
    margin: 5px;
    border-radius: 5px;
  }
  .img img {
    width: 100%;
  }
  .main-info {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    top: 0;
    left: 23vw;
    padding:5px;
    font-size: 12px;
    width: calc(100% - 23vw);
  }
  .title , .desc{
    flex: 1;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .desc {
    color: #aaa;
  }
  .num {
    flex: 2;
    position: relative;
  }
  .price {
    position: absolute;
    font-size: 14px;
    bottom: 5px;
    color: #ff8000;
  }
  .count {
    position: absolute;
    font-size: 14px;
    bottom: 5px;
    right: 10px;
  }
  .btn {
    padding: 2px 8px;
    border-collapse: collapse;
  }
  .reduce{
    color: var(--color-high-text)
  }
  .add {
    color: var(--color-high-text)
  }
</style>