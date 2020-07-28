<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" 
    :key="index" :width="width" :goodsitem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default{
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      },
      width: null
    },
    components: {
      GoodsListItem
    },
    created() {
      // console.log(this.goods)
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  } 
</style>