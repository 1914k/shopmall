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
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null,
        message: "哈哈"
      }
    },
    methods: {
      scrollTo(x, y, time=500) {
        this.scroll.scrollTo(x,y,time);
      },
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll.refresh();
        console.log('########');
      }
    },
    mounted(){
      // document.querySelector('') 拿到的不准确，用 vue 自带的 ref 绑定好一些
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        // BScroll 默认不监听 click 事件，设置 click 为 true 
        click: true
      })
      // 监听滚动位置
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position);
      })
      // 监听上垃事件
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>

</style>