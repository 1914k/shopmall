<template>
  <div class="star">
    <div v-for="i in level" :key="i" >
      <img class="show" :src="star.on" alt="">
    </div>
    <div v-for="i in (5 - level)" :key="i + level" >
      <img class="show" :src="star.off" alt="">
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Star',
    props: {
      star: {},
      level: {
        type: Number,
        default() {
          return 0
        }
      }
    },

    mounted() {
      // console.log(this.star);
      // console.log(this.level);
    }
  }
</script>

<style scoped>
  .star {
    display: flex;
    margin-left: 6px;
  }
  .star div {
    margin-right: 2px;
  }
  .star img {
    width: 12px;
  }
</style>