<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.index">
      <a href="#">
        <img :src="item.image" alt="" :style="{width:getWidth}">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created(){
      console.log(this.recommend);
      // this.getWidth();
    },
    computed: {
      getWidth(){
        let width = 100 / this.recommend.length + "vw";
        // let width2 = document.getElementsByClassName('.recommend').width;
        // console.log(width2);
        return width;
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-shrink: 1; 
    padding: 10px 0 15px 0;
    border-bottom: 10px solid #eee;
    font-size: 15px;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
  }
</style>