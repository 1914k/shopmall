<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    name: "Scroll",
    data(){
      return {
        scroll: null,
        message: "哈哈"
      }
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll.scrollTo(x,y,time);
      }
    },
    mounted(){
      // document.querySelector('') 拿到的不准确，用 vue 自带的 ref 绑定好一些
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: 3,
        pullUpLoad: true,
        click: true
      })

      this.scroll.on('scroll',() => {
        // console.log(position);
      })

      this.scroll.on('pullingUp',() => {
        console.log('加载更多！');
      })
    }
  }
</script>

<style scoped>

</style>