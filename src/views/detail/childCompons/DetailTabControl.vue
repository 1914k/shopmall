<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index === currentIndex}"
     v-for="(item,index) in titles" :key="index"
     @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index;
        this.$emit("tabClick",index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex; 
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    padding: 0 2px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active {
    border-bottom: 1px solid var(--color-high-text);
  }
</style>