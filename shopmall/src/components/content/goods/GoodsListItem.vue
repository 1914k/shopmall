<template>
  <div class="goods-list-item" :style="{width: getWidth1}" @click="itemClick">
      <img :src="goodsitem.image" alt="" @load="imageLoad">
      <div class="goods-list-info">
        <p clas="title">{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span v-if="goodsitem.star" class="collect">{{goodsitem.star}}</span>
      </div>  
  </div>
</template>

<script>
  export default{
    name: "GoodsList",
    props: {
      goodsitem:{
        type: Object,
        default() {
          return {}
        }
      },
      width: null
    },
    methods: {
      imageLoad() {
        // console.log('imageLoad'); 
        this.$bus.$emit('itemImageLoad');      
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsitem.id)
      },
      //在 methods 里调用的话要在第二行 getWidth 后加一个括号 ()
      getWidth() {
        let width = this.width + "%";
        // console.log(this.width)  
        return width
      }
    },
    computed: {
      getWidth1() {
        let width = this.width + "%";
        return width
      }
    },
    created() {
      // console.log(this.goodsitem);
    }
  }
</script>

<style scoped>
  .goods-list-item {
    /* flex: 1;
    font-size: 12px; */
    width: 48%;
    /* margin: auto; */
    padding-bottom: 40px;
    position: relative;
  } 
  .goods-list-item img {
    /* width: 48vw; */
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-info {
    /* text-align: center;
    margin: auto; */
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-list-info p {
    /* text-overflow: ellipsis; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-list-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-list-info .collect {
    position: relative;
  }
  .goods-list-info .collect::before {
    content: '☆ ';
    /* background-color: url("@/assets/img/home/goods/star.png"); */
  }
  
</style>