<template>
  <div class="cart-bottom" id="contentpay">
    <div class="content">
      <div class="select">
        <div @click="checkClick" class="check" v-bind:is-check="isAllCheck" :class="{checkActive: isAllCheck === true}"><i v-if="isAllCheck" class="fa fa-check check-item" aria-hidden="true"></i></div>
        <div class="title">全选</div>
     </div>
     <div class="pay">
       <div class="total">合计：￥{{total.price}}</div>
       <div @click="pay" class="pay-btn">去结算({{total.count}})</div>
     </div>
    </div>
    <div class="nocount" v-show="isCount">
      <div class="nocout-info">{{title}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'CartBottomBar',
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        title: "请添加商品！",
        isCount: false
      }
    },
    computed: {
      total() {
        const total = {
          count: 0,
          price: 0
        }
        for(let item of this.cartList){
          if(item.check){
            total.count += item.count;
            total.price += item.count * item.price;
          }    
        }
        total.price = total.price.toFixed(2);
        return total;
      },
      isAllCheck() {
        if(this.cartList.length === 0) return false;
        return !this.cartList.find(item => !item.check)
      }
    },
    methods: {
      checkClick() {
        if(this.isAllCheck) {
          this.cartList.forEach(item => item.check = false);
        } else {
          this.cartList.forEach(item => item.check = true); 
        }
      },
      pay() {
        if(this.total.count === 0) {
          this.isCount = true;
          if(this.cartList.length > 0 )  this.title = "请选择商品！"; 
          setTimeout(() => {
            this.isCount = false;
          }, 1000)        
         
        }
        // this.$toast.show("哈哈", 2000);
        console.log(this.$toast);        
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    width: 100vw;
    height: 49px;
    background-color: #f0efef;
    position: fixed;
    bottom: 49px;
  }
  .content {
    height: 100%;
    display: flex;
  }
  .select {
    width: 25vw;
    padding-left: 10px;
    height: 100%;
    display: flex;
  }
  .check {
    position: relative;
    width: 20px;
    height: 20px;
    top: calc(50% - 10px);
    border: 2px solid #929292;
    border-radius: 50%;
  }
  .title {
    position: relative;
    line-height: 49px;
    font-size: 12px;
    margin-left: 5px;
  }
  .checkActive {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
    border-radius: 50%;
  }
  .check-item {
    color: #fff;
  }
  .pay {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .total {
    padding-left: 5px;
  }
  .pay-btn {
    position: absolute;
    top: calc(50% - 19px);
    right: 10px;
    background-color: var(--color-tint);
    color: #fff;
    padding: 10px 15px;
    border-radius: 19px;
  }
  .nocount {
    position: fixed;
    text-align: center;
    line-height: 30px;
    width: 60vw;
    height: 40px;
    padding: 5px 5px;
    border-radius: 5px;
    box-sizing: border-box;
    top: 20%;
    left: calc(50% - 30vw);
    background-color: rgba(0,0,0,0.7);
    color: #eee;
  }
</style>