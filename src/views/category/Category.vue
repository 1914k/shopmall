<template>
  <div id="category">
      <div class="wrapper">
        <ul class="content"><li v-for="item in 100" :key="item">{{item}}</li></ul>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Category',
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType: 3
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #f00;
    height: 100vh;

    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>
