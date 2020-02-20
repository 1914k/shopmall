<template>
  <div id="category">
      <div class="wrapper">
        <h1>分类</h1>
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
    height: 100vh;

    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>
